const express = require("express");
const path = require("path");
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const cors = require("cors");


const { request } = require("http");
const { error } = require("console");


const app =express();
app.use(express.json())
app.use(cors());

const dbPath = path.join(__dirname , "medication_ms.db");

let db=null;

const initializeDBAndServer = async() =>{
    try{
        db=await open({
        filename:dbPath,
        driver:sqlite3.Database
    });
    app.listen(5000 , () =>{
    console.log("Server is Running http://localhost:5000/")
})
    } catch(e){
        console.log(`DB Server:${e.message}`)
        process.exit(1)
        
    }
}

initializeDBAndServer()

// register new user details

app.get("/users/", async (request , response) => {
  const users = [
  {
    "username": "cliffordhayes",
    "name": "Clifford",
    "password": "$2b$10$4dYWb8qb08jgQZ6zD6GxJujfEbRLCJ6zGg59HitWrcoRjUGzd3ueS",
    "gender": "female",
    
  },
  {
    "username": "noahparks",
    "name": "Noah Parks",
    "password": "$2b$10$mNSl3uHRr6wqq86twAgMQO923lQrVLoUDJAmsCN8ChP7BjJCqgjBG",
    "gender": "male",
    
  },
  {
    "username": "vergilWard",
    "name": "Vergil Woodward",
    "password": "$2b$10$XHxd9vIvKQdK8w4WlJ8jpO0k.xcDQAAJrPbl7GUHu9ifh4/VbUyIG",
    "gender": "male",
    
  },
  {
    "username": "emerson",
    "name": "Emerson Jensen",
    "password": "$2b$10$ubPsEU38mTE3CWlK8zMDeuC59FDqruEP5Mp9HJ6omFw6YSXGGkEb2",
    "gender": "male",
    
  },
  {
    "username": "richard",
    "name": "Richard Fairbank",
    "password": "$2b$10$8PaoENDQAIS6mpCkOMh0bOjGn0QB2RBFB2T52eL8r2mYqnAxMvhna",
    "gender": "male",
    
  }
  // Add remaining users if needed
];

for (const user of users) {
  const insertQuery = `
    INSERT OR IGNORE INTO user (username, name, password, gender)
    VALUES (?, ?, ?, ?);
  `
  await db.run(insertQuery, [
    user.username,
    user.name,
    user.password,
    user.gender,
    
  ]);
  response.send("user table array created")
}
})


const authorization = (request,response,next) =>{
  const authHeader=request.headers["authorization"]
  let jwtToken;
  if(authHeader !== undefined){
    //take the JWT token 
    jwtToken=authHeader.split(" ")[1]

  }
  if(jwtToken === undefined){
    //Invalid JWT Token 
    response.status(401);
    response.send("Invalid JWT Token")
  }else{
    const verifyJwtToken=jwt.verify(jwtToken,"MY_SCRETE_KEY",(error,payload) =>{
      if(error){
        //Invalid JWT Token 
        response.status(401);
        response.send("Invalid JWT Token");
      }else{
        next()
      }
    })
  }
}

//register nre user

app.post("/register/",async(request , response) =>{
    const {username , name ,password , gender}=request.body
    const hashPassword =await bcrypt.hash(password , 10)
    
    console.log(username)
    const selectUserQuery = `
          SELECT 
            * 
          FROM 
            user
          WHERE 
            username = '${username}';
         `;
         const dbUser = await db.get(selectUserQuery)
         
         
  if (dbUser === undefined) {
    if (password.length < 6) {
      response.status(400).json({ message: "password is too short" });
    } else {
      const addUserQuery = `
        INSERT INTO user (username, name, password, gender)
        VALUES (
          '${username}',
          '${name}',
          '${hashPassword}',
          '${gender}'
        );
      `;
      await db.run(addUserQuery);
      response.json({ message: "Register Successfully" });
    }
  } else {
    response.status(400).json({ message: "user already exists" });
  }
})

//Get userdetails 
const convertDBtoCamelCase = (dbObject) =>{
  return{
    id:dbObject.id,
    username:dbObject.username,
    name:dbObject.name,
    password:dbObject.password,
    gender:dbObject.gender
  }
}

app.get("/user/",authorization,async(request,response) =>{
  const getUserQuery=`
     SELECT 
     * 
     FROM 
       user
  `;
     const dbUser=await db.all(getUserQuery)
     response.send(dbUser.map(eachUser =>convertDBtoCamelCase(eachUser)))
})


//user login 
app.post("/login/",async(request , response) =>{
  const { username , password}=request.body
  const selectUserQuery = `
      SELECT 
      * 
      FROM 
        user 
      WHERE 
        username = '${username}'
      
  `;
     const dbUser = await db.get(selectUserQuery)
     if(dbUser === undefined){
      //Invalid username 
       response.status(400);
       response.json({message:"Invalid Username"})
     }
     else{
       //check the password 
       const ifPasswordMatch =await bcrypt.compare(password , dbUser.password)
       if(ifPasswordMatch === true){
            //Creative the JWT Token
            const payload={username:username} 
            const jwtToken = jwt.sign(payload,"MY_SCRETE_KEY")
            response.json({jwtToken})
       }else{
        //Invalid Password 
         response.status(400)
         response.json({message:"Invalid Password"})
       }
     }
})

module.exports=app;




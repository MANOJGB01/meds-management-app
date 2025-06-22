import { Component } from "react";
import Cookies from "js-cookie"
import withNavigation from "../../utils/withNavigation";
import { Navigate } from "react-router-dom";

import {
    AppContainer,LoginContainer,Heading,InputContainer,InputLabel,NameInput,CheckboxContainer,Checkbox,ShowPassword,
    LoginButton,ShowError,ImgContainer,
} from "./styledcomponents"

class LoginForm extends Component{
   state={
    onUsername:"",
    onPassword:"",
    showPassword:false,
    showSubmitError: false,
    errorMsg: '',

   }


  onLoginSuccess = (jwtToken) => {
    //Login Successfully Navigate to Home Page
    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    this.props.navigate("/")

  }

  onLoginFailure = errorMsg => {
    //Login Failure 
    this.setState({showSubmitError: true, errorMsg})
  }


  submitForm = async event => {
    event.preventDefault();
    const {onUserName, onPassword } = this.state;

  const userDetails = {
    username: onUserName,
    password: onPassword,
   };
  console.log(userDetails)

  const url = 'http://localhost:5000/login/';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userDetails),
  };

  const response = await fetch(url, options);
  const data = await response.json();
   if (response.ok === true) {
      this.onLoginSuccess(data.jwtToken)
    } else {
      this.onLoginFailure(data.message)
    }
};


  onChangeUserName = event => {
    this.setState({onUserName: event.target.value})
  }

  onChangePassword = event => {
    this.setState({onPassword: event.target.value})
  }

  
  onShowPassword = () =>{
    this.setState(prevState =>({
        showPassword:!prevState.showPassword
    }))
  }

    

    renderUserNameFilde = () =>{
      const{onUserName}=this.state
      return(
        <>
          <InputLabel html="username">USERNAME</InputLabel>
          <NameInput
          type="text"
          placeholder="username"
          value={onUserName}
          onChange={this.onChangeUserName}
          id="username"
          />
      
        </>
      )
    }
     //Password details
    renderPasswordFilde = () =>{
      const{onPassword,showPassword}=this.state
      const inputType=showPassword ? "text" : "password";
      return(
        <>
          <InputLabel html="passowrd">PASSWORD</InputLabel>
          <NameInput
          id="password"
          type={inputType}
          value={onPassword}
          placeholder="password"
          onChange={this.onChangePassword}
          />
        <CheckboxContainer>
          <Checkbox
            type="checkbox"
            id="checkbox"
            onChange={this.onShowPassword}
          />
          <ShowPassword htmlFor="checkbox">Show Password</ShowPassword>
        </CheckboxContainer>
      
        </>
      )
    }

    

     render(){
        const{showSubmitError,errorMsg}=this.state
        
         const jwttoken = Cookies.get("jwt_token");

           if (jwttoken !== undefined) {
                return <Navigate to="/" />;
            }
        //SignUpForm Userdetails
        return(
            <AppContainer>
            <LoginContainer onSubmit={this.submitForm}>
                <ImgContainer>
                <img src="https://cdn-icons-png.flaticon.com/512/3209/3209265.png" alt="Medication Symbol" style={{ width: "70px", marginBottom: "15px" }} />
                <Heading>Login</Heading>
                </ImgContainer>
                <InputContainer>{this.renderUserNameFilde()}</InputContainer>
                <InputContainer>{this.renderPasswordFilde()}</InputContainer>
                <LoginButton type="submit">Login</LoginButton>
                {showSubmitError && <ShowError>* {errorMsg}</ShowError>}
            </LoginContainer>
            </AppContainer>
        )
     }
}
export default withNavigation(LoginForm)
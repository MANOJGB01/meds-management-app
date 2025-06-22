import styled from "styled-components";

export const Homecontainer = styled.div`
     background-color:#d7f7ee;
     display:flex;
     flex-direction:column;
     justify-content:flex-start;
     align-items:center;
     padding-top:20px;
     width:100vw;
     padding-bottom:2px;
`

export const Heading=styled.h1`
     font-size:35px;
     font-family:'Roboto';
     font-weight:bold;
     color:black;
`

export const Element = styled.p`
     font-size:20px;
     font-family:'Roboto';
     font-weight:500;
     color:#717574;
     width:50%;
     margin-top:0px;
     text-align:center;
`

export const MainContainer=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width:70%;
    
`

export const ParentContainer = styled.div`
    background-color:#ffffff;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
    padding:15px;
    width:450px;
    height:450px;
    border-radius:10px;
    box-shadow:0px 4px 8px rgba(0,0,0,0.2)
    transition: all 0.3s ease;
    &:hover {
    box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.3);
    border-color: #00b894; /* highlight color */
  }
  }
`

export const ImagesContainer =styled.div`
      display:flex;
      flex-direction:row;
      justify-content:center;
      align-items:center;
      background-color:#c2dded;
      border-radius:13px;
      transition: all 0.3s ease;
      &:hover .icon {
      background-color: #00b894;
      color: white;
  }
`
export const ImagesContainer1 =styled.div`
      display:flex;
      flex-direction:row;
      justify-content:center;
      align-items:center;
      background-color:#c2dded;
      border-radius:13px;
      transition: all 0.3s ease;
      &:hover .icon {
      background-color: #50d46b;
      color: white;
  }
`

export const Heading1 =styled.h1`
     font-size:23px;
     font-family:"Roboto";
     font-weight:550;
     color:${props =>props.color};
     margin-bottom:1px
     margin-top:3px
`

export const Paragraph=styled.p`
     font-size:17px;
     font-family:"Roboto";
     font-weight:500;
     color:#8f9694;
     width:98%;
     text-align:center;
     margin-top:0px;
`

export const Lists = styled.ul`
  list-style: none;
  padding-left: 0;
  width:90%;
`
export const ListItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 12px;
`

export const Bullet = styled.span`
  color: #00b894; /* Bullet color */
  margin-right: 10px;
  font-size: 20px;
  line-height: 1;
`
export const Bullet1 = styled.span`
  color: #2dc263; /* Bullet color */
  margin-right: 10px;
  font-size: 20px;
  line-height: 1;
`

export const Text = styled.span`
  color: #77857d; /* Text color */
  font-size: 15px;
`
export const ButtonElement = styled.button`
  width: 90%;
  background-color: #2053c9;
  border: none;
  border-radius: 5px;
  font-family: "Roboto", sans-serif;
  font-size: 19px;
  padding: 10px;
  color: #ffffff;
  margin-top: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #143aa3; /* slightly darker on hover */
  }
`

export const ButtonElement1 = styled.button`
  width: 90%;
  background-color: #2dc263;
  border: none;
  border-radius: 5px;
  font-family: "Roboto", sans-serif;
  font-size: 19px;
  padding: 10px;
  color: #ffffff;
  margin-top: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #19c23b; /* slightly darker on hover */
  }
`
export const Elemente = styled.p`
     font-size:15px;
     font-family:"Roboto";
     font-weight:500;
     color:#8f9694;
     width:98%;
     text-align:center;
     margin-top:30px;
`



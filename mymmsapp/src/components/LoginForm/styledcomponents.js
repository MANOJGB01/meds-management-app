import styled from "styled-components"

export const AppContainer = styled.div`
    background-color:#a3b1c7;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    height:100vh;
    width:100vw;
`

export const LoginContainer=styled.form`
      background-color:#ffffff;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      width:35vw;
      height:60vh;
      border-radius:12px;
      box-shadow:0px 4px 8px rgba(0,0,0,0.2)
      padding:14px;
`
export const Heading = styled.h1`
     color:#3d3d3d;
     font-size:30px;
     font-weight:bold;
     font-family:"Roboto";
`
export const InputContainer = styled.div`
    width:80%;
    margin-top:6px;
`
export const InputLabel = styled.label`
    font-family:"Roboto";
   font-size:12px;
   color:#475569;
   font-weight:500;
`

export const NameInput = styled.input`
   font-family:"Roboto";
   font-size:15px;
   color:#333131;
   outline:none;
   padding:8px;
   width:100%;
   border:1px solid #94a3b8;
   border-radius:4px;
   margin-top:5px;
`
export const CheckboxContainer = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  margin:12px;
`
export const Checkbox = styled.input`
   width:15px;
   height:15px;
   margin-right:5px;
`
export const ShowPassword = styled.label`
   font-family"Roboto";
   font-size:15px;
   color:#1e293b;
`
export const LoginButton = styled.button`
   width:80%;
   background-color:#4f46e5;
   border:none;
   border-radius:5px;
   font-family:"Roboto";
   font-size:15px;
   height:30px;
   color:#ffffff;
   margin-top:20px;
`

export const SubmitError = styled.p`
   font-family:"Roboto";
   font-size:12px;
   color:#ff0b37;
`

export const ShowError = styled.p`
   font-family:"Roboto";
   font-size:12px;
   color:#ff0b37;
   margin-bottom:0px;
   margin-top:2px;
`

export const ImgContainer = styled.div`
     display:flex;
     flex-direction:row;
     
`
import styled from "styled-components";

export const HeaderContainer = styled.nav`
      background-color:#ffffff;
      display:flex;
      flex-direction:row;
      justify-content:space-between;
      align-items:center;
      width:100%;
      padding-right:120px;
      padding-left:120px;
      height:73px;
`

export const ImgandHeadeingContainer = styled.div`
     display:flex;
     flex-direction:row;
     justify-content:space-between;
     align-items:center;
     width:24%;
`
export const SymboleContainer = styled.div`
    background-image:linear-gradient(to bottom,#1054ad,#79c9ad);
    border-radius:10px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    height:42px;
    width:42px;
`

export const HeaderL = styled.h1`
    font-size:20px;
    font-weight:600;
    font-family:"Roboto";
    color:#ffffff;
    padding:10px;
`

export const MedicarecompanionContainer = styled.div`
    display:flex;
    flex-direction:column;
`

export const Heading = styled.h1`
    font-size:22px;
    font-weight:600;
    font-family:"Roboto";
    margin-bottom:3px;
`
export const PatientViwe = styled.p`
    font-size:12px;
    font-weight:500;
    font-family:"Roboto";
    margin-top:0px;
    color:#6f757d;
`

export const SwitchButton = styled.button`
     background-color:#ffffff;
     font-size:10px;
     font-weight:500;
     font-family:"Roboto";
     display:flex;
     flex-direction:row;
     padding:4px;
     border-radius:8px;
     border-width:1px;
     cursor: pointer;
     transition: background-color 0.3s ease;
     &:hover {
     background-color: #dadce0; /* hover background color */
  }

`
export const Paragraph = styled.p`
     font-size:15px;
     font-weight:500;
     font-family:"Roboto";
     margin:7px;
     
`

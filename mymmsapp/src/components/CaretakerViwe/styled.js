import styled from "styled-components";

export const Homecontainer = styled.div`
     background-color:#d7f7ee;
     display:flex;
     flex-direction:column;
     justify-content:flex-start;
     align-items:center;
     width:100vw;
     height:100vh;
     padding-bottom:2px;
`

export const Container=styled.div`
     display:flex;
     flex-direction:column;
     justify-content:flex-start;
     align-items:center;
     padding-top:25px;
     padding-bottom:10px;
     width:100%;
`

export const StatusContainer = styled.div`
    background-image:linear-gradient(to right,#169e4d,#79c9ad);
    border-radius:14px;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    
    height:250px;
    width:80%;
    padding:33px;

`

export const ImgandText = styled.div`
     display:flex;
     flex-direction:row;
     justify-content:space-between;
     align-items:center;
     width:55%;
`

export const IconContainer=styled.div`
     display:flex;
     flex-direction:column;
     justify-content:center;
     align-items:center;
     background-color: rgba(243, 245, 247, 0.17); /* more transparent */
     backdrop-filter: blur(8px);
     -webkit-backdrop-filter: blur(8px);
     border-radius:10px;
     border:none;

`

export const TextContainer=styled.div`
    display:flex;
    flex-direction:column;

`

export const Heading = styled.h1`
    font-size:31px;
    font-family:"Monoton";
    font-weight:bold;
    color:${props =>props.color};
    margin-bottom:0px;
    margin-top:0px;
`

export  const Paragraph = styled.div`
    font-size:20px;
    font-family:"Roboto";
    font-weight:300;
    color:#ffffff;
`

export const Containers = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    width:100%;
`
export const ContainerStatus=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 200px;
  height: 90px;
  background-color: rgba(243, 245, 247, 0.17); /* more transparent */
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  margin-top: 20px;
  padding-top: 17px;
  padding-left: 17px;
  border-radius: 10px;
`
export const Count=styled.span`
     font-size:22px;
     font-family:"Roboto";
     font-weight:500;
     color:#ffffff;
     margin-bottom:5px;
`

export const Streak =styled.p`
     font-size:20px;
     font-family:"Roboto";
     font-weight:lighter;
     color:#ffffff;
     margin-top:0px;
`
export const ListElements = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around; 
  align-items: center;
  width: 80%;
  height: 50px;
  padding: 0;
  margin-top:20px;
  background-color: #f1f5f9; 
  border-radius: 8px;

  list-style-type: none;
  font-size: 16px;
  color: #64748b; 
`;
export const TabItem = styled.li`
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  
  }
`;


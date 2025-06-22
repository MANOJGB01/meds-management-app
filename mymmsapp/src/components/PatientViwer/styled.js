import styled from "styled-components";

export const Homecontainer = styled.div`
     background-color:#d7f7ee;
     display:flex;
     flex-direction:column;
     justify-content:flex-start;
     align-items:center;
     width:100vw;
     
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
    background-image:linear-gradient(to right,#4991eb,#79c9ad);
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
     width:47%;
`

export const IconContainer=styled.div`
     display:flex;
     flex-direction:column;
     justify-content:center;
     align-items:center;
     background-color:#7eafed;
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
  width: 300px;
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

export const StatusDot = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color:transparent;
  border: 2px solid #ffffff; /* white border */
  margin-right: 10px;
  margin-bottom:10px;
`;

export const ListContainer=styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    width:80%;
    margin-top:30px;
`

export const MedicationContainer=styled.div`
    background-color:#ffffff;
    width:50vw;
    
    border-radius:13px;
     border:1px solid #d5dbe3;
     padding:30px;
    box-shadow:0px 4px 8px rgba(0,0,0,0.1)
    

    
`

export const DayContainer=styled.div`
      display:flex;
      flex-direction:row;
      justify-content:space-between;
      align-items:center;
      width:41%;
`

export const CalenderContainer=styled.div`
    background-color:#ffffff;
    width:27vw;
    height:60vh;
    border-radius:13px;
     border:1px solid #d5dbe3;
     padding:26px;
    box-shadow:0px 4px 8px rgba(0,0,0,0.2)
    
`

export const Heading1 = styled.h1`
    font-size:26px;
    font-family:"Roboto";
    font-weight:lighter;
    color:black;
    margin-bottom:0px;
    margin-top:0px;
    width:100%;
`

export const DailySet=styled.div`
     display:flex;
     flex-direction:row;
     justify-content:space-between;
     align-items:center;
     border:1px solid grey;
     border-radius:10px;
     width:100%;
     height:83px;
     margin-top:10px;
`

export const MedicationproofContainer=styled.div`
   display:flex;
   flex-direction:column;
   justify-content:flex-start;
   align-items:center;
   width:100%;
   height:32vh;
   margin-top:30px;
   border:1px solid grey;
   border-style:
   border-radius:14px;
   border-style: dashed;
   padding:20px;
`

export const Head=styled.h1`
     font-size:20px;
     font-family:"Roboto";
     font-weight:500;
     margin-top:0px;
`

export const Text=styled.p`
     font-size:12px;
     font-weight:normal;
     font-family:"Roboto";
     margin-top:0px;
     color:#979a9c;
`

export const TakePhoto=styled.div`
      display:flex;
      flex-direction:row;
      justify-content:space-between;
      align-items:center;
      width:200px;
      height:45px;
      border-radius:10px;
      border:1px solid grey;
      padding-left:28px;
      padding-right:28px;

`

export const Text1=styled.p`
  font-size:17px;
  font-family:"Roboto";
  font-weight:200;
`

export const Text2=styled.p`
   font-size:18px;
  font-family:"Roboto";
  color:#ffffff;
   margin-left:10px;
`

export const MarkButton=styled.button`
    background-color:#2ab041;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    border:none;
    width:100%;
    height:40px;
    margin-top:15px;
    border-radius:12px;

`
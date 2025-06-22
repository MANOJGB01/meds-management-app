import Header from "../Header"
import { FaPersonMilitaryToPerson } from "react-icons/fa6";
import {Homecontainer,Container,StatusContainer,ImgandText,IconContainer,TextContainer,Heading,Paragraph,Containers,ContainerStatus,Count,Streak,
  ListElements,TabItem,
} from "./styled"

import "./index.css"

const PatientViwer = () => (
  <Homecontainer>
    <Header />
    <Container>
           <StatusContainer>
               <ImgandText>
                   <IconContainer>
                       
                       <FaPersonMilitaryToPerson size={35} className="iconss"/>

                   </IconContainer>
                  <TextContainer>
                          <Heading color={"#ffffff"}>Caretaker Dashboard</Heading>
                          <Paragraph>Monitoring Eleanor Thompson's medication adherence</Paragraph>
                       </TextContainer>
               </ImgandText>
               <Containers>
                   <ContainerStatus>
                      <Count>0%</Count>
                      <Streak>Adherence Rate</Streak>
                   </ContainerStatus>
                   <ContainerStatus>
                      <Count>0</Count>
                      <Streak>Current Streak</Streak>
                   </ContainerStatus>
                   <ContainerStatus>
                      <Count>0 </Count>
                      <Streak>Missed This Month</Streak>
                   </ContainerStatus>
                   <ContainerStatus>
                      <Count>0</Count>
                      <Streak>Taken This Week</Streak>
                   </ContainerStatus>
               </Containers>
           </StatusContainer>
           <ListElements>
                
                   <TabItem>Overview</TabItem>
                   <TabItem>Recent Activity</TabItem>
                   <TabItem>Calendar View</TabItem>
                   <TabItem>Notifications</TabItem>
               
           </ListElements>
        </Container>
  </Homecontainer>
)
export default PatientViwer
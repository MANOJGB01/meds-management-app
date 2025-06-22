import Header from "../Header"
import { RxPerson } from "react-icons/rx";
import { IoCalendarClearOutline } from "react-icons/io5";
import { CiImageOn } from "react-icons/ci";
import { MdOutlineAddAPhoto } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { CiClock1 } from "react-icons/ci";
import {Homecontainer,Container,StatusContainer,ImgandText,IconContainer,TextContainer,Heading,Paragraph,Containers,ContainerStatus,Count,Streak,StatusDot,
  ListContainer,MedicationContainer,CalenderContainer,DayContainer,Heading1,DailySet,MedicationproofContainer,Head,Text,TakePhoto,Text1,Text2,MarkButton,
  
} from "./styled"

import "./index.css"


const PatientViwer = () => (
  <Homecontainer>
    <Header />
    <Container>
       <StatusContainer>
           <ImgandText>
               <IconContainer>
                   <RxPerson size={35} className="iconss"/>
               </IconContainer>
              <TextContainer>
                      <Heading color={"#ffffff"}>Good Evening!</Heading>
                      <Paragraph>Ready to stay on track with your medication?</Paragraph>
                   </TextContainer>
           </ImgandText>
           <Containers>
               <ContainerStatus>
                  <Count>0</Count>
                  <Streak>Day Streak</Streak>
               </ContainerStatus>
               <ContainerStatus>
                  <StatusDot />
                  <Streak>Today's Status</Streak>
               </ContainerStatus>
               <ContainerStatus>
                  <Count>0 %</Count>
                  <Streak>Monthly Rate</Streak>
               </ContainerStatus>
           </Containers>
       </StatusContainer>
       <ListContainer>
           <MedicationContainer>
              <DayContainer>
                  <IoCalendarClearOutline className="icon-calender"/>
                   <Heading1>Today's Medication</Heading1>
              </DayContainer>
              <DailySet>
                 <div className="mentionContainer">
                      <div className="number">
                          <h1 className="num">1</h1>
                      </div>
                      <div className="medicationContainer">
                               <h1 className="heading">Daily Medication Set</h1> 
                               <p className="text">Complete set of daily tablets</p> 
                      </div>
                 </div>
                 <div className="timecontainer">
                     <CiClock1 className="time"/>
                    <span className="times">8:AM</span>
                 </div>
              </DailySet>
              <MedicationproofContainer>
                   <CiImageOn className="image-icon"/>
                   <Head>Add Proof Photo (Optional)</Head>
                   <Text>Take a photo of your medication or pill organizer as confirmation</Text>
                   <TakePhoto>
                       <MdOutlineAddAPhoto className="photo-image"/>
                       <Text1>Take Photo</Text1>
                   </TakePhoto>
              </MedicationproofContainer>
              <MarkButton>
                <FaCheck className="right-icon"/>
                <Text2>Mark as Taken</Text2>
              </MarkButton>
           </MedicationContainer>
           <CalenderContainer>
                <Heading1>Medication Calendar</Heading1>
           </CalenderContainer>
       </ListContainer>
    </Container>
  </Homecontainer>
)
export default PatientViwer
    

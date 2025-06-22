import {Link} from "react-router-dom";
import {Homecontainer,Heading,Element,MainContainer,ParentContainer,ImagesContainer,Heading1,Paragraph,Lists,ListItem,Bullet,Text,ButtonElement,Bullet1,ButtonElement1,ImagesContainer1,Elemente,} from "./styled"
import { CiHeart } from "react-icons/ci";
import { VscPersonAdd } from "react-icons/vsc";
import { FaPersonHarassing } from "react-icons/fa6";

import "./index.css"

const McHomepage = () => (
  <Homecontainer>
    <div className="image-background">
      <CiHeart className="icons"/>
    </div>
    <Heading>Welcome to MediCare Companion</Heading>
    <Element>Your trusted partner in medication management. Choose your role to get started with personalized features.</Element>
    <MainContainer>
      <Link to="/patient" className="link">
      <ParentContainer>
        <ImagesContainer>
        <VscPersonAdd className="image-icons"/>
        </ImagesContainer>
        <Heading1 color="blue">I'm a Patient </Heading1>
        <Paragraph>Track your medication schedule and maintain your health records</Paragraph>
        <Lists>
          <ListItem>
            <Bullet>●</Bullet><Text>Mark medications as taken</Text>
          </ListItem>
          <ListItem>
            <Bullet>●</Bullet><Text>Upload proof photos (optional)</Text>
          </ListItem>
          <ListItem>
            <Bullet>●</Bullet><Text>View your medication calendar</Text>
          </ListItem>
          <ListItem>
            <Bullet>●</Bullet><Text>Large, easy-to-use interface</Text>
          </ListItem>
        </Lists>
        <ButtonElement>Continue as Patient</ButtonElement>
      </ParentContainer>
      </Link>
      <Link to="/caretaker" className="link">
      <ParentContainer>
        <ImagesContainer1>
        <FaPersonHarassing className="image-icons1" />
        </ImagesContainer1>
        <Heading1 color="#2ac94b">I'm a Caretaker</Heading1>
        <Paragraph>Monitor and support your loved one's medication adherence</Paragraph>
        <Lists>
          <ListItem>
            <Bullet1>●</Bullet1><Text>Monitor medication compliance</Text>
          </ListItem>
          <ListItem>
            <Bullet1>●</Bullet1><Text>Set up notification preferences</Text>
          </ListItem>
          <ListItem>
            <Bullet1>●</Bullet1><Text>View detailed reports</Text>
          </ListItem>
          <ListItem>
            <Bullet1>●</Bullet1><Text>Receive email alerts</Text>
          </ListItem>
        </Lists>
        <ButtonElement1>Continue as Caretaker</ButtonElement1>
      </ParentContainer>
      </Link>
    </MainContainer>
    <Elemente>You can switch between roles anytime after setup</Elemente>
  </Homecontainer>
)
export default McHomepage
    

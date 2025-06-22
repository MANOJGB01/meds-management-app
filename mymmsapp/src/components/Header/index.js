import { FaPersonHarassing } from "react-icons/fa6";
import { VscPersonAdd } from "react-icons/vsc";
import { useLocation, useNavigate } from "react-router-dom";
import {
  HeaderContainer,
  ImgandHeadeingContainer,
  SymboleContainer,
  HeaderL,
  MedicarecompanionContainer,
  Heading,
  PatientViwe,
  SwitchButton,
  Paragraph,
} from "./styled";

import "./index.css";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isCaretaker = location.pathname === "/caretaker";

  const handleSwitch = () => {
    navigate(isCaretaker ? "/patient" : "/caretaker");
  };

  return (
    <HeaderContainer>
      <ImgandHeadeingContainer>
        <SymboleContainer>
          <HeaderL>M</HeaderL>
        </SymboleContainer>
        <MedicarecompanionContainer>
          <Heading>MediCare Companion</Heading>
          <PatientViwe>{isCaretaker ? "Caretaker View" : "Patient View"}</PatientViwe>
        </MedicarecompanionContainer>
      </ImgandHeadeingContainer>

      <SwitchButton onClick={handleSwitch}>
        {isCaretaker ? (
          <>
            <VscPersonAdd className="icon"/>
            <Paragraph>Switch to Patient</Paragraph>
          </>
        ) : (
          <>
            <FaPersonHarassing className="icon" />
            <Paragraph>Switch to Caretaker</Paragraph>
          </>
        )}
      </SwitchButton>
    </HeaderContainer>
  );
};

export default Header;
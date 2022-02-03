import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import typeContext from "../contexts/types";
import Next from "../style-component/Next";
import Button from "../style-component/Button";
import ButtonNext from "../style-component/ButtonNext";
import FlexRow from "../style-component/FlexRow";
import Container from "../style-component/Container";
import TitlePrimary from "../style-component/TitlePrimary";

const Types = () => {
 const {choosenType, setChoosenType} = useContext(typeContext)

const handleClick = (e) => {
     setChoosenType(e.target.value)
     // console.log(choosenType)
}; 

  return (
    <Container>
      <TitlePrimary>Quel est le <b>domaine</b> qui vous intéresse?</TitlePrimary>
      <FlexRow>
      <Button value="UX Design" onClick={handleClick}>UX Design</Button>
      <Button value="Devops" onClick={handleClick}>Devops</Button>
      <Button value="Front" onClick={handleClick}>Développement Front-End</Button>
      <Button value="Back" onClick={handleClick}>Développement Back-End</Button>
      </FlexRow>
      <Next>
      <Link to="/level">
        <ButtonNext>Suivant</ButtonNext>
      </Link>
      </Next>
    </Container>
  );
};

export default Types;

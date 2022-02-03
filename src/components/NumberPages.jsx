import { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PagesContext from "../contexts/pages";
import TitlePrimary from "../style-component/TitlePrimary";
import Container from "../style-component/Container";
import FlexRow from "../style-component/FlexRow";
import Button from "../style-component/Button";
import Next from "../style-component/Next";
import ButtonNext from "../style-component/ButtonNext";

const NumberPages = () => {
     const {choosenPages, setChoosenPages} = useContext(PagesContext)

     const handleClick = (e) => {
          setChoosenPages(e.target.value)
     }; 

    return (
    <Container>
         <TitlePrimary>Sélectionner <b>le nombre de page?</b></TitlePrimary>
         <FlexRow>
              
                   <Button value="200, 500" type="button" onClick={handleClick}>200 à 500</Button>
                   <Button value="501" type="button" onClick={handleClick}>+ de 500</Button>
                   <Button value="all" type="button" onClick={handleClick}>Indifférent</Button>
          
         </FlexRow>
         <Next>
         <Link to="/books">
         <ButtonNext>Suivant</ButtonNext>
      </Link>
      </Next>
    </Container>
    )
   
   }
   
   export default NumberPages;
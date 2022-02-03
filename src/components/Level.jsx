import { useContext } from "react";
import { Link } from "react-router-dom";
import LevelContext from "../contexts/level";
import Container from "../style-component/Container"
import FlexRow from "../style-component/FlexRow";
import Button from "../style-component/Button";
import TitlePrimary from "../style-component/TitlePrimary";
import Next from "../style-component/Next";
import ButtonNext from "../style-component/ButtonNext";


const Level = () => {
     const {choosenLevel, setChoosenLevel} = useContext(LevelContext )

     const handleClick = (e) => {
          setChoosenLevel(e.target.value)
     }; 

    return (
    <Container>
         <TitlePrimary>Quel est votre niveau ?</TitlePrimary>
         <FlexRow>
              
                   <Button value="Débutant" onClick={handleClick}>Débutant</Button>
                   <Button value="Intermédiaire" onClick={handleClick}>Intermediaire</Button>
                   <Button value="Expert" onClick={handleClick}>Expert</Button>
                   <Button value="all" onClick={handleClick}>Tout m'intéresse</Button>
              
         </FlexRow>
         <Next>
         <Link to="/pages">
      <ButtonNext>Suivant</ButtonNext>
      </Link>
      </Next>
    </Container>
    )
   
   }
   
   export default Level;
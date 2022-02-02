import { useContext } from "react";
import { Link } from "react-router-dom";
import LevelContext from "../contexts/level";


const Level = () => {
     const {choosenLevel, setChoosenLevel} = useContext(LevelContext )

     const handleClick = (e) => {
          setChoosenLevel(e.target.value)
     }; 

    return (
    <div>
         <h3>Quel est votre niveau ?</h3>
         <div>
              <ul>
                   <li value="Débutant" onClick={handleClick}>Débutant</li>
                   <li value="Intermédiaire" onClick={handleClick}>Intermediaire</li>
                   <li value="Expert" onClick={handleClick}>Expert</li>
                   <li value="all" onClick={handleClick}>Tout m'intéresse</li>
              </ul>
         </div>
         <Link to="/pages">
      <button>Suivant</button>
      </Link>
    </div>
    )
   
   }
   
   export default Level;
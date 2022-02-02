import { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PagesContext from "../contexts/pages";

const NumberPages = () => {
     const {choosenPages, setChoosenPages} = useContext(PagesContext)

     const handleClick = (e) => {
          setChoosenPages(e.target.value)
          // console.log(choosenType)
     }; 

    return (
    <div>
         <h3>Quel est votre genre de livre ?</h3>
         <div>
              <ul>
                   <li>200 à 500</li>
                   <li>+ de 500</li>
                   <li>Indifférent</li>
              </ul>
         </div>
         <Link to="/books">
         <button>Suivant</button>
      </Link>
    </div>
    )
   
   }
   
   export default NumberPages;
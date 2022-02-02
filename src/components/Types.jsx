import { useContext, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import typeContext from "../contexts/types";

const Types = () => {
 const {choosenType, setChoosenType} = useContext(typeContext)

const handleClick = (e) => {
     setChoosenType(e.target.value)
     // console.log(choosenType)
}; 

console.log(choosenType)

  return (
    <div>
      <h3>Quel est votre genre de livre ?</h3>
      <div>
      <button value="UX Design" onClick={handleClick}>UX Design</button>
      <button value="Devops" onClick={handleClick}>Devops</button>
      <button value="Front" onClick={handleClick}>Développement Front-End</button>
      <button value="Back" onClick={handleClick}>Développement Back-End</button>
      </div>
      <Link to="/level">
        <button>Suivant</button>
      </Link>
    </div>
  );
};

export default Types;

//    const HeaderContainer = styled.div`
//     background-color: #000000;
//     height: 200px;
//    `

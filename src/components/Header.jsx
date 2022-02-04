import { Link } from "react-router-dom";
import styled from "styled-components";
const Header = () => {


    return (
        <HeaderContainer className="header">
            <Lien href="/">
            <Title>READ IT</Title>
            </Lien>
        </HeaderContainer>
    )
   
   }
   
   export default Header;

   const Title= styled.h1`
   color: #000000;
   font-size: 20px;
   width: 70%;
   margin: 0 auto;
   padding-top: 2em;
   font-weight: 900;
   `;

   const Lien = styled.a`
   text-decoration: none;
   `

   const HeaderContainer = styled.div`
    background-color: #f7594a;
    height: 100px;
    border-bottom: 1px solid #000000;
    margin: 0 auto;
   `
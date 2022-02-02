import styled from "styled-components";
const Header = ({NameWebSite}) => {


    return (
        <HeaderContainer className="header">
            <h1>{NameWebSite.name}</h1>
        </HeaderContainer>
    )
   
   }
   
   export default Header;

   const HeaderContainer = styled.div`
    background-color: #000000;
    height: 100px;
   `
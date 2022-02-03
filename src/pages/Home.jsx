import { Link } from "react-router-dom";
import styled from "styled-components";
import OpenBook from "../assets/open-book.png"

function Home() {
  return (
    <Container>
      <FlexRow>
      <FlexColumn>
      <TitlePrimary>Read IT est une <b>application ludique</b> qui vous aide à choisir un <b>ouvrage IT </b>qui vous ressemble</TitlePrimary>
      <Link to="/type">
      <Button>C'est parti</Button>
      </Link>
      </FlexColumn>
      <Image src={OpenBook} alt="Open Book" />
      </FlexRow>
    </Container>
  );
}

export default Home;

const Container = styled.div`
width: 70%;
margin: 0 auto;

`;

const FlexRow = styled.div`
display: flex;
justify-content: space-around;
flex-direction: row;
align-items: center;

`;

const FlexColumn = styled.div`
flex-direction: column;

`;

const Image = styled.img`
width:30%;

`;

const TitlePrimary = styled.h2`
font-family: 'Bitter';
font-weight: 400;
line-height: 70px;
font-size: 50px;
width: 90%;

`;

const Button = styled.button`
border: 1px solid #ffffff;
background-color:#ffffff !important ;
color: #f7594a;
font-family: 'Bitter';
font-weight: 800;
font-size: 20px;
padding: 0.5em;
background-color: inherit;
border-radius: 15px;
width: 30%;
cursor: pointer;
:hover {
  background-color:#f7594a!important ;
  border: 1px solid #000000;
  color: #000000;
}
`;

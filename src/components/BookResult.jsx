import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LevelContext from "../contexts/level";
import PagesContext from "../contexts/pages";
import TypeContext from "../contexts/types";
import TitlePrimary from "../style-component/TitlePrimary";
import Button from "../style-component/Button";

const BookResult = () => {
  const [books, setBooks] = useState([]);
  const { choosenLevel, setChoosenLevel } = useContext(LevelContext);
  const { choosenPages, setChoosenPages } = useContext(PagesContext);
  const { choosenType, setChoosenType } = useContext(TypeContext);

  useEffect(() => {
    axios("http://localhost:5000/api/books").then((res) => setBooks(res.data));
  }, []);

  console.log(choosenLevel);
  console.log(choosenPages);
  console.log(choosenType);
  console.log(books)
  return (
    <MainContent>
    <Container>
      <TitlePrimary>
        Voici notre <b>sélection d'ouvrage</b>{" "}
      </TitlePrimary>
      <div>
        {books
          .filter(
            (bookPerso) => 
              bookPerso.levelBook === choosenLevel &&
              bookPerso.type === choosenType
          )
          .map((book) => (
            <FlexRowBook key={book.id}>
              <FlexColumnBook>
                <Link to={`/${book.id}`}>
                  <ImgContainer>
                    <Image src={book.image} alt="Book" />
                  </ImgContainer>
                </Link>
              </FlexColumnBook>
              <FlexColumnBook>
                <SubTitle>{book.name}</SubTitle>
                <p>Ecrit par : <b>{book.author}</b></p>
                <p>Domaine : <b>{book.type}</b></p>
                <p>Nombre de page : <b>{book.pages}</b> pages</p>
                <p> Niveau : <b>{book.levelBook}</b> </p>
                <a href={book.view} target="_blank" rel="noreferrer"><ButtonView>Feuilleter le livre</ButtonView></a>
              </FlexColumnBook>
            </FlexRowBook>
          ))}
      </div>
      <div>
        <Center>
      <SubTitle>Vous ne trouvez pas votre bonheur ?</SubTitle>
      <Link to="/favoris">
      <TextSurlign>Consultez les favoris des utilisateurs</TextSurlign>
      </Link>
      </Center>
      </div>
    </Container>
   </MainContent>
  );
};

export default BookResult;

const MainContent= styled.div`
background-color: #ffffff;
width: 100%;
`
;

const Container = styled.div`
width: 70%;
margin: 0 auto;
padding: 3em;
`;

const Center = styled.div`
text-align: center;
margin-top: 4em;
background-color: #f7594a ;
padding: 1em;
border-radius: 30px;
font-family: 'Bitter'
`
const FlexRowBook = styled.div`
  display: flex;
  justify-content: space-space-between;
  flex-direction: row;
  text-align: left;
  margin: 0 auto;
  flex-wrap: wrap;
  gap: 2em;
  width: 90%;
`;

const FlexColumnBook = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
`;

const ImgContainer = styled.div`
  background-color: #ffffff;
  padding: 1em;
  border-radius: 20px;
  margin: 0 auto;
  // border: 1px solid #000000;
  text-align: center;
`;

const Image = styled.img`
  width: 70%;
`;

const SubTitle = styled.h2`
font-weight: 700;
font-size: 25px;
`
const ButtonView = styled.button`
background-color:#ffffff  !important ;
border: 1px solid #f7594a ;
color: #f7594a  ;
margin-top: 1em;
font-size: 15px;
padding: 0.2em;
background-color: inherit;
border-radius: 15px;
width: 57%;
cursor: pointer;
padding: 1em;
:hover {
    background-color: #f7594a !important ;
    border: 1px solid #ffffff;
    color: #ffffff;
}
:active {
    background-color: #f7594a !important ;
    border: 1px solid #ffffff;
    font-weight: 800;
    
}
`
const TextSurlign = styled.p`
  text-decoration: underline;
  color: #000000;
`

;

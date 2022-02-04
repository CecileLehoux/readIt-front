import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Button from "../style-component/Button";
import TitlePrimary from "../style-component/TitlePrimary";

const BookFavoris = () => {
     const [books, setBooks] = useState([]);

     useEffect(() => {
          axios("http://localhost:5000/api/books")
            .then((res) => setBooks(res.data))
            .catch((err) => console.log(err))
        }, []);

    return (
<div>
      <TitlePrimary>
        Découvrez les <b>favoris du moment</b>{" "}
      </TitlePrimary>
      <ContainerBooks>
      {books.map((book) =>
      <Book>
      <h3>{book.name}</h3>
      <Images src={book.image} alt="Book" />
      </Book>
      
      )}
      </ContainerBooks>
      </div>
    )
   
   }
   
   export default BookFavoris;


const ContainerBooks= styled.div`
margin-top: 3em;
display: flex;
flex-direction: row;
margin: 0 auto;
flex-wrap: wrap;
text-align: center;
width: 70%;
background-color: #ffffff;
border-radius: 20px;

`;

const Book = styled.div`
width: 30%;
padding: 1em;
`

const Images = styled.img`
  width: 60%;
  height: 200px;
`;
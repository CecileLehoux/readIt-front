import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const BookResult = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios("http://localhost:5000/api/books")
          .then((res) => setBooks(res.data))
      }, []);

      console.log(books)
    return (
    <div>
         <h3>Voici notre sélection d'ouvrage suivant vos critères</h3>
         <div>
            {books.map((book) => (
            <ul>
            <li key={book.id}>{book.name}</li>
            <li>{book.author}</li>
            <li>{book.type}</li>
            <Link to={`/${book.id}`}>
            <li><img src={book.image} alt="Book"/></li>
            </Link>
            <li>{book.pages} pages</li>
            <li>{book.levelBook} </li>
            </ul>
            
            )
            )}
         </div>
    </div>
    )
   
   }
   
   export default BookResult;
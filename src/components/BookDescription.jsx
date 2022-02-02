import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BookDescription = () => {
     const [book, setBook] = useState([]);
     const params= useParams();

     useEffect(() => {
          axios(`{http://localhost:5000/api/book/${params.id}`)
            .then((res) => setBook(res.data))
            .catch((err) => console.log(err))
        }, []);

    return (
    <div>
         <h3>Descriptif d'un livre</h3>
         {book.map((bookId)=>
         <>
          <img src={book.image} alt="Book" />
          <p>{book.name}</p>
          <p>{book.description}</p>
          <p>{book.types}</p>
          <p>{book.pages}</p>
          <p>{book.author}</p>
          </>
         )}
     
    </div>
    )
   
   }
   
   export default BookDescription;
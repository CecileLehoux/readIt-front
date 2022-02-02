import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Read IT est une application ludique qui vous aide à choisir un ouvrage IT qui vous ressemble</h2>
      <h3>
        Vous manques d'inspiration ? <br/>
        Nous sélectionnons pour vous les meilleurs ouvrages pour vos lectures IT{" "}
      </h3>
      <Link to="/type">
      <button>C'est parti</button>
      </Link>
    </div>
  );
}

export default Home;

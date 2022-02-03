import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Types from './components/Types';
import Level from './components/Level';
import NumberPages from './components/NumberPages';
import BookResult from './components/BookResult';
import BookDescription from './components/BooksFavoris';
import TypeContext from './contexts/types';
import { useState } from 'react';
import LevelContext from './contexts/level';
import PagesContext from './contexts/pages';
import GlobalStyle from './style-component/globalStyle';
import BookFavoris from './components/BooksFavoris';


function App() {
  const [choosenType, setChoosenType] = useState("")
  const [choosenLevel, setChoosenLevel] = useState("")
  const [choosenPages, setChoosenPages] = useState("")
  return (
    <div>
    <TypeContext.Provider  value={{ choosenType: choosenType, setChoosenType : setChoosenType }}>
    <LevelContext.Provider  value={{ choosenLevel: choosenLevel, setChoosenLevel : setChoosenLevel }}>
    <PagesContext.Provider  value={{ choosenPages: choosenPages, setChoosenPages : setChoosenPages }}>
    <Header NameWebSite={"Read IT"} />
    <GlobalStyle/>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route exact path="/type" element={<Types />}/>
      <Route exact path="/level" element={<Level />}/>
      <Route exact path="/pages" element={<NumberPages />}/>
      <Route exact path="/books" element={<BookResult />}/>
      <Route exact path="/favoris" element={<BookFavoris/>}/>
    </Routes>
  </BrowserRouter>
  </PagesContext.Provider>
  </LevelContext.Provider>
  </TypeContext.Provider>
  </div>
  );
}

export default App;

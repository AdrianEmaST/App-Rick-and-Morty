import "./App.css";
import Card from "./components/Card/Card";
import Cards from "./components/Cards/Cards";
import SearchBar from "./components/SearchBar/SearchBar";
import Detail from "./components/Detail/Detail";
import Error from "./components/Error/Error";
import Nav from "./components/Nav/Nav";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";

function App() {
  const [characters, setCharacters] = useState([]);

  function onSearch(txtinput) {
    fetch(`https://rickandmortyapi.com/api/character/${txtinput}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          let repeated = characters.find((e) => e.id === data.id);
          if (repeated) {
            alert("Ya esta añadido");
          } else {
            setCharacters((oldChars) => [...oldChars, data]);
          }
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  }

  const onClose = (id) => {
    setCharacters(characters.filter((pj) => pj.id !== id));
  };
  // Extra: Boton random
  function random() {
    let randomPj = Math.floor(Math.random() * 826);
    onSearch(randomPj);
  }

  return (
    <div className="App">
      <Nav onSearch={onSearch} random={random} />

      <Routes>
        <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
        <Route path="/about" element={<About />} />
        <Route path={"/detail/:detailId"} element={<Detail />} />
        <Route path={"*"} element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;

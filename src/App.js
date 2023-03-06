import "./App.css";
import Card from "./components/Card/Card";
import Cards from "./components/Cards/Cards";
import SearchBar from "./components/SearchBar/SearchBar";
import Nav from "./components/Nav/Nav";
import { useState } from "react";

function App() {
  const [characters, setCharacters] = useState([]);

  function onSearch(txtinput) {
    fetch(`https://rickandmortyapi.com/api/character/${txtinput}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  }

  const onClose = (id) => {
    setCharacters(characters.filter((pj) => pj.id !== id));
  };

  return (
    <div className="App">
      <Nav onSearch={onSearch} />

      <div className="cards1">
        <Cards characters={characters} onClose={onClose} />
      </div>
    </div>
  );
}

export default App;

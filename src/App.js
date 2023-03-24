import "./App.css";
import Cards from "./components/Cards/Cards";
import Detail from "./components/Detail/Detail";
import Error from "./components/Error/Error";
import Nav from "./components/Nav/Nav";
import Form from "./components/Form/Form";
import { useState, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About/About";
import Favorites from "./components/Favorites/Favorites";

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

  const location = useLocation();
  //console.log(location);

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const username = "ejemplo@gmail.com";
  const password = "1password";

  function login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate("/home");
    }
  }
  useEffect(() => {
    !access && navigate('/');
 }, [access]);

 function logout() {
  setAccess(false);
 }

  return (
    <div className="App">
      {location.pathname !== "/" && <Nav onSearch={onSearch} random={random} logout={logout} />}

      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:detailId" element={<Detail />} />
        <Route path="*" element={<Error />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;

import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function Detail() {
  const { detailId } = useParams();

  const [character, setCharacter] = useState({
    name: "",
    status: "",
    specie: "",
    gender: "",
    origin: "",
    image: "",
  });

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);


  return (
    <div>
      <h2>{character?.name}</h2>
      <span>{character?.status }</span>
      <span>{character?.specie }</span>
      <span>{character?.gender }</span>
      <span>{character?.origin?.name }</span>
      <img src={character?.image } alt='' />
      <button><Link to={'/home'}>Home</Link></button>
    </div>
  );
}

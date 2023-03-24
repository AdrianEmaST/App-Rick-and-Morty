import { useSelector } from "react-redux";
import styles from "./Favorites.module.css";
import React from "react";
import { Link } from "react-router-dom";


export default function Favorites(props) {
  const { myFavorites } = useSelector((state) => state);

  return (
    <div className={styles.card}>
      {myFavorites.map((character) => {
        return (
          <div>
            <Link to={`/detail/${character.id}`}>
              <h2 className={styles.name}>{character.name}</h2>
            </Link>
            <div className={styles.bajada}>
              <h2 className={styles.bajadah2}>Species: {character.species}</h2>
              <h2 className={styles.bajadah2}>Gender: {character.gender}</h2>
              <div className={styles.btncontainer}>
              </div>
            </div>
            <img className={styles.imagen} src={character.image} alt="" />
          </div>
        );
      })}
    </div>
  );
}

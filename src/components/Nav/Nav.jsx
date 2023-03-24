import React from "react";
import styles from "./Nav.module.css";
import stycomp from "styled-components";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

export default function Nav(props) {
  return (
    <div className={styles.container}>
      <Link to="/home">
        <h2>
          <span>Rick And Morty App</span>
        </h2>
      </Link>

      <Link to="/favorites">
        <h2>
          <span>Favorites</span>
        </h2>
      </Link>

      <Link to="/about">
        <span>About me</span>
      </Link>

      <button onClick={props.logout}>LogOut</button>

      <SearchBar onSearch={props.onSearch} random={props.random} />
    </div>
  );
}

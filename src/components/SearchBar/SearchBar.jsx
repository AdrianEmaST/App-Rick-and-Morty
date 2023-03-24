import React, { useState } from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar(props) {

  const [txtinput, setTxtinput] = useState ('')

  const handleChange = (e) => {
    //console.log(e.target.value)
    setTxtinput(e.target.value)

  }

  return (
    <div className={styles.container}>
      <button onClick={() => props.onSearch(txtinput)}>+</button>
      <input type="search" onChange={handleChange} placeholder="Agrega tu personaje"></input>
      <button onClick={props.random}>Agrego un Random xd</button>
    </div>
  );
}

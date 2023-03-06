import React from 'react';
import styles from './Nav.module.css';
import stycomp from 'styled-components'
import SearchBar from '../SearchBar/SearchBar'

export default function Nav(props) {
  return (
    <div className={styles.container}>
      <h2><span>Rick And Morty App</span></h2>
      <SearchBar onSearch={props.onSearch}/>
    </div>
  )
}

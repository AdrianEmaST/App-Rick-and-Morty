import React from 'react'
import { Link } from 'react-router-dom'


export default function About() {
  return (
    <div>
        <Link to={"/About"}>
        <span>About</span>
        </Link>
    </div>
  )
}

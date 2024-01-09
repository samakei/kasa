import React from 'react'
import "../Styles/appartement.scss"
import { Link } from 'react-router-dom'

export default function Appartement() {
  return (
    <div className='appartement'>
      <Link to="/apartment">
      <p className='apmt-titre'>Titre de la location</p>
      </Link>
    </div>
  )
}

import React from 'react'
import "../Styles/appartement.scss"
import { NavLink } from 'react-router-dom'


export default function Appartement() {
  return (
    <div className='appartements'>
      <NavLink to="/apartment">
      <p className='apmt-titre'>Titre de la location</p>
      </NavLink>
    </div>
  )
}

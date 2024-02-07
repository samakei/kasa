import React from 'react'
import { NavLink } from 'react-router-dom'
import "../Styles/card.scss"




export default function Card({id, title, cover}) {
  return (
    <div className='card'>
     <NavLink to={`logement/${id}`} className="card-navlink">
        <img  src={cover} alt={title} />
        <h3 className='titre_apmt'>{title}</h3>
    </NavLink>
    </div>
  )
}

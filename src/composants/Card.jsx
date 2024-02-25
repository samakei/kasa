import React from 'react'
import { NavLink } from 'react-router-dom'
import "../Styles/card.scss"




export default function Card({id, title, cover}) {
  return (
    <article className='carte-logement'>
      <div className='carte'>
     <NavLink to={`logement/${id}`}>
        <img  src={cover} alt={title} />
    </NavLink>
    <h3 className='titre_appartement'>{title}</h3>
    </div>
    </article>
  )
}

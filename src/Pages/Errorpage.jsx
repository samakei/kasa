import React from 'react'
import "../Styles/errorpage.scss"
import { NavLink } from 'react-router-dom'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'

export default function Errorpage() {
  return (
    <div className='eurrepage '>
         <>
        <Header />
        <h1 className='eurrer404'>404</h1>
        <h2>Oups! La page que  vous demandez n'existe pas.</h2>

          <div>
            <NavLink to={"/"}>
            <p>Retournez sur la page d'accueil</p>
            </NavLink>
          </div>
         
        <Footer />
        </>
    </div>
  )
}

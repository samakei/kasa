import React from 'react'
import "../Styles/immeuble.scss"
import Apartement from './Appartement';



function Immeuble() {
  return (
    <div className='imb'>
      <Apartement />
      <Apartement />
      <Apartement />
      <Apartement />
      <Apartement />
      <Apartement />
    </div>
  );
}

export default Immeuble;
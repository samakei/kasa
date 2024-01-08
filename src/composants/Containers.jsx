import React from 'react'
import "../Styles/containers.scss"

function Containers(props) {
const {children} = props;
  return(
    <div className='container'> {children} </div>
  );
}

export default Containers;
import React, {useState} from 'react'
import arrow_up from "../assets/arrow-up.png";
import "../Styles/collapse.scss"


export default function Collapse({title, text, ClassLogementCollapse}) {

   const [opensee, setOpenSee ] = useState(false);
   const handleopentext =() => {
      setOpenSee(!opensee);
   }
    
  return (
    <div className={`collapse ${ClassLogementCollapse}`}>
    <h3 className='collapse-titre'>{title}</h3>

    <img onClick={handleopentext} className={`"collapse-arrow ${opensee ? "arrow-down" : "arrow-up"} `} 
      
     src={arrow_up} alt="flèche" />
    


  <div className={`collapse__txt__ctn ${opensee ? "" : "collapse__hiddenTxt"}`}>
  <div className='collapse-text'>{text}</div>

   </div>
    </div>

  )
}

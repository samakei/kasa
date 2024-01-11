import React from 'react'
import "../Styles/footer.scss"

 function Footer() {
  return (
    <div className='footer'>
        <div className='logo-footer'>
        <img src="logo_footer.png" alt="logo" />
        </div>
        <div className='text_footer'>© 2020 Kasa. All rights reserved</div>
    </div>
  );
}

export default Footer;
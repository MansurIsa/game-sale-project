import React from 'react'
import { Link } from 'react-router-dom'
import FooterLogo from "../images/logo-light.svg"

const FooterSecondLogoCard = () => {
  return (
    <div className='footer_second_logo_card'>
        <Link to={''}>
            <img src={FooterLogo} alt="" />
        </Link>
    </div>
  )
}

export default FooterSecondLogoCard
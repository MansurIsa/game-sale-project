import React from 'react'
import { Link } from 'react-router-dom'
import LogoImg from "../images/logo-light.svg"

const Logo = () => {
  return (
    <Link to={'/game-sale-project'}>
        <img className='logo' src={LogoImg} alt="" />
    </Link>
  )
}

export default Logo
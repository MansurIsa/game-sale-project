import React from 'react'
import Logo from './Logo'
import HeaderSecondInp from './HeaderSecondInp'
import HeaderSecondsButtons from './HeaderSecondsButtons'

const HeaderSecondContainer = () => {
  return (
    <div className='header_second_container'>
      <div className="header_second container">
        <Logo />
        <HeaderSecondInp/>
        <HeaderSecondsButtons/>
      </div>

    </div>
  )
}

export default HeaderSecondContainer
import React from 'react'
import Logo from './Logo'
import HeaderSecondInp from './HeaderSecondInp'
import HeaderSecondsButtons from './HeaderSecondsButtons'
import AddAnnounce from './AddAnnounce'
import LanguageSelect from './LanguageSelect'

const HeaderSecondContainer = () => {
  return (
    <div className='header_second_container'>
      <div className="header_second container">
        <Logo />
        <HeaderSecondInp/>
        <AddAnnounce/>
        {/* <LanguageSelect/> */}
      </div>

    </div>
  )
}

export default HeaderSecondContainer
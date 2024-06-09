import React from 'react'
import Logo from './Logo'
import HeaderSecondInp from './HeaderSecondInp'
import HeaderSecondsButtons from './HeaderSecondsButtons'
import AddAnnounce from './AddAnnounce'
import LanguageSelect from './LanguageSelect'
import AnnounceCreateModal from './modals/AnnounceCreateModal'
import { useSelector } from 'react-redux'

const HeaderSecondContainer = () => {


  const {announceCreateModal}=useSelector(state=>state.Data)
  
  return (
    <div className='header_second_container'>
      <div className="header_second container">
        <Logo />
        <HeaderSecondInp/>
        <AddAnnounce/>
        {/* <LanguageSelect/> */}
      </div>

      {announceCreateModal && <AnnounceCreateModal/>}

    </div>
  )
}

export default HeaderSecondContainer
import React from 'react'
import { CiSearch } from "react-icons/ci";


const HeaderSecondInp = () => {
  return (
    <div className='header_second_inp_container'>
        <CiSearch className='header_second_search'/>
        <input type="search" placeholder='Oyun Ara...'/>
    </div>
  )
}

export default HeaderSecondInp
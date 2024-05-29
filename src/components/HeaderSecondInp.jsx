import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { useDispatch } from 'react-redux';
import { getSearchİnpVal } from '../actions/MainAction';


const HeaderSecondInp = () => {

  const [searchİnpValue,setSearchİnpValue]=useState("")

  const dispatch=useDispatch()


  const searchİnpValueFunc=(e)=>{
    setSearchİnpValue(e.target.value)
  }

  const searchInpSubmit=(e)=>{
    e.preventDefault()

    dispatch(getSearchİnpVal(searchİnpValue))


  }

  return (
    <form onSubmit={searchInpSubmit} className='header_second_inp_container'>
        <button><CiSearch className='header_second_search'/></button>
        <input value={searchİnpValue} onChange={searchİnpValueFunc} type="search" placeholder='Oyun Ara...'/>
    </form>
  )
}

export default HeaderSecondInp
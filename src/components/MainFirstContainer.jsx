import React from 'react'
import { Link } from 'react-router-dom'
import MainFirstCard from './MainFirstCard'

const MainFirstContainer = () => {
  return (
    <div className='main_first_container container'>
        <Link to={''}>
            <MainFirstCard/>
        </Link>
        <Link to={''}>
            <MainFirstCard/>
        </Link>
        <Link to={''}>
            <MainFirstCard/>
        </Link>
        <Link to={''}>
            <MainFirstCard/>
        </Link>
    </div>
  )
}

export default MainFirstContainer
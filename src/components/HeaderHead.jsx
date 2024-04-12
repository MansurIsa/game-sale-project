import React from 'react'
import HeaderFirstContainer from './HeaderFirstContainer'
import HeaderSecondContainer from './HeaderSecondContainer'
import HeaderThirdContainer from './HeaderThirdContainer'

const HeaderHead = () => {
  return (
    <div className='header_head'>
        <HeaderFirstContainer/>
        <HeaderSecondContainer/>
        <HeaderThirdContainer/>
    </div>
  )
}

export default HeaderHead
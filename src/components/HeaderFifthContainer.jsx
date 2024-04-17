import React from 'react'
import { Link } from 'react-router-dom'
import HeaderFifthFirstImg from "../images/banner_side_ko_yenisunucu_zerolu_v2_right-72163.webp"
import HeaderSliderContainer from './HeaderSliderContainer'

const HeaderFifthContainer = () => {
  return (
    <div className='header_fifth_container container'>
        {/* <Link to={''}>
            <img src={HeaderFifthFirstImg} alt="" />
        </Link> */}
        <HeaderSliderContainer/>
        {/* <Link to={''}>
            <img src={HeaderFifthFirstImg} alt="" />
        </Link> */}
    </div>
  )
}

export default HeaderFifthContainer
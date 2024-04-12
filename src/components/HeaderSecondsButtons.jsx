import React from 'react'
import { BsCreditCardFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";




const HeaderSecondsButtons = () => {
  return (
    <div className='header_seconds_buttons'>
        <button><BsCreditCardFill /> Satış Yap</button>
        <button><FaUser /> Giriş/Kayıt</button>
        <FaCartShopping className='cart_shop_icon'/>
    </div>
  )
}

export default HeaderSecondsButtons
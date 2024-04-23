import React from 'react'
import { BsCreditCardFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";




const HeaderSecondsButtons = () => {
  return (
    <div className='header_seconds_buttons'>
      <button><FaUser /> Giriş/Kayıt</button>
        <button><BsCreditCardFill /> Satış Yap</button>
        
        <FaCartShopping className='cart_shop_icon'/>
    </div>
  )
}

export default HeaderSecondsButtons
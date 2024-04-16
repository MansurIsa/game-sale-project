import React from 'react'
import MainSecondCardImg from "../images/prime-ultra-vip-pubg-mobil-random-hesap-medium.webp"
import { FaCheckCircle } from "react-icons/fa";
import { MdOutlineWorkspacePremium } from "react-icons/md";


const MainSecondCard = () => {
    return (
        <div className='main_second_card'>
            <div className="main_second_card_up">
                <div className="main_second_card_up_main">
                    <img src={MainSecondCardImg} alt="" />
                    <p className='main_second_card_up_main_paragraph_first'>Vitirin İlanı</p>
                    <p className='main_second_card_up_main_paragraph_second'>UcuzStore1</p>
                </div>
                <div className="main_second_card_up_hover">
                    <button>Detaylar</button>
                </div>
            </div>
            <div className="main_second_card_down">
                <p>PRİME ULTRA VİP PUBG MOBİL RANDOM HESAP</p>
                <div className='main_second_card_down_footer'>
                    <div className="main_second_card_down_footer_icons">
                        <FaCheckCircle className='main_second_card_down_footer_check_icon'/>
                        <MdOutlineWorkspacePremium className='main_second_card_down_footer_check_icon'/>
                    </div>
                    <span>169,90 ₺</span>
                </div>
            </div>
        </div>
    )
}

export default MainSecondCard
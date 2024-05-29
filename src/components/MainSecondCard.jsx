import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { MdOutlineWorkspacePremium } from "react-icons/md";


const MainSecondCard = ({ data }) => {
    return (
        <div className='main_second_card'>
            <div className="main_second_card_up">
                <div className="main_second_card_up_main">
                    <img src={data.photo} alt="" />
                    {
                        data?.is_highlighted?
                        <p className='main_second_card_up_main_paragraph_first'>Vitirin ilanı</p>: null
                    }
                    
                    <p className='main_second_card_up_main_paragraph_second'>{data.game_category.title}</p>
                </div>
                <div className="main_second_card_up_hover">
                    <button>Detaylar</button>
                </div>
            </div>
            <div className="main_second_card_down">
                <p>{data.title}</p>
                <p>{data.description.substring(0, 50)}...</p>
                <div className='main_second_card_down_footer'>
                    <div className="main_second_card_down_footer_icons">
                        <FaCheckCircle className='main_second_card_down_footer_check_icon' />
                        <MdOutlineWorkspacePremium className='main_second_card_down_footer_check_icon' />
                    </div>
                    <span>{data.price} ₺</span>
                </div>
            </div>
            <div className="main_second_card_end">
                <img src={data.seller.cover} alt="" />
                <div className="main_second_card_end_seller">
                    <span>SATICI</span>
                    <p>{data.seller.name}</p>
                </div>
            </div>
        </div>
    )
}

export default MainSecondCard
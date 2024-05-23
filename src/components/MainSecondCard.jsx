import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { MdOutlineWorkspacePremium } from "react-icons/md";


const MainSecondCard = ({data}) => {
    return (
        <div className='main_second_card'>
            <div className="main_second_card_up">
                <div className="main_second_card_up_main">
                    <img src={data.photo} alt="" />
                    <p className='main_second_card_up_main_paragraph_first'>{data.seller.first_name}</p>
                    <p className='main_second_card_up_main_paragraph_second'>{data.game_category.title}</p>
                </div>
                <div className="main_second_card_up_hover">
                    <button>Detaylar</button>
                </div>
            </div>
            <div className="main_second_card_down">
                <p>{data.name}</p>
                <div className='main_second_card_down_footer'>
                    <div className="main_second_card_down_footer_icons">
                        <FaCheckCircle className='main_second_card_down_footer_check_icon'/>
                        <MdOutlineWorkspacePremium className='main_second_card_down_footer_check_icon'/>
                    </div>
                    <span>{data.price} ₺</span>
                </div>
            </div>
        </div>
    )
}

export default MainSecondCard
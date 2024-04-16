import React from 'react'
import NewsSectionCardImg from "../images/prince-of-persia-the-lost-crown-oyun-incelemesi-1770-medium.webp"

const NewsSectionCard = () => {
    return (

        <div className='news_section_card auction_section_card'>
            <div className="auction_section_card_up">
                <img src={NewsSectionCardImg} alt="" />
                <div className="auction_section_card_up_hover">
                    <button>Habere git</button>
                </div>
            </div>
            <div className="auction_section_card_down">
                <p className='auction_section_card_down_time'>07 Nisan 2024 - 12:49</p>
                <h3>Farmerama Nasıl Oynanır? Başlangıç Rehbe...</h3>
                <p>Hydra Gloves | Emerald Field-Tested</p>
                <h4>Yazar: <span>PURPLE MUFFİN</span></h4>
               
            </div>

        </div>

    )
}

export default NewsSectionCard
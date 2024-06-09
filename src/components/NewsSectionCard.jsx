import React from 'react'
import NewsSectionCardImg from "../images/prince-of-persia-the-lost-crown-oyun-incelemesi-1770-medium.webp"

const NewsSectionCard = ({data}) => {
    return (

        <div className='news_section_card auction_section_card'>
            <div className="auction_section_card_up">
                <img src={data?.cover} alt="" />
                <div className="auction_section_card_up_hover">
                    <button>Habere git</button>
                </div>
            </div>
            <div className="auction_section_card_down">
                {/* <p className='auction_section_card_down_time'>07 Nisan 2024 - 12:49</p> */}
                <h3>{data?.title.substring(0, 45)}...</h3>
                <p>{data?.content.substring(0, 90)}...</p>
                {/* <h4>Yazar: <span>PURPLE MUFFİN</span></h4> */}
               
            </div>

        </div>

    )
}

export default NewsSectionCard
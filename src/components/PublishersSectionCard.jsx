import React from 'react'
import PublishersSectionCardImg from "../images/rohan-25144.webp"

const PublishersSectionCard = () => {
    return (

        <div className='auction_section_card publishers_section_card'>
            <div className="auction_section_card_up">
                <img src={PublishersSectionCardImg} alt="" />
                
            </div>
            <div className="auction_section_card_down">
                <p className='auction_section_card_down_time'>Rohan</p>
                
                <button>Destekle</button>
            </div>

        </div>

    )
}

export default PublishersSectionCard
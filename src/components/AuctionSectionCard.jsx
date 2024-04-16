import React from 'react'
import AuctionSectionCardImg from "../images/250x200.png"

const AuctionSectionCard = () => {
  return (
    <div className='auction_section_card'>
        <div className="auction_section_card_up">
            <img src={AuctionSectionCardImg} alt="" />
            <div className="auction_section_card_up_hover">
                <button>Detaylar</button>
            </div>
        </div>
        <div className="auction_section_card_down">
            <p className='auction_section_card_down_time'>10:20:59</p>
            <p>Hydra Gloves | Emerald Field-Tested</p>
            <div className="auction_section_card_down_prices">
                <del>1050,00 ₺</del>
                <p>105,00 ₺</p>
            </div>
            <button>Katıl</button>
        </div>

    </div>
  )
}

export default AuctionSectionCard
import React from 'react'
import Img from "../images/8daf9bd5bb58cc1ea319ddb61929af94766ee6c1.webp"
import { RiUserFollowFill } from "react-icons/ri";
import { IoIosChatbubbles } from "react-icons/io";



const AllShopsCard = () => {
    return (
        <div className='all_shops_card'>
            <div className="all_shops_card_header">
                <img src={Img} alt="" />
                <div className="all_shops_card_header_content">
                    <p>UnrankedShop</p>
                    <span>2 saat önce aktifti.</span>
                </div>
            </div>
            <div className="all_shops_card_middle">
                <button><RiUserFollowFill /> Takib Et</button>
                <button><IoIosChatbubbles /> Sohbet</button>
            </div>
            <div className="all_shops_card_footer">
                <div>
                    <p>37</p>
                    <span>AKTİF İLAN</span>
                </div>
                <div>
                    <p>2451</p>
                    <span>TAKİPÇİ</span>
                </div>
            </div>
        </div>
    )
}

export default AllShopsCard
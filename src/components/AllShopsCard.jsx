import React from 'react'
import Img from "../images/8daf9bd5bb58cc1ea319ddb61929af94766ee6c1.webp"
import { RiUserFollowFill } from "react-icons/ri";
import { IoIosChatbubbles } from "react-icons/io";



const AllShopsCard = ({data}) => {
    return (
        <div className='all_shops_card'>
            <div className="all_shops_card_header">
                <img src={data?.cover} alt="" />
                <div className="all_shops_card_header_content">
                    <p>{data?.name}</p>
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
                    <p>{data?.followers}</p>
                    <span>TAKİPÇİ</span>
                </div>
            </div>
        </div>
    )
}

export default AllShopsCard
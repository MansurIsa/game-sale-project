import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import { MdOutlineWorkspacePremium } from 'react-icons/md'
import { IoCart } from "react-icons/io5";
import { FaRocketchat } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { FaShare } from "react-icons/fa";
import Avatar from "../images/avatar-3637425_640.webp"




const DetailPageSectionFirstContainer = ({ product }) => {


    return (
        <div className="detail_page_section_first_container container">

            <div className="detail_page_section_first_content detail_page_section_first_card">
                <p>#{product?.product_id}</p>
                <h3>{product?.title}</h3>
                <p>{product?.description}</p>
                <div className="detail_page_section_first_content_buttons">
                    <button><FaQuestion /> Soru Sor</button>
                    <button><MdFavoriteBorder /> Favori</button>
                    <button><FaShare /> Paylaş</button>
                </div>
                <p>Kalan süre : 18 gün 18 saat 10 dakika 30 saniye</p>
            </div>
            <div className="detail_page_section_first_img detail_page_section_first_card">
                <img src={product?.photo} alt="" />
            </div>
            <div className="detail_page_section_first_content_two detail_page_section_first_card">
                <h4>Satıcı bilgileri</h4>
                <div className="detail_page_section_first_content_two_header">
                    <div className="detail_page_section_first_content_two_header_inner">
                        <img src={product?.seller?.cover ? product?.seller?.cover : Avatar} alt="" />
                        <div className="detail_page_section_first_content_two_header_inner_content">
                            <h5>{product?.seller?.name}</h5>
                            <div>
                                <FaCheckCircle className='main_second_card_down_footer_check_icon' />
                                <MdOutlineWorkspacePremium className='main_second_card_down_footer_check_icon' />
                                <p>37.540 Başarılı İşlem</p>
                            </div>
                        </div>
                    </div>


                    <button>Satıcının tüm ilanları</button>
                    <div className="detail_page_section_first_content_two_chat_sms">
                        <button><FaRocketchat /> Sohbet et</button>
                        <button><FaMobileAlt /> Sms gonder</button>
                    </div>
                </div>
                <div className="detail_page_section_first_content_two_footer">
                    <div>{product?.price} TL İlan Ücreti</div>
                    <div>{product?.stock} Stok Sayısı</div>
                </div>
                <button className='add_to_basket'><IoCart /> Satın Al</button>
            </div>


        </div>
    )
}

export default DetailPageSectionFirstContainer
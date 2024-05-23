import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoDiscord } from "react-icons/io5";
import { RiYoutubeLine } from "react-icons/ri";

const HeaderFirstContainer = () => {
    return (
        <div className="header_first_container">
            
            <div className="header_first_list_container container">
                <ul>
                    <li><Link to="">Mağaza Paketleri  |</Link></li>
                    <li><Link to="">Donate  |</Link></li>
                    <li><Link to="">Blog  |</Link></li>
                    <li><Link to="">Yorumlar  |</Link></li>
                    <li><Link to="">Yardım & Destek</Link></li>
                </ul>
                <ul>
                    <li><Link to={''}><FaInstagram className='header_social_icon header_social_instagram_icon' /></Link></li>
                    <li><Link to={''}><FaFacebookF className='header_social_icon header_social_facebook_icon' /></Link></li>
                    <li><Link to={''}><IoLogoDiscord className='header_social_icon header_social_discord_icon' /></Link></li>
                    <li><Link to={''}><RiYoutubeLine className='header_social_icon header_social_youtube_icon' /></Link></li>
                </ul>
            </div>
        </div>
    )
}

export default HeaderFirstContainer

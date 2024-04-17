import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa";


const FooterThirdRightCard = () => {
    return (
        <div className='footer_third_right_card'>
            <h6>Bizi Takip Et</h6>
            <ul>
                <li>
                    <Link to={''}><FaInstagram /></Link>
                </li>
                <li>
                    <Link to={''}><FaInstagram /></Link>
                </li>
                <li>
                    <Link to={''}><FaInstagram /></Link>
                </li>
                <li>
                    <Link to={''}><FaInstagram /></Link>
                </li>
                <li>
                    <Link to={''}><FaInstagram /></Link>
                </li>
                <li>
                    <Link to={''}><FaInstagram /></Link>
                </li>
            </ul>
        </div>
    )
}

export default FooterThirdRightCard
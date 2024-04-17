import React from 'react'
import { IoRocketOutline } from "react-icons/io5";


const FooterFirstCard = () => {
    return (
        <div className='footer_first_card'>
            <IoRocketOutline className='footer_first_icon'/>
            <div>
                <h5>Hızlı Teslimat</h5>
                <p>7 gün 24 saat aldığınız kod anında hesabınızda! Oyun içi teslimatlar Sabah 09:00 - Gece 02:00 arasında yapılır.</p>
            </div>
        </div>
    )
}

export default FooterFirstCard
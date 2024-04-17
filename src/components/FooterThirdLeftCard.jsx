import React from 'react'
import { Link } from 'react-router-dom'
import { BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";



const FooterThirdLeftCard = () => {
    return (
        <div className='footer_third_left_card'>
            <button>Bize geri bildirim bırak</button>
            <div>
                <Link to={''}>
                    <BsTelephone />
                    +99451 555 55 55
                </Link>
            </div>
            <div>
                <Link to={''}>
                    <CiMail />
                    destek@gamesatis.com
                </Link>
            </div>
        </div>
    )
}

export default FooterThirdLeftCard
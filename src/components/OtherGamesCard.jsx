import React from 'react'
import { Link } from 'react-router-dom'
import OtherGamesSectionImg from "../images/black-desert-online-26536.webp"

const OtherGamesCard = () => {
    return (
        <Link to={''}>
            <div className='other_games_card'>
                <img src={OtherGamesSectionImg} alt="" />
                <h2>Black Desert Online Acoin</h2>
            </div>
        </Link>

    )
}

export default OtherGamesCard
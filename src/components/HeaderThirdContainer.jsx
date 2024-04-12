import React from 'react'
import { Link } from 'react-router-dom'

const HeaderThirdContainer = () => {
    return (
        <nav className='container'>
            <ul className='header_third_container'>
                <li><Link to={'/'}>OYUNLAR</Link></li>
                <li><Link to={'/'}>OYUNCU PAZARI</Link></li>
                <li><Link to={'/'}>KNIGHT ONLINE</Link></li>
                <li><Link to={'/'}>PUBG UC</Link></li>
                <li><Link to={'/'}>VALORANT VP</Link></li>
                <li><Link to={'/'}>CS2 SKIN</Link></li>
                <li><Link to={'/'}>RAZER AL-SAT</Link></li>
                <li><Link to={'/'}>AÇIK ARTIRMA</Link></li>
                <li><Link to={'/'}>+BAKİYE YÜKLE</Link></li>
            </ul>
        </nav>

    )
}

export default HeaderThirdContainer
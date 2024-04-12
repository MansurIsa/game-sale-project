import React from 'react'
import { Link } from 'react-router-dom'

const HeaderFirstContainer = () => {
    return (
        <div className="header_first_container">
            <ul className='container'>
                <li><Link to="">Mağaza Paketleri  |</Link></li>
                <li><Link to="">Donate  |</Link></li>
                <li><Link to="">Blog  |</Link></li>
                <li><Link to="">Yorumlar  |</Link></li>
                <li><Link to="">Yardım & Destek</Link></li>

            </ul>
        </div>

    )
}

export default HeaderFirstContainer
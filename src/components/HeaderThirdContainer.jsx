import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderSecondsButtons from './HeaderSecondsButtons';
import { FaBars } from 'react-icons/fa6';

const HeaderThirdContainer = () => {
    const [isActive, setIsActive] = useState(false);

    const barsHandle = () => {
        setIsActive(!isActive);
    };

    return (
        <nav className='header_nav'>
            <div className='container header_third'>
                <ul className={`header_third_container ${isActive ? 'active' : ''}`}>
                    <li><Link to={'/about'}>HAKKIMIZDA</Link></li>
                    <li><Link to={'/games'}>OYUNLAR</Link></li>
                    <li><Link to={'/game-shop'}>OYUNCU PAZARI</Link></li>
                    {/* <li><Link to={'/'}>KNIGHT ONLINE</Link></li> */}
                    {/* <li><Link to={'/'}>PUBG UC</Link></li> */}
                    {/* <li><Link to={'/'}>VALORANT VP</Link></li> */}
                    {/* <li><Link to={'/'}>CS2 SKIN</Link></li> */}
                    <li><Link to={'/shops'}>Mağazalar</Link></li>
                    <li><Link to={'/'}>AÇIK ARTIRMA</Link></li>
                    <li><Link to={'/'}>+BAKİYE YÜKLE</Link></li>
                    <li><Link to={'/'}>HABERLER</Link></li>
                </ul>
                <FaBars onClick={barsHandle} className='bars_icon' />
                <HeaderSecondsButtons />
            </div>
        </nav>
    );
};

export default HeaderThirdContainer;

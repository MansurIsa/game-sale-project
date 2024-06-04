import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa6';
import { GiShoppingBag } from 'react-icons/gi';
import { useDispatch } from 'react-redux';
import { handleLoginRegister, shopCreateBtn } from '../redux/MainReducer';
import Login from './modals/Login';
import { useNavigate } from 'react-router-dom';

const ShopCreateBtns = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showLoginModal, setShowLoginModal] = useState(false);

    const shopCreateCommonBtn = () => {
        const token = localStorage.getItem('access_token_game');
        if (token) {
            dispatch(shopCreateBtn());
        } else {
            dispatch(handleLoginRegister())
        }
    };


    const allShops=()=>{
        navigate("/all-shops")
    }



    return (
        <div className="shop_create_btns container">
            <button onClick={shopCreateCommonBtn}><FaPlus /> Mağaza yarat</button>
            <button onClick={allShops}><GiShoppingBag /> Tüm mağazalar</button>
           
        </div>
    );
};

export default ShopCreateBtns;

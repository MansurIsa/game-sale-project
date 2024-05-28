import React, { useEffect, useRef, useState } from 'react'
import { BsCreditCardFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { handleLoginRegister } from '../redux/MainReducer';
import { FaRocketchat } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import { getUserObj } from '../actions/MainAction';
import Avatar from "../images/avatar-3637425_640.webp"
import { Link } from 'react-router-dom';






const HeaderSecondsButtons = () => {

  const profileDetails=useRef()

  const dispatch = useDispatch()

  let getAccess = localStorage.getItem("access_token_game")

  const {userObj}=useSelector(state=>state.Data)

 

  useEffect(()=>{
    dispatch(getUserObj(localStorage.getItem("loggedInEmail")))
  },[dispatch])

  console.log(userObj);

  console.log(profileDetails);

  const avatarToggleFunc=()=>{
    profileDetails.current.classList.toggle("profile_details_active")
  }

  const exitBtn=()=>{
    localStorage.removeItem('access_token_game')
    localStorage.removeItem('loggedInEmail')
    window.location.reload()
  }

  return (
    <div className='header_seconds_buttons'>
      {
        getAccess ?
          <div className='header_seconds_first_element'>
            <div>
              <img src="" alt="" />
            </div>
            <p>{userObj.balance} ₺</p>
            <FaRocketchat className='header_seconds_first_element_chat'/>
            <IoNotificationsOutline className='header_seconds_first_element_notification'/>
          </div> :
          <button className='sign_btn' onClick={() => dispatch(handleLoginRegister())}><FaUser /> <span>Giriş/Kayıt</span></button>
      }

      {
         getAccess ?
        <div className="profile_buttons">
          <div className="profile_img" onClick={avatarToggleFunc}>
            <img src={userObj.avatar? userObj.avatar: Avatar} alt="" />
          </div>
          <div ref={profileDetails} className="profile_details">
            <div className="profile_details_user">
              <h4>{userObj.first_name} {userObj.last_name}</h4>
              <p>{userObj.balance} ₺</p>
            </div>
            <ul className="profile_details_buttons">
              <li>Bakiye yükle</li>
              <li>Para çek</li>
              <li>Profilim</li>
              <li>Siparişlerim</li>
              <li>İlanlarım</li>
              <li>Favori ilanlarım</li>
              <li>Destek sistemi</li>
              <li>Discord</li>
              <li onClick={exitBtn}>Çıkış</li>
              
              
              
             
              
              
            </ul>
          </div>

        </div>: null
      }


      <button className='payment_btn'><BsCreditCardFill /><span>Satış Yap</span></button>

      <FaCartShopping className='cart_shop_icon' />
      {console.log(userObj)}
    </div>
  )
}

export default HeaderSecondsButtons
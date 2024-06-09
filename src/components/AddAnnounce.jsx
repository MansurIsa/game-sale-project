import React, { useState, useRef, useEffect } from 'react';
import UkImg from "../images/united-kingdom.png";
import AzeImg from "../images/azerbaijan.png";
import { FaPlus } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { announceCreateBtnFunc, handleLoginRegister } from '../redux/MainReducer';



const AddAnnounce = () => {

  const dispatch = useDispatch();

  const [selectedLanguage, setSelectedLanguage] = useState(UkImg);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleSelectLanguage = (imgSrc) => {
    setSelectedLanguage(imgSrc);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const addAnnounceBtn = () => {
    const token = localStorage.getItem('access_token_game');
    if (token) {
      dispatch(announceCreateBtnFunc())
    } else {
      dispatch(handleLoginRegister())
    }
  }

  return (
    <div className="announce_lang_container">
      <button onClick={addAnnounceBtn} className='add_announce_btn'><FaPlus /><span>İlan Ekle</span> </button>
      <div className="language_select_container" ref={dropdownRef}>
        <div className="selected_language" onClick={() => setIsOpen(!isOpen)}>
          <img src={selectedLanguage} alt="Selected Language" />
          {/* <span>Language</span> Optionally add text beside the image */}
        </div>
        {isOpen && (
          <div className="language_options">
            <div onClick={() => handleSelectLanguage(UkImg)}>
              <img src={UkImg} alt="English" />
              {/* <span>English</span> Optionally add text beside the image */}
            </div>
            <div onClick={() => handleSelectLanguage(AzeImg)}>
              <img src={AzeImg} alt="Azerbaijani" />
              {/* <span>Azerbaijani</span> Optionally add text beside the image */}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default AddAnnounce
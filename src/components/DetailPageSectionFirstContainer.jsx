import React, { useState, useEffect } from 'react';
import { FaCheckCircle, FaRocketchat, FaMobileAlt, FaShare, FaQuestion } from 'react-icons/fa';
import { MdOutlineWorkspacePremium, MdFavoriteBorder, MdOutlineHeartBroken } from 'react-icons/md';
import { IoCart } from 'react-icons/io5';
import Avatar from '../images/avatar-3637425_640.webp';
import axios from 'axios';
import { baseUrl } from '../MAIN_API';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { handleLoginRegister, setRefreshed } from '../redux/MainReducer';

const DetailPageSectionFirstContainer = ({ product }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { refreshed } = useSelector(state => state.Data);
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || {};
        if (storedFavorites[product.id]) {
            setIsFavorite(true);
        }
    }, [product.id]);

    const toggleFavorite = () => {
        const token = localStorage.getItem('access_token_game');
        if (token) {
            const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || {};
            if (storedFavorites[product.id]) {
                removeFromFavorites();
            } else {
                addToFavorites();
            }
        } else {
            dispatch(handleLoginRegister());
        }
    };

    const addToFavorites = () => {
        const data = {
            product: product.id
        };
        axios.post(`${baseUrl}product/favorite-create`, data, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access_token_game')}`
            }
        }).then(resp => {
            if (resp.status === 201) {
                const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || {};
                storedFavorites[product.id] = true;
                localStorage.setItem('favorites', JSON.stringify(storedFavorites));
                setIsFavorite(true);
                Swal.fire({
                    title: "Favori ilanına eklendi",
                    icon: "success",
                    confirmButtonText: "OK",
                    width: "400px"
                }).then(() => {
                    navigate(`/${product.name}/${product.id}`);
                    if (!refreshed) {
                        dispatch(setRefreshed());
                        window.location.reload();
                    }
                });
            }
        }).catch(error => {
            console.error("Error adding to favorites", error);
        });
    };

    const removeFromFavorites = () => {
        axios.delete(`${baseUrl}product/favorite-delete/${product.id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access_token_game')}`
            }
        }).then(resp => {
            if (resp.status === 200) {
                const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || {};
                delete storedFavorites[product.id];
                localStorage.setItem('favorites', JSON.stringify(storedFavorites));
                setIsFavorite(false);
                Swal.fire({
                    title: "Favorilerden çıkarıldı",
                    icon: "success",
                    confirmButtonText: "OK",
                    width: "400px"
                }).then(() => {
                    navigate(`/${product.name}/${product.id}`);
                    if (!refreshed) {
                        dispatch(setRefreshed());
                        window.location.reload();
                    }
                });
            }
        }).catch(error => {
            console.error("Error removing from favorites", error);
        });
    };

    return (
        <div className="detail_page_section_first_container container">
            <div className="detail_page_section_first_content detail_page_section_first_card">
                <p>#{product?.id}</p>
                <h3>{product?.title}</h3>
                <p>{product?.description}</p>
                <div className="detail_page_section_first_content_buttons">
                    <button><FaQuestion /> Soru Sor</button>
                    <button onClick={toggleFavorite}>
                        {isFavorite ? <MdOutlineHeartBroken /> : <MdFavoriteBorder />}
                    </button>
                    <button><FaShare /> Paylaş</button>
                </div>
                <p>Kalan süre : 18 gün 18 saat 10 dakika 30 saniye</p>
            </div>
            <div className="detail_page_section_first_img detail_page_section_first_card">
                <img src={product?.photo} alt={product?.title} />
            </div>
            <div className="detail_page_section_first_content_two detail_page_section_first_card">
                <h4>Satıcı bilgileri</h4>
                <div className="detail_page_section_first_content_two_header">
                    <div className="detail_page_section_first_content_two_header_inner">
                        <img src={product?.seller?.cover ? product?.seller?.cover : Avatar} alt={product?.seller?.name} />
                        <div className="detail_page_section_first_content_two_header_inner_content">
                            <h5>{product?.seller?.name}</h5>
                            <div>
                                <FaCheckCircle className='main_second_card_down_footer_check_icon' />
                                <MdOutlineWorkspacePremium className='main_second_card_down_footer_check_icon' />
                                <p>37.540 Başarılı İşlem</p>
                            </div>
                        </div>
                    </div>
                    <button>Satıcının tüm ilanları</button>
                    <div className="detail_page_section_first_content_two_chat_sms">
                        <button><FaRocketchat /> Sohbet et</button>
                        <button><FaMobileAlt /> Sms gönder</button>
                    </div>
                </div>
                <div className="detail_page_section_first_content_two_footer">
                    <div>{product?.price} TL İlan Ücreti</div>
                    <div>{product?.stock} Stok Sayısı</div>
                </div>
                <button className='add_to_basket'><IoCart /> Satın Al</button>
            </div>
        </div>
    );
};

export default DetailPageSectionFirstContainer;

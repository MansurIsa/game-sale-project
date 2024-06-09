import React, { useEffect, useState } from 'react'
import { modalOverlayFunc } from '../../redux/MainReducer'
import { useDispatch, useSelector } from 'react-redux'
import { IoClose } from 'react-icons/io5'
import { FaCloudUploadAlt } from 'react-icons/fa'
import { getCategoryList } from '../../actions/MainAction'
import Swal from 'sweetalert2'
import axios from 'axios'
import { baseUrl } from '../../MAIN_API'

const AnnounceCreateModal = () => {

    const [img, setImg] = useState(null)
    const [imgTest, setImgTest] = useState(null)
    const [shopNameVal, setShopNameVal] = useState("")
    const [announceDescVal, setAnnounceDescVal] = useState("")
    const [announcePriceVal, setAnnouncePriceVal] = useState("")
    const [announceStockVal, setAnnounceStockVal] = useState("")
    const [announceCategoryVal, setAnnounceCategoryVal] = useState("")
    const [announceDurationVal, setAnnounceDurationVal] = useState("")
    const [isAuctionVal, setIsAuctionVal] = useState(false)


    const dispatch = useDispatch()
    const { categoryList } = useSelector(state => state.Data)


    useEffect(() => {
        dispatch(getCategoryList())
    }, [dispatch])

    const shopNameHandle = (e) => {
        setShopNameVal(e.target.value)
    }

    const announceDescHandle = (e) => {
        setAnnounceDescVal(e.target.value)
    }

    const uploadImgHandle = (e) => {
        setImg(e.target.files[0])
        setImgTest(e.target.files[0])

        if (e.target.files) {

            setImgTest(URL.createObjectURL(e.target.files[0]))


        } else {
            setImgTest(null)
        }
    }

    const announcePriceHandle = (e) => {
        setAnnouncePriceVal(e.target.value)
    }

    const announceStockHandle = (e) => {
        setAnnounceStockVal(e.target.value)
    }
    const announceDurationHandle = (e) => {
        setAnnounceDurationVal(e.target.value)
    }

    const isAuctionHandle = (e) => {

        console.log(e.target.checked);
        setIsAuctionVal(e.target.checked)
    }

    const categoryHandler=(e)=>{
        setAnnounceCategoryVal(e.target.value)
    }

    const anounceCreateBtn = () => {
        const data = {
            title: shopNameVal,
            description: announceDescVal,
            photo: img,
            price: +announcePriceVal,
            stock: +announceStockVal,
            game_category: {
                title: announceCategoryVal
            },
            properties: [],
            is_auction: isAuctionVal,
            auction_duration: +announceDurationVal

        }

        console.log(data);

        axios(`${baseUrl}product/create`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access_token_game')}`,
                'Content-Type': 'multipart/form-data',
            },
            method: "POST",
            data

        }).then(resp => {
            console.log(resp);
            if (resp.data === 201) {
                Swal.fire({
                    title: "Created",
                    text: "İlan yaradildi",
                    icon: "success",
                    confirmButtonText: "OK",
                })
            }

        }).catch(err => {
            Swal.fire({
                title: "Error",
                text: "İlan yaradilmadi",
                icon: "error",
                confirmButtonText: "OK",
            })
        })
    }
    return (
        <div className="modal_container">
            <div onClick={() => dispatch(modalOverlayFunc())} className='overlay'></div>
            <div className="modal_card">
                <IoClose onClick={() => dispatch(modalOverlayFunc())} className='modal_close_icon' />
                <input value={shopNameVal} onChange={shopNameHandle} className='modal_card_name_inp' type="text" placeholder='Ilan basligini yazın' />
                <input value={announceDescVal} onChange={announceDescHandle} className='modal_card_name_inp' type="text" placeholder='Ilan açıklamasını yazın' />
                <input onChange={uploadImgHandle} id='uploadImg' type="file" className='input_field' hidden />

                {
                    imgTest ?
                        <img src={imgTest} alt="" /> :
                        <label className='modal_card_upload_label' htmlFor="uploadImg">
                            <div>
                                <FaCloudUploadAlt />
                                <p>Browse Files to upload</p>
                            </div>
                        </label>
                }

                <input value={announcePriceVal} onChange={announcePriceHandle} type="number" className='modal_card_name_inp' placeholder='Qiymet' />
                <input value={announceStockVal} onChange={announceStockHandle} type="number" className='modal_card_name_inp' placeholder='Stock' />
                <select onChange={categoryHandler}>
                    <option value="">Katoqori secin</option>
                    {
                        categoryList?.map((data, i) => {
                            return <option value={data?.title}>{data?.title}</option>
                        })
                    }

                </select>
                <div className="is_auction_inp">
                    <label htmlFor="isAuction">isAuction</label>
                    <input onChange={isAuctionHandle} id='isAuction' type="checkbox" />
                </div>
                <input value={announceDurationVal} onChange={announceDurationHandle} type="number" className='modal_card_name_inp' placeholder='Duration' />

                <button onClick={anounceCreateBtn} className='modal_card_btn'>İlan yarat</button>
            </div>





        </div>
    )
}

export default AnnounceCreateModal
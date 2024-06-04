import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { modalOverlayFunc } from '../../redux/MainReducer'
import { IoClose } from "react-icons/io5";
import { FaCloudUploadAlt } from "react-icons/fa";
import axios from 'axios';
import { baseUrl } from '../../MAIN_API';
import Swal from 'sweetalert2';



const ShopCreateModal = () => {

    const [img, setImg] = useState(null)
    const [imgTest, setImgTest] = useState(null)
    const [shopNameVal, setShopNameVal] = useState("")


    const dispatch = useDispatch()


    const shopNameHandle = (e) => {
        setShopNameVal(e.target.value)
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

    const shopCreateBtn = () => {
        console.log('kjbhvbefv');
        const data = {
            name: shopNameVal,
            cover: img
        }

        console.log(data);

        axios(`${baseUrl}accounts-shop/create`, {
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
                    text: "Shop created",
                    icon: "success",
                    confirmButtonText: "OK",
                })
            }

        }).catch(err => {
            Swal.fire({
                title: "Error",
                text: "don't shop created",
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
                <input value={shopNameVal} onChange={shopNameHandle} className='modal_card_name_inp' type="text" placeholder='Mağaza adını yazın' />
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

                <button onClick={shopCreateBtn} className='modal_card_btn'>Mağaza yarat</button>
            </div>





        </div>
    )
}

export default ShopCreateModal
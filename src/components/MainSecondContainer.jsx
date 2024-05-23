import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import MainSecondCard from './MainSecondCard'
import MainSecondCardImg from "../images/prime-ultra-vip-pubg-mobil-random-hesap-medium.webp"
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../actions/MainAction'


const MainSecondContainer = () => {
    let arr = [
        {
            id: 1,
            name: "PRİME ULTRA VİP PUBG MOBİL RANDOM HESAP1",
            price: 169.90,
            store: "UcuzStore1",
            announcement: "Vitirin İlanı",
            img: MainSecondCardImg
        },
        {
            id: 2,
            name: "PRİME ULTRA VİP PUBG MOBİL RANDOM HESAP2",
            price: 169.90,
            store: "UcuzStore1",
            announcement: "Vitirin İlanı",
            img: MainSecondCardImg
        },
        {
            id: 3,
            name: "PRİME ULTRA VİP PUBG MOBİL RANDOM HESAP3",
            price: 169.90,
            store: "UcuzStore1",
            announcement: "Vitirin İlanı",
            img: MainSecondCardImg
        },
        {
            id: 4,
            name: "PRİME ULTRA VİP PUBG MOBİL RANDOM HESAP4",
            price: 169.90,
            store: "UcuzStore1",
            announcement: "Vitirin İlanı",
            img: MainSecondCardImg
        },
        {
            id: 5,
            name: "PRİME ULTRA VİP PUBG MOBİL RANDOM HESAP5",
            price: 169.90,
            store: "UcuzStore1",
            announcement: "Vitirin İlanı",
            img: MainSecondCardImg
        },
        {
            id: 6,
            name: "PRİME ULTRA VİP PUBG MOBİL RANDOM HESAP6",
            price: 169.90,
            store: "UcuzStore1",
            announcement: "Vitirin İlanı",
            img: MainSecondCardImg
        },
        {
            id: 7,
            name: "PRİME ULTRA VİP PUBG MOBİL RANDOM HESAP7",
            price: 169.90,
            store: "UcuzStore1",
            announcement: "Vitirin İlanı",
            img: MainSecondCardImg
        },
        {
            id: 8,
            name: "PRİME ULTRA VİP PUBG MOBİL RANDOM HESAP8",
            price: 169.90,
            store: "UcuzStore1",
            announcement: "Vitirin İlanı",
            img: MainSecondCardImg
        }
    ]

    const dispatch=useDispatch()
    const {products}=useSelector(state=>state.Data)

    useEffect(()=>{
        dispatch(getProducts())
    },[dispatch])
    return (
        <div className='main_second_container container'>
            {
                products?.map((data, i) => {
                    return (
                        <Link to={`/${data.title}/${data.id}`}>
                            <MainSecondCard key={i} data={data}/>
                        </Link>
                    )
                })
            }


        </div>
    )
}

export default MainSecondContainer
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../actions/MainAction';
import MainSecondCard from './MainSecondCard';
import { Link } from 'react-router-dom';

const MainThirdContainer = () => {

    const dispatch=useDispatch()
    const {products}=useSelector(state=>state.Data)

    console.log(products);

    useEffect(()=>{
        dispatch(getProducts())
    },[dispatch])

    console.log(products);
    return (
        <div className='main_second_container container'>
            {
                products?.map((data, i) => {
                    return (
                        <Link to={`/${data.title}/${data.id}`}>
                            <MainSecondCard key={i} data={data} />
                        </Link>
                    )
                })
            }


        </div>
    )
}

export default MainThirdContainer
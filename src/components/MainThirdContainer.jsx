import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../actions/MainAction';
import MainSecondCard from './MainSecondCard';
import { Link } from 'react-router-dom';

const MainThirdContainer = () => {
    const dispatch = useDispatch();
    const { products } = useSelector(state => state.Data);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    // URL formatlama funksiyası
    const formatUrl = (title, id) => {
        const formattedTitle = title
            .replace(/\//g, '-')        // / işarəsini əvəz edir
            .replace(/\?/g, '')         // ? işarəsini çıxarır
            .trim()                     // Başda və sondakı boşluqları çıxarır
            .replace(/\s+/g, '')        // Aradakı boşluqları çıxarır
            .toLowerCase();             // Kiçik hərflərə çevirir

        return `/${formattedTitle}/${id}`;
    };

    return (
        <div className='main_second_container container'>
            {products?.map((data, i) => (
                <Link key={i} to={formatUrl(data.title, data.id)}>
                    <MainSecondCard data={data} />
                </Link>
            ))}
        </div>
    );
}

export default MainThirdContainer;

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import MainSecondCard from './MainSecondCard';
import { useDispatch, useSelector } from 'react-redux';
import { getHighlightProducts } from '../actions/MainAction';

const MainSecondContainer = () => {
 

    const dispatch = useDispatch();
    const { highlightProducts } = useSelector(state => state.Data);

    useEffect(() => {
        dispatch(getHighlightProducts());
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
            {
                highlightProducts?.map((data, i) => {
                    return (
                        <Link key={i} to={formatUrl(data.title, data.id)}>
                            <MainSecondCard data={data} />
                        </Link>
                    )
                })
            }
        </div>
    );
}

export default MainSecondContainer;

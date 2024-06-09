import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getNewsList } from '../actions/MainAction';
import OtherNewsCard from './OtherNewsCard';

const OtherNewsCardsContainer = () => {
    const dispatch = useDispatch();
    const { newsList } = useSelector(state => state.Data);

    useEffect(() => {
        dispatch(getNewsList());
    }, [dispatch]);

    // URL formatlama funksiyası
   
    return (
        <div className='other_news_container container'>
            {newsList?.map((data, i) => (
                <OtherNewsCard key={i} data={data}/>
            ))}
        </div>
    )
}

export default OtherNewsCardsContainer
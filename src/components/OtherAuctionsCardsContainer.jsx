import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAuctionList } from '../actions/MainAction';
import AuctionSectionCard from './AuctionSectionCard';
import OtherAuctionCard from './OtherAuctionCard';

const OtherAuctionsCardsContainer = () => {
    const dispatch = useDispatch();
    const { auctionList } = useSelector(state => state.Data);

    useEffect(() => {
        dispatch(getAuctionList());
    }, [dispatch]);

    // URL formatlama funksiyası
   
    return (
        <div className='other_news_container container'>
            {auctionList?.map((data, i) => (
                <OtherAuctionCard data={data} />
            ))}
        </div>


// {auctionList?.map((data, i) => (
//     <SwiperSlide key={i} className='news_slider_card'>
//         <Link to={formatUrl(data.title, data.product_id, data.id)}>
//             <AuctionSectionCard data={data} />
//         </Link>
//     </SwiperSlide>
// ))}
    )
}

export default OtherAuctionsCardsContainer
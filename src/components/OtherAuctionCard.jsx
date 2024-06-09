import React from 'react'
import AuctionSectionCard from './AuctionSectionCard';
import { Link } from 'react-router-dom';

const OtherAuctionCard = ({ data }) => {

    const formatUrl = (title, productId, id) => {
        const formattedTitle = title
            .replace(/\//g, '-')        // / işarəsini əvəz edir
            .replace(/\?/g, '')         // ? işarəsini çıxarır
            .trim()                     // Başda və sondakı boşluqları çıxarır
            .replace(/\s+/g, '')        // Aradakı boşluqları çıxarır
            .toLowerCase();             // Kiçik hərflərə çevirir

        return `/${formattedTitle}/${productId}/${id}`;
    };
    return (
        <div className='other_news_card'>
            <Link to={formatUrl(data.title, data.product_id, data.id)}>
                <AuctionSectionCard data={data} />
            </Link>
        </div>
    )
}

export default OtherAuctionCard
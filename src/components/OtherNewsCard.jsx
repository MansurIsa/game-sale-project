import React from 'react'
import { Link } from 'react-router-dom';
import NewsSectionCard from './NewsSectionCard';

const OtherNewsCard = ({data}) => {
    const formatUrl = (title, id) => {
        const formattedTitle = title
            .replace(/\//g, '-')        // / işarəsini əvəz edir
            .replace(/\?/g, '')         // ? işarəsini çıxarır
            .trim()                     // Başda və sondakı boşluqları çıxarır
            .replace(/\s+/g, '')        // Aradakı boşluqları çıxarır
            .toLowerCase();             // Kiçik hərflərə çevirir

        return `/${formattedTitle}/detail/${id}`;
    };
    return (
        <div className='other_news_card'>
            <Link to={formatUrl(data.title, data.id)}>
                <NewsSectionCard data={data} />
            </Link>
        </div>
    )
}

export default OtherNewsCard
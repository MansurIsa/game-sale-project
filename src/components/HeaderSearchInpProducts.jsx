import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import HeaderSearchInpProductCard from './HeaderSearchInpProductCard';

const HeaderSearchInpProducts = () => {
    const productsSearchList = useSelector(state => state.Data.productsSearchList);

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
        <div className="header_search_inp_products">
            {productsSearchList.length > 0 ? (
                productsSearchList.slice(0, 4).map((data, i) => (
                    <Link key={i} to={formatUrl(data.title, data.id)}>
                        <HeaderSearchInpProductCard data={data} />
                    </Link>
                ))
            ) : (
                <div className="no-results">Axtarış nəticəsi tapılmadı.</div>
            )}
        </div>
    );
};

export default HeaderSearchInpProducts;

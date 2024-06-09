import React, { useEffect } from 'react'
import PlayerMarketFilterCard from './PlayerMarketFilterCard'
import { useDispatch, useSelector } from 'react-redux';
import { getProductListFilter, getProducts, getProductsFilter } from '../actions/MainAction';
import { Link } from 'react-router-dom';
import MainSecondCard from './MainSecondCard';

const PlayerMarketFilterCardsContainer = () => {
  const dispatch = useDispatch();
  const { productListFilter,filterProducts } = useSelector(state => state.Data);

  useEffect(() => {
    dispatch(getProductsFilter());
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
    <div className='player_market_filter_cards_container'>
      {filterProducts?.map((data, i) => (
        <Link key={i} to={formatUrl(data.title, data.id)}>
          <MainSecondCard data={data} />
        </Link>
      ))}
      {/* <PlayerMarketFilterCard />
      <PlayerMarketFilterCard />
      <PlayerMarketFilterCard />
      <PlayerMarketFilterCard />
      <PlayerMarketFilterCard />
      <PlayerMarketFilterCard />
      <PlayerMarketFilterCard />
      <PlayerMarketFilterCard />
      <PlayerMarketFilterCard /> */}
    </div>
  )
}

export default PlayerMarketFilterCardsContainer
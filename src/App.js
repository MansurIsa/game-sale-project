import React from 'react';
import { Routes, Route } from "react-router-dom";
import { useSelector } from 'react-redux';
import Home from './pages/Home';
import Games from './pages/Games';
import otherPageBanner from "./images/26hZAJzIm8pBKR5PMibtNGCUy.webp";
import PlayerMarket from './pages/PlayerMarket';
import DetailProduct from './pages/DetailProduct';
import About from './pages/About';
import Login from './components/modals/Login';
import Announcement from './pages/Announcement';
import Shops from './pages/Shops';
import AllShops from './pages/AllShops';
import Favories from './pages/Favories';
import LoaderContainer from './components/LoaderContainer';

const App = () => {
  const { loginRegisterModal, loader } = useSelector(state => state.Data);

  return (
    <div>
      <Routes>
        <Route path='/game-sale-project' element={<Home />} />
        <Route path='/games' element={<Games otherPageBanner={otherPageBanner} />} />
        <Route path='/about' element={<About otherPageBanner={otherPageBanner} />} />
        <Route path='/game-shop' element={<PlayerMarket otherPageBanner={otherPageBanner} />} />
        <Route path='/:productName/:id' element={<DetailProduct otherPageBanner={otherPageBanner} />} />
        <Route path='/my-announcements' element={<Announcement otherPageBanner={otherPageBanner} />} />
        <Route path='/my-favories' element={<Favories otherPageBanner={otherPageBanner} />} />
        <Route path='/shops' element={<Shops otherPageBanner={otherPageBanner} />} />
        <Route path='/all-shops' element={<AllShops otherPageBanner={otherPageBanner} />} />
      </Routes>

      {loginRegisterModal && <Login />}
      {loader && <LoaderContainer />}
    </div>
  );
};

export default App;

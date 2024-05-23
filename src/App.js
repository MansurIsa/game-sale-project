import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Games from './pages/Games';
import otherPageBanner from "./images/26hZAJzIm8pBKR5PMibtNGCUy.webp"
import PlayerMarket from './pages/PlayerMarket';
import DetailProduct from './pages/DetailProduct';
import MainSecondCardImg from "./images/prime-ultra-vip-pubg-mobil-random-hesap-medium.webp"
import { useSelector } from 'react-redux';
import About from './pages/About';
import Login from './components/modals/Login';


const App = () => {

  const {loginRegisterModal}=useSelector(state=>state.Data)

  
  return (
    <div>

      <Routes>
        <Route path='/game-sale-project' element={<Home />} />
        <Route path='/oyunlar' element={<Games otherPageBanner={otherPageBanner} />} />
        <Route path='/hakkımızda' element={<About otherPageBanner={otherPageBanner} />} />
        <Route path='/oyuncu-pazari' element={<PlayerMarket otherPageBanner={otherPageBanner} />} />
        <Route path='/:productName/:id' element={<DetailProduct  otherPageBanner={otherPageBanner} />} />

      </Routes>

      {loginRegisterModal && <Login/>}
    </div>
  )
}

export default App
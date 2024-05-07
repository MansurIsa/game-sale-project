import React from 'react'
import {  Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Games from './pages/Games';
import otherPageBanner from "./images/26hZAJzIm8pBKR5PMibtNGCUy.webp"
import PlayerMarket from './pages/PlayerMarket';

const App = () => {
  return (
    <div>
      
      <Routes>
        <Route path='/game-sale-project' element={<Home />} />
        <Route path='/oyunlar' element={<Games otherPageBanner={otherPageBanner}/>} />
        <Route path='/oyuncu-pazari' element={<PlayerMarket otherPageBanner={otherPageBanner}/>} />
        
      </Routes>
    </div>
  )
}

export default App
import React from 'react'
import {  Routes, Route, useNavigate } from "react-router-dom";
import Home from './pages/Home';

const App = () => {
  return (
    <div>
      
      <Routes>
        <Route path='/game-sale-project' element={<Home />} />
        
      </Routes>
    </div>
  )
}

export default App
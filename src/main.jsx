import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/global.css';

import Home from './pages/Home';
import Navbar from './components/templates/Navbar';

ReactDOM.createRoot(document.getElementById('root')).render(
 <BrowserRouter>
  <Navbar />
  <Routes>
    <Route index path="/" element={<Home />} />
  </Routes>
 </BrowserRouter>
)

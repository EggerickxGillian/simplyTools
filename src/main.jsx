import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';

ReactDOM.createRoot(document.getElementById('root')).render(
 <BrowserRouter>
  <Routes>
    <Route index path="/" element={<Home />} />
  </Routes>
 </BrowserRouter>
)

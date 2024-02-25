// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Background from './pages/Background';
import Password from "./pages/Password";
import CurrencyConvertor from "./pages/CurrencyConvertor.jsx";

function App() {
 
  return (
    <BrowserRouter>
     <Routes>
    <Route path="/bg" element={<Background />} />
    <Route path="/password" element={<Password />} />
    <Route path="/" element={<CurrencyConvertor />} />
    </Routes>

    </BrowserRouter>
  )
}

export default App

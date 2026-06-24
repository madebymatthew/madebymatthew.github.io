import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import type React from 'react'
import NavigationMenu from './components/NavigationMenu/NavigationMenu';

function App() {

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const toggleMenu = () => {
    console.log(!isMenuOpen);
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <BrowserRouter>
      <Header onToggleMenu={toggleMenu} />
      {isMenuOpen && <NavigationMenu onClose={toggleMenu}/>}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

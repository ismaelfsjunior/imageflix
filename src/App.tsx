import React from 'react';
//import './App.css';
import Hero from './components/Hero';
import NavBar from './components/Navbar';
import Carrousel from './components/Carrousel';
import './input.css';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <div className="m-auto antialiased bg-black text-white">
      <Hero />
      <NavBar />
      <Carrousel />
      <Carrousel />
      <Carrousel />
    </div>
  );
};

export default App;

import React from 'react';
//import './App.css';
import Hero from './components/Hero';
import NavBar from './components/Navbar';
import './input.css';
const App = () => {
  return (
    <div className="m-auto antialiased bg-black text-white">
      <Hero />
      <NavBar />
    </div>
  );
};

export default App;

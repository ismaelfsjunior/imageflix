import React, { useState ,useEffect} from 'react';
import axios from 'axios';
import CONST from './data/constants';
import Hero from './components/Hero';
import NavBar from './components/Navbar';
import Carrousel from './components/Carrousel';
import './input.css';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  const {URL, APISTRING } = CONST;

  const [movies , setMovies ] = useState<any[]>([]);
  const moviesUrl = `${URL}/discover/movie${APISTRING}&sort_by=popularity.desc`
  
  const getFeaturedMovie = () => movies && movies[2];

  useEffect( () => {
    const fetchData = async () => {
      try {
        const moviesData = await axios.get(moviesUrl);
        setMovies(moviesData.data.results);
      } catch (error) {
        setMovies([]);
      }
    }
    fetchData();
  }, [moviesUrl]);

  //useEffect(() => movies && console.log(movies), [movies])
  return (
    <div className="m-auto antialiased bg-black text-white">
      <Hero {...getFeaturedMovie()}/>
      <NavBar />
      <Carrousel />
      <Carrousel />
      <Carrousel />
    </div>
  );
};

export default App;

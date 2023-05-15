import React, { useState ,useEffect} from 'react';
import axios from 'axios';
import CONST from './data/constants';
import Hero from './components/Hero';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import Carrousel from './components/Carrousel';
import './input.css';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  const {URL, APISTRING } = CONST;

  const [movies , setMovies ] = useState<any[]>([]);
  const [series, setSeries ] = useState<any[]>([]);
  const moviesUrl = `${URL}/discover/movie${APISTRING}&sort_by=popularity.desc`
  const serieUrl = `${URL}/discover/tv${APISTRING}&sort_by=popularity.desc`

  useEffect( () => {
    const fetchData = async () => {
      try {
        const moviesData = await axios.get(moviesUrl);
        setMovies(moviesData.data.results);

        const serieData = await axios.get(serieUrl);
        setSeries(serieData.data.results);        
      } catch (error) {
        setMovies([]);
        setSeries([]);
      }
    }
    fetchData();
  }, [moviesUrl, serieUrl]);

  //useEffect(() => movies && console.log(movies), [movies])
  const getFeaturedMovie = () => movies && movies[0];
  
  const getMovieList = () => {
    if (movies) {
      const [featured, ...movieList] = movies;     
      return movieList;
    }
    return [];
  }

  return (
    <div className="m-auto antialiased bg-black text-white">
      <Hero {...getFeaturedMovie()}/>
      <NavBar />
      <Carrousel title='Filmes' data={getMovieList()}/>
      <Carrousel title='Serie' data={series}/>
      <Carrousel title='outros'/>
      <Footer />
    </div>
  );
};

export default App;

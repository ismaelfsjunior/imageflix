import React, { useState ,useEffect} from 'react';
import axios from 'axios';
import CONST from './data/constants';
import Hero from './components/Hero';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import Carrousel from './components/Carrousel';
import Loading from './components/Loading';
import './input.css';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { Title } from './data/mockData';

const App = () => {
  const {URL, APISTRING } = CONST;

  const [movies , setMovies ] = useState<any[]>([]);
  const [series, setSeries ] = useState<any[]>([]);
  const [title, setTitle] = useState<any>();
  const moviesUrl = `${URL}/discover/movie${APISTRING}&sort_by=popularity.desc`
  const serieUrl = `${URL}/discover/tv${APISTRING}&sort_by=popularity.desc`
  const [loading, setLoading] = useState<boolean>(true)

  useEffect( () => {
    const fetchData = async () => {
      try {
        const moviesData = await axios.get(moviesUrl);
        setMovies(moviesData.data.results);

        const serieData = await axios.get(serieUrl);
        setSeries(serieData.data.results);   
        
        setLoading(false);
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
      const [...movieList] = movies;     
      return movieList;
    }
    return [];
  }

  const getTitle = async ({ type, id }: Title) => {
    setLoading(true);
    const title = await axios.get(`${URL}/${type}/${id}${APISTRING}`)
    setTitle(title.data);
    setLoading(false);
  };

  return (
    <div className="m-auto antialiased bg-black text-white">
      {loading && (
        <>
          <Loading />
          <NavBar />
        </>
      )}
      {!loading && (
        <>
        <Hero {...getFeaturedMovie()}/>
        <NavBar />
        <Carrousel title='Filmes' data={getMovieList()}/>
        <Carrousel title='Serie' data={series}/>
        <Carrousel title='outros'/>
        </>
      )}
      <Footer />
    </div>
  );
};

export default App;

import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

import Movie from './components/Movie';



const API_KEY = 'ee8b648ac04179ef14616f3b26f6499e';
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popilarity.desc&api_key=${API_KEY}`
const IMG_API = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API = 'https://api.themoviedb.org/3/find/{external_id}?api_key=<<api_key>>&language=en-US&external_source=imdb_id';


function App() {

    const [movies, setMovies] = useState([]);
    

    

  useEffect(()=>{

    async function fetchData(){
      const request = await axios.get(FEATURED_API)
      console.log(request.data.results);
      setMovies(request.data.results);
      return request
    }
     
    fetchData();
    
  }, [])


  return (
    <div className="App">
      {console.log(movies)}
      {movies.length > 0  && 
      movies.map((movie)=> <Movie key={movie.id} data={movie} />)}
   </div>
  )
}

export default App;

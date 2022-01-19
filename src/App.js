import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import Header from './components/header';
import SearchBar from './components/searchBar';

const App = () => {
  const [movies, setMovies] = useState([]);

  const [search, setSearch] = useState('');

  const getMovieRequest = async (search) => {
    const url = `http://www.omdbapi.com/?s=${search}&apikey=2149ae03`
    const response = await fetch(url);
    const responseJson = await response.json();

    if(responseJson.Search) {
      setMovies(responseJson.Search);
    }
    
  }

  useEffect(() => {
    getMovieRequest(search);
  }, [search]);
  
  return (
    <div className='container-fluid movie-app'>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <Header heading="OMDb Movies"/>
        <SearchBar search={search} setSearch={setSearch}/>
      </div>
      <div className='row'>
        <MovieList movies = {movies}/>
      </div>
    </div>
  );
}
export default App;

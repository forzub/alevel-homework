import React, {useState, useEffect} from 'react';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Header from './componets/Header';
import Movies from './pages/Movies';
import InputRange from './pages/InputRange';
import { normolizeData } from './pages/Movies';
import DetalMovies from './pages/DetalMovies';



function App() {

  const [movies, setMovies] = useState([]);

  const ReadFromURL = () => {
    const url = 'http://api.tvmaze.com/shows';
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            setMovies([...data]);
        });
}


useEffect(ReadFromURL, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Navigate to='/input-range' />} />
        <Route path='/movies' element={<Movies movies={normolizeData(movies)}/>} />
        <Route path='/movies/:id' element={ <DetalMovies movies={movies} /> } />
        <Route path='/input-range' element={<InputRange />} />
      </Routes>
    </>
  );
}

export default App;

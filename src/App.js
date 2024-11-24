import { useEffect, useState } from 'react';
import './App.css';
import { getMovieList, searchMovie } from './api';

const App = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const PopularMovieList = ({ popularMovies }) => {
    return (
      <>
        {popularMovies.map((movie, i) => (
          <div className="Movie-wrapper" key={i}>
            <div className="Movie-title">{movie.title}</div>
            <img
              className="Movie-image"
              src={`${process.env.REACT_APP_BASEIMGURL}${movie.poster_path}`}
              alt="Movie poster"
            />
            <div className="Movie-date">release: {movie.release_date}</div>
            <div className="Movie-rate">{movie.vote_average}</div>
          </div>
        ))}
      </>
    );
  };

  const search = async (q) => {
    setQuery(q);
    if (q.length > 3) {
      const searchResults = await searchMovie(q);
      setPopularMovies(searchResults);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="intro-section">
          <h1 className="intro-title">FOR YOUR INFORMATION MOVIES</h1>
          <p className="intro-subtitle">GUNADARMA FILMS</p>
          <p className="intro-info">TRENDING 1000000+</p>
        </div>
        <input
          placeholder="Cari Film Kesayangan..."
          className="Movie-search"
          onChange={({ target }) => search(target.value)}
        />
        <div className="Movie-container">
          <PopularMovieList popularMovies={popularMovies} />
        </div>
      </header>
    </div>
  );
};

export default App;

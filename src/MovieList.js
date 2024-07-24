import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://api.themoviedb.org/3/discover/movie', {
        params: {
          api_key: 'YOUR_API_KEY',
          language: 'en-US',
          sort_import React, { useState, useEffect } from 'react';
          import axios from 'axios';
          
          const MovieList = () => {
            const [movies, setMovies] = useState([]);
            const [searchTerm, setSearchTerm] = useState('');
          
            useEffect(() => {
              const fetchData = async () => {
                const response = await axios.get('https://api.themoviedb.org/3/discover/movie', {
                  params: {
                    api_key: 'YOUR_TMDB_API_KEY',
                    language: 'en-US',
                    sort_by: 'popularity.desc',
                    include_adult: false,
                    include_video: false,
                    page: 1
                  }
                });
                setMovies(response.data.results);
              };
          
              fetchData();
            }, []);
          
            const handleSearch = async () => {
              const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
                params: {
                  api_key: 'YOUR_TMDB_API_KEY',
                  language: 'en-US',
                  query: searchTerm,
                  include_adult: false,
                }
              });
              setMovies(response.data.results);
            };
          
            const handleChange = (event) => {
              setSearchTerm(event.target.value);
            };
          
            return (
              <div>
                <h1>Movie Browser</h1>
                <div>
                  <input
                    type="text"
                    placeholder="Search movies..."
                    value={searchTerm}
                    onChange={handleChange}
                  />
                  <button onClick={handleSearch}>Search</button>
                </div>
                <ul className="movie-list">
                  {movies.map(movie => (
                    <li key={movie.id}>
                      <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                      />
                      <h3>{movie.title}</h3>
                    </li>
                  ))}
                </ul>
              </div>
            );
          };
          
          export default MovieListby: 'popularity.desc',
          include_adult: false,
          include_video: false,
          page: 1
        }
      });
      setMovies(response.data.results);
    };

    fetchData();
  }, []);

  return (
    <div>import React, { useState, useEffect } from 'react';
    import axios from 'axios';
    
    const MovieList = () => {
      const [movies, setMovies] = useState([]);
      const [searchTerm, setSearchTerm] = useState('');
    
      useEffect(() => {
        const fetchData = async () => {
          const response = await axios.get('https://api.themoviedb.org/3/discover/movie', {
            params: {
              api_key: 'YOUR_TMDB_API_KEY',
              language: 'en-US',
              sort_by: 'popularity.desc',
              include_adult: false,
              include_video: false,
              page: 1
            }
          });
          setMovies(response.data.results);
        };
    
        fetchData();
      }, []);
    
      const handleSearch = async () => {
        const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
          params: {
            api_key: 'YOUR_TMDB_API_KEY',
            language: 'en-US',
            query: searchTerm,
            include_adult: false,
          }
        });
        setMovies(response.data.results);
      };
    
      const handleChange = (event) => {
        setSearchTerm(event.target.value);
      };
    
      return (
        <div>
          <h1>Movie Browser</h1>
          <div>
            <input
              type="text"
              placeholder="Search movies..."
              value={searchTerm}
              onChange={handleChange}
            />
            <button onClick={handleSearch}>Search</button>
          </div>
          <ul className="movie-list">
            {movies.map(movie => (
              <li key={movie.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
                <h3>{movie.title}</h3>
              </li>
            ))}
          </ul>
        </div>
      );
    };
    
    export default MovieList;
    
      <h1>Movie Browser</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Movie movie={movie} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
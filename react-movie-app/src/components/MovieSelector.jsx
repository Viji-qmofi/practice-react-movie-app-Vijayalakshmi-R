import React, { useState } from 'react'
import './MovieSelector.css';

const MovieSelector = () => {
  const [selectedGenre, setSelectedGenre] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [movies, setMovies] = useState([]);

  // Simulated movie database
  const movieData = {
    Action: ["Mad Max: Fury Road", "John Wick", "Die Hard"],
    Comedy: ["Superbad", "The Hangover", "Step Brothers"],
    Drama: ["The Shawshank Redemption", "Forrest Gump", "Fight Club"],
  };

  const fetchMovies = () => {
    setError("");
    setMovies([]);  

     if (!selectedGenre) {
      setError("Please select a genre before fetching movies.");
      return;
    }

    setIsLoading(true);

    // Simulate API delay
    setTimeout(() => {
      setMovies(movieData[selectedGenre]);
      setIsLoading(false);
    }, 1500);
  };



  return (
    <div>
      <h1>Movie Genre Selector</h1>

      {/* Dropdown */}
      <select
      value={selectedGenre}
        onChange={(e) => setSelectedGenre(e.target.value)}
      >
        <option value="">-- Select Genre --</option>
        <option value="Action">Action</option>
        <option value="Comedy">Comedy</option>
        <option value="Drama">Drama</option>     
      </select>

      <button onClick={fetchMovies}>
            Fetch Movies
      </button><br/><br/>
{/* Error Message */}
      {error && <p >{error}</p>}

      {/* Loading Indicator */}
      
            {isLoading && (
                  <div class="spinner">
             <p>Loading...</p>
      </div>)}

       {/* Movie List */}
      <ul >
        {movies.map((movie, index) => (
          <li key={index}>{movie}</li>
        ))}
      </ul>
    </div>
  )
}

export default MovieSelector
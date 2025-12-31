import React, { useState } from 'react';
import axios from 'axios';

// Allow API base URL to be configured for different environments
// If no env var is set and we are not on localhost, fall back to the deployed Railway URL
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL
  || (typeof window !== 'undefined' && window.location.hostname !== 'localhost'
    ? 'https://movie-finder-production.up.railway.app'
    : 'http://localhost:5000');

function SearchBar({ setAlbums, setLoading, setError }) {
  // State to store search input value
  const [searchTerm, setSearchTerm] = useState('');

  // Function to handle search
  const handleSearch = async (e) => {
    e.preventDefault();

    // Check if search term is empty
    if (!searchTerm.trim()) {
      setError('Please enter a movie title');
      return;
    }

    // Clear previous error
    setError('');
    // Show loading spinner
    setLoading(true);

    try {
      // Call backend API to search albums
      const response = await axios.get(`${API_BASE_URL}/api/spotify/search`, {
        params: {
          query: searchTerm
        }
      });

      // Update albums state with results
      setAlbums(response.data.items);
      
      // Show message if no results found
      if (response.data.items.length === 0) {
        setError('No movies found. Try a different search!');
      }
    } catch (err) {
      console.error('Search error:', err);
      setError('Something went wrong. Please try again!');
    } finally {
      // Hide loading spinner
      setLoading(false);
    }
  };

  return (
    <div className="mb-12 animate-fadeIn">
      <form onSubmit={handleSearch} className="flex gap-4 max-w-3xl mx-auto">
        <input
          type="text"
          className="flex-1 px-8 py-5 text-lg border-none rounded-full bg-white/95 shadow-lg transition-all duration-300 border-2 border-transparent focus:outline-none focus:bg-white focus:shadow-2xl focus:-translate-y-1 focus:border-white/50 placeholder:text-gray-400 placeholder:font-light"
          placeholder="Search for movies (e.g., Avengers, Inception, Titanic)..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button 
          type="submit" 
          className="px-12 py-5 text-lg font-bold text-white bg-gradient-to-r from-spotify-green to-spotify-green-light border-none rounded-full cursor-pointer transition-all duration-300 shadow-lg shadow-spotify-green/40 uppercase tracking-wider hover:from-spotify-green-light hover:to-spotify-green hover:-translate-y-1 hover:scale-105 hover:shadow-xl hover:shadow-spotify-green/60 active:translate-y-0 active:scale-100"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;

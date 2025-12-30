const express = require('express');
const router = express.Router();
const axios = require('axios');

// TMDB API - Free, no authentication needed!
const TMDB_API_KEY = '8265bd1679663a7ea12ac168da84d2e8'; // Public demo key
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_IMAGE_BASE = 'https://image.tmdb.org/t/p/w500';

// Route to search for movies
router.get('/search', async (req, res) => {
  try {
    const { query } = req.query;

    // Check if search query is provided
    if (!query) {
      return res.status(400).json({ error: 'Please provide a search query' });
    }

    // Search TMDB API for movies
    const response = await axios.get(`${TMDB_BASE_URL}/search/movie`, {
      params: {
        api_key: TMDB_API_KEY,
        query: query,
        include_adult: false,
        language: 'en-US',
        page: 1
      }
    });

    // Transform data to match our frontend format
    const movies = response.data.results.map(movie => ({
      id: movie.id,
      name: movie.title,
      artists: [{ name: movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A' }],
      images: [{ url: movie.poster_path ? `${TMDB_IMAGE_BASE}${movie.poster_path}` : 'https://via.placeholder.com/500x750?text=No+Poster' }],
      release_date: movie.release_date || 'N/A',
      total_tracks: movie.vote_average ? `${movie.vote_average.toFixed(1)} ⭐` : 'N/A',
      external_urls: { spotify: `https://www.themoviedb.org/movie/${movie.id}` },
      overview: movie.overview
    }));

    // Send movie data to frontend
    res.json({ items: movies });
  } catch (error) {
    console.error('Search error:', error.message);
    res.status(500).json({ error: 'Failed to search movies' });
  }
});

// Route to get movie details
router.get('/album/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Get movie details from TMDB
    const response = await axios.get(`${TMDB_BASE_URL}/movie/${id}`, {
      params: {
        api_key: TMDB_API_KEY
      }
    });

    // Send movie details to frontend
    res.json(response.data);
  } catch (error) {
    console.error('Movie details error:', error.message);
    res.status(500).json({ error: 'Failed to get movie details' });
  }
});

module.exports = router;

// Import required packages
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const spotifyRoutes = require('./routes/spotify');

// Load environment variables
dotenv.config();

// Create Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Allow frontend to connect
app.use(express.json()); // Parse JSON requests

// Routes
app.use('/api/spotify', spotifyRoutes);

// Basic route to check if server is running
app.get('/', (req, res) => {
  res.json({ message: 'Spotify Album Finder API is running!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

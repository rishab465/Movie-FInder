import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import AlbumList from './components/AlbumList';
import './index.css';

function App() {
  // State to store albums from search results
  const [albums, setAlbums] = useState([]);
  // State to show loading spinner
  const [loading, setLoading] = useState(false);
  // State to store error messages
  const [error, setError] = useState('');

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-600 via-purple-700 to-pink-500">
      {/* Header section */}
      <header className="bg-white/15 backdrop-blur-xl py-6 md:py-10 px-4 shadow-lg border-b border-white/20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl mb-2 flex items-center justify-center gap-2 font-bold drop-shadow-lg animate-fadeInDown">
            <span className="text-3xl sm:text-4xl md:text-5xl animate-bounce">🎬</span>
            Movie Finder
          </h1>
          <p className="text-white/95 text-base sm:text-lg md:text-xl font-light tracking-wide">
            Discover amazing movies from around the world
          </p>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-8">
        <SearchBar 
          setAlbums={setAlbums}
          setLoading={setLoading}
          setError={setError}
        />
        
        {/* Show error message if there's an error */}
        {error && (
          <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 sm:px-8 py-4 sm:py-6 rounded-2xl my-4 mx-auto max-w-2xl text-center shadow-lg animate-shake text-base sm:text-lg font-medium">
            {error}
          </div>
        )}

        {/* Show loading spinner while fetching data */}
        {loading && (
          <div className="text-center py-12 sm:py-16 text-white">
            <div className="border-5 border-white/20 border-t-white rounded-full w-12 h-12 sm:w-16 sm:h-16 animate-spin mx-auto mb-4 sm:mb-6 shadow-lg"></div>
            <p className="text-lg sm:text-xl font-medium drop-shadow">Searching for movies...</p>
          </div>
        )}

       
        {!loading && !error && (
          <AlbumList albums={albums} />
        )}
      </main>

      
    </div>
  );
}

export default App;

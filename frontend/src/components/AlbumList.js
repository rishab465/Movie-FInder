import React from 'react';
import AlbumCard from './AlbumCard';

function AlbumList({ albums }) {
  // If no albums, show welcome message
  if (albums.length === 0) {
    return (
      <div className="text-center py-12 sm:py-20 px-4 sm:px-8 text-white animate-fadeIn">
        <div className="text-6xl sm:text-8xl mb-4 sm:mb-6 animate-float">🎬</div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4 font-bold drop-shadow-lg">Welcome to Movie Finder!</h2>
        <p className="text-base sm:text-lg md:text-xl opacity-95 font-light drop-shadow">Search for your favorite movies above to get started</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 py-4 px-4 sm:px-0">
      {albums.map((album) => (
        <AlbumCard key={album.id} album={album} />
      ))}
    </div>
  );
}

export default AlbumList;

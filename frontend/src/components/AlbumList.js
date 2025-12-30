import React from 'react';
import AlbumCard from './AlbumCard';

function AlbumList({ albums }) {
  // If no albums, show welcome message
  if (albums.length === 0) {
    return (
      <div className="text-center py-20 px-8 text-white animate-fadeIn">
        <div className="text-8xl mb-6 animate-float">�</div>
        <h2 className="text-4xl mb-4 font-bold drop-shadow-lg">Welcome to Movie Finder!</h2>
        <p className="text-xl opacity-95 font-light drop-shadow">Search for your favorite movies above to get started</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 py-4">
      {albums.map((album) => (
        <AlbumCard key={album.id} album={album} />
      ))}
    </div>
  );
}

export default AlbumList;

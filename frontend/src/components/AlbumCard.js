import React from 'react';

function AlbumCard({ album }) {
  // Get album cover image (use first image or placeholder)
  const albumImage = album.images && album.images.length > 0 
    ? album.images[0].url 
    : 'https://via.placeholder.com/300?text=No+Image';

  // Get artist names
  const artists = album.artists.map(artist => artist.name).join(', ');

  // Format release date to show only year
  const releaseYear = album.release_date ? album.release_date.split('-')[0] : 'N/A';

  // Open Spotify link in new tab
  const openInSpotify = () => {
    if (album.external_urls && album.external_urls.spotify) {
      window.open(album.external_urls.spotify, '_blank');
    }
  };

  return (
    <div 
      onClick={openInSpotify}
      className="bg-white rounded-2xl overflow-hidden shadow-xl transition-all duration-500 cursor-pointer border border-white/20 animate-slideUp hover:-translate-y-3 hover:scale-105 hover:shadow-2xl hover:border-white/40 group"
    >
      <div className="relative w-full pt-[100%] overflow-hidden bg-gray-200">
        <img 
          src={albumImage} 
          alt={album.name}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-spotify-green/90 to-spotify-green-light/90 flex flex-col items-center justify-center opacity-0 transition-all duration-400 backdrop-blur-sm group-hover:opacity-100">
          <span className="text-4xl sm:text-6xl mb-2 animate-pulse">▶</span>
          <p className="text-sm sm:text-base font-bold uppercase tracking-wide text-white">View on TMDB</p>
        </div>
      </div>
      
      <div className="p-4 sm:p-5 bg-gradient-to-b from-white to-gray-50">
        <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 whitespace-nowrap overflow-hidden text-ellipsis transition-colors duration-300 group-hover:text-spotify-green" title={album.name}>
          {album.name}
        </h3>
        <p className="text-sm sm:text-base text-gray-600 mb-3 whitespace-nowrap overflow-hidden text-ellipsis font-medium" title={artists}>
          {artists}
        </p>
        <div className="flex justify-between text-xs sm:text-sm text-gray-400 gap-2">
          <span className="px-2 sm:px-3 py-1.5 sm:py-2 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full font-semibold transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-spotify-green group-hover:to-spotify-green-light group-hover:text-white group-hover:scale-105">
            {releaseYear}
          </span>
          <span className="px-2 sm:px-3 py-1.5 sm:py-2 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full font-semibold transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-spotify-green group-hover:to-spotify-green-light group-hover:text-white group-hover:scale-105">
            {album.total_tracks}
          </span>
        </div>
      </div>
    </div>
  );
}

export default AlbumCard;

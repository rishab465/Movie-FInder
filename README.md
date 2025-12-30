# � Movie Finder

<div align="center">

![Movie Finder Banner](https://img.shields.io/badge/Movie-Finder-purple?style=for-the-badge&logo=themoviedatabase)

**A Beautiful Movie Search Application**

Discover amazing movies from around the world with stunning UI and real-time search powered by TMDB API.

[Live Demo](#) | [Features](#-features) | [Tech Stack](#-tech-stack) | [Getting Started](#-getting-started)

</div>

---

## ✨ Features

- 🔍 **Real-time Search** - Instant movie results as you type
- 🎨 **Beautiful UI** - Modern, responsive design with Tailwind CSS
- 🎭 **Movie Details** - View posters, ratings, release years, and more
- 🌐 **TMDB Integration** - Access to millions of movies worldwide
- ⚡ **Fast & Smooth** - Optimized performance with React
- 📱 **Fully Responsive** - Works perfectly on all devices

## 🎯 Demo

### Search for Your Favorite Movies
Search for movies like "Avengers", "Inception", "Titanic", or any title you love!

### What You Get:
- High-quality movie posters
- IMDb ratings (⭐ out of 10)
- Release years
- Direct links to TMDB for full details

## 🛠️ Tech Stack

### Frontend
- **React** 18.2.0 - Modern UI library
- **Tailwind CSS** 3.x - Utility-first CSS framework
- **Axios** - Promise-based HTTP client
- **React Scripts** - Build tooling

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** 4.18.2 - Web framework
- **Axios** - API requests
- **CORS** - Cross-origin resource sharing

### External API
- **TMDB API** - The Movie Database for movie data

## 📁 Project Structure

```
Movie Finder/
├── backend/
│   ├── routes/
│   │   └── spotify.js      # API routes
│   ├── server.js           # Express server
│   ├── package.json        # Backend dependencies
│   └── .env               # Environment variables
│
├── frontend/
│   ├── public/
│   │   └── index.html      # HTML template
│   ├── src/
│   │   ├── components/
│   │   │   ├── SearchBar.js    # Search component
│   │   │   ├── AlbumList.js    # Movie grid
│   │   │   └── AlbumCard.js    # Movie card
│   │   ├── App.js          # Main component
│   │   ├── index.js        # Entry point
│   │   └── index.css       # Tailwind styles
│   ├── package.json        # Frontend dependencies
│   ├── tailwind.config.js  # Tailwind configuration
│   └── postcss.config.js   # PostCSS configuration
│
└── README.md              # You are here!
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/YOUR_USERNAME/movie-finder.git
cd movie-finder
```

2. **Install Backend Dependencies**
```bash
cd backend
npm install
```

3. **Install Frontend Dependencies**
```bash
cd ../frontend
npm install
```

### Running the Application

1. **Start the Backend Server**
```bash
cd backend
npm start
```
Backend will run on `http://localhost:5000`

2. **Start the Frontend** (in a new terminal)
```bash
cd frontend
npm start
```
Frontend will open automatically at `http://localhost:3000`

## 🎨 Features in Detail

### Search Functionality
- Type any movie title
- Get instant results from TMDB's massive database
- Clean, intuitive search interface

### Movie Cards
- Beautiful card-based layout
- Hover effects with smooth animations
- Movie posters in high quality
- Rating display (⭐)
- Release year information

### Responsive Design
- Mobile-first approach
- Works on phones, tablets, and desktops
- Adaptive grid layout

## 🌐 API Information

This app uses the **TMDB (The Movie Database) API**:
- Free to use
- Millions of movies
- High-quality images
- Regularly updated data

## 🎯 Use Cases

Perfect for:
- Movie enthusiasts looking for information
- Students learning React and API integration
- Portfolio projects
- Quick movie lookups
- Discovering new films

## 🔮 Future Enhancements

- [ ] Add movie trailers
- [ ] Save favorite movies
- [ ] Filter by genre, year, rating
- [ ] TV show search
- [ ] User authentication
- [ ] Watchlist feature

## 📝 Learning Outcomes

This project demonstrates:
- ✅ React Hooks (useState)
- ✅ RESTful API integration
- ✅ Express.js backend
- ✅ Tailwind CSS styling
- ✅ Responsive design
- ✅ Component architecture
- ✅ API error handling
- ✅ Modern JavaScript (ES6+)

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available for educational purposes.

## 🙏 Acknowledgments

- [TMDB](https://www.themoviedb.org/) for the amazing API
- [Tailwind CSS](https://tailwindcss.com/) for the styling framework
- [React](https://react.dev/) for the UI library

## 📧 Contact

Created as a student project - feel free to reach out!

---

<div align="center">

**Made with ❤️ using React, Node.js, and TMDB API**

⭐ Star this repo if you found it helpful!

</div>
- 🖼️ Display album covers and details
- 🎵 Direct links to open albums in Spotify
- ⚡ Fast and easy to use

## 🛠️ Technologies Used

**Frontend:**
- React.js
- CSS3
- Axios for API calls

**Backend:**
- Node.js
- Express.js
- Spotify Web API
- Axios

## 📋 Prerequisites

Before you begin, make sure you have:

- Node.js installed (version 14 or higher)
- A Spotify Developer account
- Spotify API credentials (Client ID and Client Secret)

## 🚀 Getting Started

### 1. Get Spotify API Credentials

1. Go to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Log in with your Spotify account
3. Click "Create an App"
4. Fill in the app name and description
5. Copy your **Client ID** and **Client Secret**

### 2. Setup Backend

```bash
# Navigate to backend folder
cd backend

# Install dependencies
npm install

# Create .env file
copy .env.example .env

# Edit .env file and add your Spotify credentials:
# SPOTIFY_CLIENT_ID=your_client_id_here
# SPOTIFY_CLIENT_SECRET=your_client_secret_here
# PORT=5000

# Start the backend server
npm start
```

The backend server will start on http://localhost:5000

### 3. Setup Frontend

Open a new terminal window:

```bash
# Navigate to frontend folder
cd frontend

# Install dependencies
npm install

# Start the React app
npm start
```

The app will open automatically at http://localhost:3000

## 📱 How to Use

1. Open the app in your browser (http://localhost:3000)
2. Type an artist name or album title in the search bar
3. Click the "Search" button
4. Browse through the results
5. Click on any album card to open it in Spotify

## 📁 Project Structure

```
Album Finder/
├── backend/
│   ├── routes/
│   │   └── spotify.js       # Spotify API routes
│   ├── server.js            # Express server setup
│   ├── package.json         # Backend dependencies
│   ├── .env.example         # Environment variables template
│   └── .gitignore
│
└── frontend/
    ├── public/
    │   └── index.html       # HTML template
    ├── src/
    │   ├── components/
    │   │   ├── SearchBar.js    # Search input component
    │   │   ├── SearchBar.css
    │   │   ├── AlbumList.js    # List of albums
    │   │   ├── AlbumList.css
    │   │   ├── AlbumCard.js    # Individual album card
    │   │   └── AlbumCard.css
    │   ├── App.js              # Main app component
    │   ├── App.css
    │   ├── index.js            # React entry point
    │   └── index.css
    ├── package.json            # Frontend dependencies
    └── .gitignore
```

## 🎯 Key Features Explained

### API Integration
- Uses Spotify Web API to fetch album data
- Implements OAuth 2.0 Client Credentials flow
- Caches access tokens to reduce API calls

### Data Fetching
- Backend handles all Spotify API requests
- Frontend makes simple HTTP requests to backend
- Error handling for failed requests

### UI Logic
- React state management for search results
- Loading states while fetching data
- Responsive grid layout for albums
- Hover effects and smooth animations

## 🔧 Available Scripts

### Backend
- `npm start` - Start the server
- `npm run dev` - Start server with nodemon (auto-restart)

### Frontend
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests

## ⚠️ Important Notes

- Keep your `.env` file private and never commit it to Git
- The Spotify API has rate limits, so avoid making too many requests
- This app requires an internet connection to work
- Album links will only work if you have Spotify installed or use Spotify web

## 🎨 Customization

Feel free to customize:
- Colors in CSS files
- Number of search results (change `limit` in spotify.js)
- Layout and spacing
- Add more features like playlist search, artist details, etc.

## 📝 License

This project is open source and available for educational purposes.

## 🤝 Contributing

This is a student project. Feel free to fork and modify as you like!

## 💡 Learning Points

This project demonstrates:
- Building RESTful APIs with Express
- React component architecture
- API integration and authentication
- State management in React
- Responsive CSS design
- Error handling
- Environment variables for security

---

**Enjoy discovering music! 🎵**

# Movie Finder 🎬

A beautiful movie search application built with React, Node.js, Express, and TMDB API.

## 🚀 Live Demo
- Frontend: [Add your Vercel URL here]
- Backend: [Add your Render URL here]

## ✨ Features
- Search movies by title
- View movie posters, ratings, and release years
- Click to view details on TMDB
- Beautiful responsive UI with Tailwind CSS
- Real-time search results

## 🛠️ Tech Stack

**Frontend:**
- React 18
- Tailwind CSS 3
- Axios

**Backend:**
- Node.js
- Express.js
- TMDB API

## 📦 Installation

### Backend
```bash
cd backend
npm install
npm start
```

### Frontend
```bash
cd frontend
npm install
npm start
```

## 🌐 Deployment

### Deploy Backend to Render
1. Push code to GitHub
2. Go to [render.com](https://render.com)
3. Create new Web Service
4. Connect your GitHub repo
5. Select `backend` folder
6. Build command: `npm install`
7. Start command: `npm start`

### Deploy Frontend to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repo
3. Select `frontend` folder
4. Framework preset: Create React App
5. Add environment variable: `REACT_APP_API_URL=your-render-backend-url`
6. Deploy!

## 📝 Environment Variables

### Backend (.env)
```
PORT=5000
```

### Frontend
Update API URL in SearchBar.js to your deployed backend URL

## 📄 License
Free to use for educational purposes

## 👨‍💻 Author
Built as a student project

---
Made with ❤️ using TMDB API

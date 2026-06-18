# 🎬 Movie Explorer

> A responsive React.js web application that lets users browse, search, and save movies to a personal watchlist — powered by the TVMaze public API.

---

## 📌 Live Demo

https://movie-app-6tto-eight.vercel.app/

---

## 📖 Description

Movie Explorer is a frontend React application that fetches real-time TV show and movie data from the [TVMaze API](https://api.tvmaze.com/shows). Users can browse a dynamic listing of shows, search by name, and manage a personal watchlist — all within a clean, component-based UI built with pure CSS.

This project was built to strengthen core React skills including component architecture, React Router DOM navigation, the Context API for global state management, and responsive layout using CSS Flexbox and Grid.

---

## ✨ Features

- 🎥 **Movie Listing** — Fetches and displays shows from the TVMaze API as visual cards
- 🔍 **Search Functionality** — Filter movies in real time by title
- ❤️ **Watchlist** — Add or remove movies from a personal watchlist using Context API
- 📄 **Watchlist Page** — Dedicated page to view all saved movies
- 🧭 **Navbar Navigation** — Smooth navigation between pages using React Router DOM
- 🧩 **Component-Based Architecture** — Clean, reusable components for maintainability

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React.js | UI library and component architecture |
| JavaScript (ES6+) | Core programming language |
| React Router DOM | Client-side page navigation |
| Context API | Global state management for watchlist |
| CSS (Flexbox + Grid) | Responsive layout and styling |
| TVMaze API | Movie and TV show data source |

---

## 🌐 API Used

**TVMaze Public API**

```
Base URL: https://api.tvmaze.com/shows
```

- No API key required
- Returns a list of TV shows with details including name, image, summary, genres, and ratings
- Documentation: [tvmaze.com/api](https://www.tvmaze.com/api)

---

## 📁 Project Structure

```
movie-explorer/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation bar with links
│   │   └── MovieCard.jsx       # Individual movie card component
│   │
│   ├── context/
│   │   └── WatchlistContext.jsx # Context API for watchlist state
│   │
│   ├── pages/
│   │   └── Watchlist.jsx       # Watchlist page displaying saved movies
│   │
│   ├── App.jsx                 # Main app — fetches API data, renders movie grid, handles search
│   ├── App.css                 # Global and component styles
│   └── index.js                # React DOM entry point
│
├── .gitignore
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

Follow these steps to run the project locally:

**1. Clone the repository**

```bash
git clone https://github.com/nipuninduwaraedu/movie-app.git
```

**2. Navigate into the project directory**

```bash
cd movie-explorer
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm start
```

**5. Open in browser**

```
http://localhost:5173/
```

> No `.env` file or API key is required — TVMaze is a free, open public API.

---

## 🧠 What I Learned

- How to **fetch data from a public REST API** using `useEffect` and `fetch` inside React
- How to implement **real-time search filtering** using controlled components and `useState`
- How to use the **Context API** to manage and share global state (watchlist) across multiple components without prop drilling
- How to structure a **multi-page React application** using React Router DOM (`<BrowserRouter>`, `<Routes>`, `<Route>`, `<Link>`)
- How to build a **responsive UI** using only CSS Flexbox and Grid — no external UI libraries
- How to design a clean, **component-based architecture** for scalable frontend development

---

## 🚀 Future Improvements

- [ ] Add **pagination or infinite scroll** for large movie lists
- [ ] Implement **movie detail modal or page** with full show information
- [ ] Add **genre-based filtering** alongside search
- [ ] Persist the watchlist using **localStorage** so it survives page refreshes
- [ ] Add **loading skeletons** for a better user experience during API fetch
- [ ] Improve **accessibility** with ARIA labels and keyboard navigation support

---

## 👤 Author

**Nipun Induwara**


---

_⭐ If you found this project useful or interesting, feel free to give it a star!_

# 🎬 Movie Explorer — Desktop Version

> A desktop application built with Electron.js, wrapping the Movie Explorer React web app into a native desktop experience for Windows and macOS.

---

## 📌 About This Project

Movie Explorer Desktop is the **Electron-powered desktop version** of my original Movie Explorer web app. It packages the full React.js frontend — including live TV show browsing, real-time search, and a personal watchlist — into a standalone desktop application that runs natively on Windows (`.exe`) and macOS (`.dmg`), with no browser required.

### 🔗 Original Web Version

This project was cloned and upgraded from the original web repo:
👉 [Movie Explorer Web](https://github.com/nipuninduwaraedu/movie-app.git)

The full React frontend is preserved as-is. Electron wraps it inside a native desktop window using its Chromium runtime, so everything that works in the browser works identically on the desktop.

---

## ✨ Features

### 🖥️ Desktop Features (Electron)
- Runs as a standalone native app — no browser needed
- Native window controls (minimize, maximize, close)
- Cross-platform support: Windows (`.exe`)
- Packaged and distributed using `electron-builder`

### 🎥 App Features (from Web Version)
- Browse TV shows and movies fetched live from the TVMaze API
- Real-time search
- Add and remove titles from a personal watchlist
- Dedicated Watchlist page for all saved shows
- Responsive UI built with pure CSS 

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Electron.js | Desktop app shell and native window |
| React.js | UI component library |
| JavaScript (ES6+) | Core programming language |
| React Context API | Global watchlist state management |
| CSS (Flexbox + Grid) | Responsive layout and styling |
| TVMaze API | Live TV show and movie data |
| electron-builder | Packaging app for Windows and macOS |

---

## 🌐 API Used

**TVMaze Public API** — free, no API key required.

```
Base URL: https://api.tvmaze.com

Documentation: [tvmaze.com/api](https://www.tvmaze.com/api)

---

## 📁 Project Structure

```
Movie_Explorer_Desktop/
│
└── client/
    ├── dist/
    ├── dist_electron/
    ├── electron/
    │   └── main.js
    ├── node_modules/
    ├── public/
    ├── src/
    │   ├── components/
    │   │   ├── MovieCard.jsx
    │   │   └── Navbar.jsx
    │   ├── context/
    │   │   └── WatchvistContext.jsx
    │   ├── pages/
    │   │   └── Watchlist.jsx
    │   ├── Styles/
    │   ├── App.css
    │   ├── App.jsx
    │   └── main.jsx
    ├── .gitignore
    └── eslint.config.js
```


---

## ⚙️ Installation & Setup

> Requires **Node.js v16+** and **npm** installed on your machine.

```bash
# 1. Clone the repository
git clone https://github.com/nipuninduwaraedu/movie-explorer-desktop.git

# 2. Navigate into the project directory
cd movie-explorer-desktop

# 3. Install dependencies
npm install

# 4. Start the app in development mode
npm start
```

This will launch the Electron desktop window with the React app running inside it.

---

## 📦 Build & Package

To package the app as a distributable for your platform:

```bash
# Build the React frontend first
npm run build

# Package with electron-builder
npm run dist
```

Output files will appear in the `/dist` folder:

| Platform | Output File |
|---|---|
| Windows | `Movie Explorer Setup.exe` |
| macOS | `Movie Explorer.dmg` |


---

## 🖥️ How Electron Works in This Project

Electron has two core processes:

- **Main Process** (`main.js`) — runs in Node.js, creates the native `BrowserWindow`, and controls the app lifecycle (open, close, quit)
- **Renderer Process** — the React app loaded inside the window, running just like in a browser

```js
// main.js (simplified)
const { app, BrowserWindow } = require('electron');

app.whenReady().then(() => {
  const win = new BrowserWindow({ width: 1200, height: 800 });
  win.loadURL('http://localhost:3000'); // dev
  // win.loadFile('build/index.html'); // production
});
```

The React code requires **no changes** — Electron's built-in Chromium renders it exactly as a browser would.

---

## 🧠 What I Learned

- How **Electron.js** bridges web technologies with native desktop capabilities using its main/renderer process model
- How to configure `electron-builder` to produce installable packages for **Windows and macOS**
- How to load a React app inside an Electron `BrowserWindow` in both **development and production modes**
- How to manage the **app lifecycle** (ready, window-all-closed, activate) across different operating systems
- The difference between **web deployment** (Vercel) and **desktop distribution** (packaged installers)
- How the same React codebase — including **Context API**, **React Router**, and **CSS layout** — runs identically inside a desktop shell

---

## 🔮 Future Improvements

- [ ] Add **system tray support** so the app runs in the background
- [ ] Persist watchlist with **localStorage** or an **SQLite database** (via better-sqlite3)
- [ ] Add **auto-updater** so the app updates itself when a new version is released
- [ ] Implement **offline support** by caching API responses locally
- [ ] Add **keyboard shortcuts** for common actions (search focus, close window)
- [ ] Add a **dark / light theme toggle**
- [ ] Set up **GitHub Actions** for automated cross-platform builds and releases

---

## 👤 Author

**Nipun Induwara**

- GitHub: [@nipuninduwaraedu](https://github.com/nipuninduwaraedu)

---

_⭐ If you found this project useful or interesting, feel free to give it a star!_

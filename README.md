# Rahul Kumar — Portfolio Website

A full-stack MERN portfolio with React (Vite), Tailwind CSS, Framer Motion, Node.js, Express, and MongoDB.

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v18+)
- MongoDB running locally **OR** a MongoDB Atlas URI

---

### 1. Start the Backend

```bash
cd server
npm install
cp .env.example .env
# Edit .env and set your MONGODB_URI if using Atlas
npm run dev
```

Server runs at: `http://localhost:5000`

---

### 2. Start the Frontend

```bash
cd client
npm install
npm run dev
```

Frontend runs at: `http://localhost:5173`

> The Vite dev server automatically proxies `/api/*` requests to the Express backend — no CORS setup needed.

---

## 📁 Folder Structure

```
portfolio/
├── client/                   # React + Vite frontend
│   ├── src/
│   │   ├── components/       # All UI components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── ScrollToTop.jsx
│   │   ├── context/
│   │   │   └── ThemeContext.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── package.json
│
└── server/                   # Express MVC backend
    ├── controllers/
    │   ├── projectController.js
    │   └── contactController.js
    ├── models/
    │   ├── Project.js
    │   └── Contact.js
    ├── routes/
    │   ├── projects.js
    │   └── contact.js
    ├── config/
    │   └── seed.js           # Auto-seeds projects on first run
    ├── index.js
    ├── .env.example
    └── package.json
```

---

## 🔗 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/projects` | Get all projects |
| GET | `/api/projects/:id` | Get single project |
| POST | `/api/contact` | Submit contact form |
| GET | `/api/health` | Server health check |

---

## 🌐 Deployment

**Frontend → Vercel/Netlify**
```bash
cd client && npm run build
# Deploy the dist/ folder
```

**Backend → Render/Railway**
- Set `MONGODB_URI` environment variable to your Atlas URI
- Set `CLIENT_URL` to your frontend domain

---

## ✨ Features

- Dark / Light mode toggle (persisted in localStorage)
- Fully responsive — mobile + desktop
- Smooth Framer Motion animations
- Projects loaded from MongoDB (falls back to static data if API is down)
- Contact form saves messages to MongoDB
- Scroll-to-top button
- Sticky glass navbar

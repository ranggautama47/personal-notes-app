# MindNote — Personal Notes App

A personal notes web application built with React. Originally created as a final submission for the **Belajar Membuat Aplikasi Web dengan React untuk Pemula** course on Dicoding.

**Grade: Advanced / ⭐⭐⭐⭐⭐ (5 Stars)**
**Certificate: [View Certificate](https://www.dicoding.com/certificates/JMZVOJV53XN9)**

> **Phase 2 — Portfolio Redesign** is live on branch `phase2-redesign`.
> The original submission is preserved on `main`.

---

## Screenshots

> _Screenshots from Phase 2 visual redesign (branch: `phase2-redesign`)_

| Dashboard — Active Notes | Archive View |
|---|---|
| ![Dashboard](/screenshots/dashboard.png) | ![Archive](/screenshots/archive.png) |

| Settings Page | Dark Mode |
|---|---|
| ![Settings](/screenshots/settings.png) | ![Dark Mode](/screenshots/darkmode.png) |

---

## Tech Stack

### Core
![React](https://img.shields.io/badge/React_18-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

### Styling (Phase 2)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

### Icons & Fonts
![Lucide](https://img.shields.io/badge/Lucide_React-F56040?style=for-the-badge&logo=lucide&logoColor=white)

- **Font**: Plus Jakarta Sans (Google Fonts)
- **Icons**: Lucide React

---

## Features

### Phase 1 — Core Functionality (Dicoding Submission)
- Add new notes with title and body
- Delete notes
- Archive and unarchive notes
- Real-time search (case-insensitive)
- Search keyword highlight in title and body
- Notes grouped by month and year
- Title character limit: 50 characters (via state)
- Body minimum validation: 10 characters
- Two separate sections: Active Notes & Archive

### Phase 2 — Visual Redesign (Portfolio)
- **Sidebar layout** — fixed 240px sidebar with logo, search, navigation, and user profile
- **Top navbar** — tab filter (All / Active / Archive) + inline search toggle + dropdown menu
- **View toggle** — switch between grid and list layout
- **Dark mode** — full dark mode support with separate `darkmode.css`, persists via localStorage
- **Settings page** — profile editor (name + email), font size selector (3 options), Privacy Policy modal, Support mailto link
- **Earthy warm design** — custom color palette (`#F5EFE6`, `#A0522D`, `#EDE0D4`)
- **Responsive** — sidebar hidden on mobile, TopNavbar takes over

---

## Getting Started

```bash
# Clone the repository
git clone https://github.com/your-username/personal-notes-app.git

# Navigate to project directory
cd personal-notes-app

# Switch to Phase 2 branch
git checkout phase2-redesign

# Install dependencies
npm install

# Run development server
npm run dev
```

Open `http://localhost:5173`

---

## Project Structure

```
src/
├── components/
│   ├── App.jsx               # Main state, all handlers
│   ├── NoteInput.jsx         # Add note form — hero layout (sun / form / donut)
│   ├── NoteItem.jsx          # Single note card + highlightText
│   ├── NotesList.jsx         # Notes list + month-year grouping
│   ├── NoteSearch.jsx        # Search component
│   ├── NoteActionButton.jsx  # Reusable action button (delete/archive) with Lucide icons
│   ├── Sidebar.jsx           # Main navigation + search + user profile
│   ├── TopNavbar.jsx         # Tab filter + search toggle + dropdown menu
│   ├── TipsCard.jsx          # View toggle (grid/list) + illustration
│   ├── HeroBanner.jsx        # Empty state banner
│   ├── Footer.jsx            # Copyright footer
│   ├── Pengaturan.jsx        # Settings page
│   └── ui/                   # shadcn/ui base components
├── styles/
│   ├── style.css             # Global styles + earthy palette
│   ├── darkmode.css          # Dark mode overrides (class-based)
│   └── variables.css         # CSS custom properties
├── lib/
│   └── utils.js              # shadcn/ui utilities
├── utils/
│   └── index.js              # getInitialData, showFormattedDate
└── index.jsx
public/
└── icons/
    ├── iconBrand.png
    ├── logoIcon_sidebar.png
    ├── matahari.png
    ├── donat.png
    └── catatan.png
```

---

## Branch Strategy

| Branch | Purpose |
|---|---|
| `main` | Phase 1 — original Dicoding submission (locked) |
| `phase2-redesign` | Phase 2 — full visual redesign for portfolio |

---

## Roadmap

- [x] Sidebar layout
- [x] Dark mode
- [x] Settings page
- [x] View toggle (grid/list)
- [x] Tailwind CSS + shadcn/ui integration
- [x] Confirm dialog on note delete
- [x] Toast notifications after actions
- [x] Deploy to Netlify

---

## Author

**Rangga Utama**
Built as part of the Dicoding Frontend & React learning track.
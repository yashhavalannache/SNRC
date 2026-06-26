# 🇯🇵 SNRC — Japanese Language Centre

> **Bangalore's #1 Japanese Language Institute since Est. 2000.**  
> A fully responsive, multilingual single-page website built with React 19, Vite 8, and Tailwind CSS v4.

---

## ✨ Features

- 🌐 **Multilingual Support** — English, 日本語 (Japanese), and ಕನ್ನಡ (Kannada), powered by `react-i18next`. Language choice persists across sessions via `localStorage`.
- 🎨 **Premium Design** — Tailwind CSS v4 with a Japanese-inspired palette (cherry red, warm cream), glassmorphism Navbar, and Framer Motion scroll-reveal animations.
- 📱 **Fully Responsive** — Optimised for all screen sizes: mobile (360px) → tablet → desktop (1920px+).
- ⚡ **Blazing Fast** — Vite 8 build pipeline with tree-shaking and gzip compression.
- ♿ **Accessible** — Semantic HTML5, unique IDs on all interactive elements, and ARIA labels on navigation buttons.

---

## 🗂️ Project Structure

```
snrc-project/
├── public/
│   ├── favicon.svg          # Browser tab icon
│   └── icons.svg            # SVG sprite sheet
├── src/
│   ├── assets/              # Static image assets
│   │   ├── cherry-blossom.png
│   │   ├── hero-bg.jpg
│   │   ├── japan-map.png
│   │   ├── japan-student.png
│   │   └── mount-fuji.png
│   ├── components/          # All React page sections
│   │   ├── Navbar.jsx       # Sticky glassmorphic nav + language switcher
│   │   ├── Hero.jsx         # Hero with JLPT cards + CTA buttons
│   │   ├── About.jsx        # SNRC history & key highlights
│   │   ├── TrustSection.jsx # Animated stats counters
│   │   ├── Services.jsx     # 6-card services grid
│   │   ├── WhyJapanese.jsx  # 6 career/life benefit cards
│   │   ├── Testimonials.jsx # Swipeable student review carousel
│   │   ├── Clients.jsx      # Corporate client showcase
│   │   ├── Contact.jsx      # Contact form + Google Maps embed
│   │   ├── Footer.jsx       # Links, socials, copyright
│   │   └── Reveal.jsx       # Framer Motion scroll-reveal wrapper
│   ├── locales/             # i18next translation files
│   │   ├── en.json          # English
│   │   ├── ja.json          # Japanese
│   │   └── kn.json          # Kannada
│   ├── App.jsx              # Root component — section layout
│   ├── i18n.js              # react-i18next initialisation
│   ├── index.css            # Tailwind v4 directives + @theme tokens
│   └── main.jsx             # App entry point
├── index.html               # HTML shell with SEO meta tags
├── vite.config.js           # Vite + Tailwind + React plugins
├── package.json
└── .oxlintrc.json           # Linter configuration
```

---

## 🛠️ Tech Stack

| Category         | Technology                          |
|------------------|-------------------------------------|
| Framework        | React 19                            |
| Build Tool       | Vite 8                              |
| Styling          | Tailwind CSS v4 (`@tailwindcss/vite`) |
| Animations       | Framer Motion                       |
| Internationalisation | react-i18next + i18next         |
| Icons            | react-icons (Font Awesome 5)        |
| Scroll Detection | react-intersection-observer         |
| Linter           | oxlint                              |

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** ≥ 18
- **npm** ≥ 9

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Dev Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.  
The page hot-reloads on every file save.

### 3. Build for Production
```bash
npm run build
```
Compiles optimised, gzip-ready assets into the `dist/` folder.

### 4. Preview Production Build Locally
```bash
npm run preview
```
Serves the `dist/` folder at [http://localhost:4173](http://localhost:4173).

### 5. Run Linter
```bash
npm run lint
```
Uses `oxlint` to scan all source files for code quality issues.

---

## 🌐 Internationalisation

Language files live in `src/locales/`. Each key maps to a section namespace:

```
en.json / ja.json / kn.json
├── navbar.*
├── hero.*
├── about.*
├── services.*
├── whyJapanese.*
├── trust.*
├── testimonials.*
├── clients.*
├── contact.*
└── footer.*
```

To **add a new language**:
1. Create `src/locales/<code>.json` mirroring the structure of `en.json`.
2. Import and register it in `src/i18n.js` under `resources`.
3. Add an `<option>` to the language `<select>` in `Navbar.jsx`.

---


## 📝 SEO

`index.html` includes:
- Unique `<title>` and `<meta name="description">`
- Open Graph tags (`og:title`, `og:description`, `og:type`)
- Twitter Card meta tags

---

## 📄 License

© 2026 SNRC Japanese Language Centre. All rights reserved.
# SNRC

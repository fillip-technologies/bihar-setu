# AGENTS.md — Bihar Setu Engineering & Architecture Guide

Welcome to the **Bihar Setu** project guidelines. This document serves as the single source of truth for AI agents and developers building and maintaining this frontend application.

---

## 1. Project Overview & Identity

- **Project Name**: Bihar Setu (बिहार सेतु - जन-जन का डिजिटल प्रवेशद्वार)
- **Nature**: Pure Frontend Web Application (High-performance, modern, civic-tech platform)
- **Core Mission**: Connect the citizens of Bihar with transparent governance, public welfare schemes, digital certificates, grievance redressal, and statewide developmental tracking across all 38 districts.
- **Tech Stack**:
  - **Core Framework**: React 19 (Vite 8)
  - **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`) + Centralized Design Tokens
  - **Routing**: React Router DOM v7 (`BrowserRouter`, `Routes`, `Route`, `Link`, `NavLink`)
  - **Icons**: Lucide React
  - **Linting & Standards**: ESLint 10 (Flat Config)

---

## 2. Production Folder Structure

This project follows an industry-standard, feature-modular, pure-frontend folder structure.

```
bihar-setu/
├── AGENTS.md                          # Single source of architectural guidelines & rules
├── eslint.config.js                   # Flat ESLint 10 configuration
├── index.html                         # HTML entry with Google Fonts & SEO meta
├── package.json                       # Dependencies & scripts
├── vite.config.js                     # Vite build configuration with Tailwind plugin
│
├── public/                            # Static public assets (favicons, banners)
│
└── src/
    ├── assets/                        # Static local media
    │   ├── icons/                     # Custom SVGs & badges
    │   ├── images/                    # Brand logos, emblem, hero graphics
    │   └── patterns/                  # Subtle cultural/geometric background textures
    │
    ├── shared/                        # Global shared layout components (outside components)
    │   ├── Navbar.jsx                 # Main navigation header (using NavLink / Link)
    │   ├── Footer.jsx                 # Site-wide footer with quick links & branding
    │   └── MobileNav.jsx              # Mobile drawer menu navigation
    │
    ├── components/                    # Component hierarchy
    │   ├── ui/                        # Low-level reusable UI primitives (atomic components)
    │   │   ├── Button.jsx             # Primary, secondary, outline, ghost buttons
    │   │   ├── Badge.jsx              # Status badges, tags, pill indicators
    │   │   ├── Card.jsx               # Surface card wrapper with hover elevations
    │   │   ├── Input.jsx              # Accessible form inputs
    │   │   └── Modal.jsx              # Dialogs and overlay modals
    │   │
    │   ├── home/                      # Homepage module
    │   │   ├── HomePage.jsx           # Main wrapper aggregating all homepage section components
    │   │   └── components/            # Sections specific to the home page
    │   │       ├── Hero.jsx           # Complete self-contained Hero section
    │   │       ├── FocusAreas.jsx     # Key focus areas component
    │   │       └── Initiatives.jsx    # Initiatives overview component
    │   │
    │   ├── features/                  # Features section module (encapsulated)
    │   │   ├── index.jsx              # Section wrapper
    │   │   └── components/            # FeatureCard, FeatureFilter, FeatureGrid
    │   │
    │   ├── schemes/                   # Schemes section module (encapsulated)
    │   │   ├── index.jsx              # Section wrapper
    │   │   └── components/            # SchemeCard, CategoryPills
    │   │
    │   └── districts/                 # District tracker module (encapsulated)
    │       ├── index.jsx              # Section wrapper
    │       └── components/            # DistrictSelector, DistrictModal
    │
    ├── data/                          # Single source of truth for mock & static data
    │   ├── navigation.js              # Navbar and Footer link structures & actions
    │   ├── heroData.js                # Hero copies, statistics counters, CTA config
    │   ├── schemesData.js             # Welfare schemes, eligibility, and category tags
    │   ├── districtsData.js           # 38 Bihar districts metadata & helpline info
    │   └── featuresData.js            # Key platform capabilities & service modules
    │
    ├── hooks/                         # Reusable custom React hooks
    │   ├── useScrollPosition.js       # Track scroll state for sticky headers & blur effects
    │   ├── useWindowSize.js           # Responsive layout hook
    │   └── useDebounce.js             # Search and input debounce helper
    │
    ├── layouts/                       # Layout shells
    │   └── RootLayout.jsx             # Shell rendering Shared/Navbar, <Outlet /> / children, Shared/Footer
    │
    ├── pages/                         # Route-level page components
    │   ├── Home/
    │   │   └── index.jsx              # Landing page aggregating Hero, Features, Schemes, etc.
    │   ├── Schemes/
    │   │   └── index.jsx              # Full schemes catalog with filters & search
    │   ├── Grievance/
    │   │   └── index.jsx              # Civic grievance submission & tracking simulator
    │   ├── About/
    │   │   └── index.jsx              # Vision, history, milestones, and district reach
    │   └── NotFound/
    │       └── index.jsx              # Modern 404 page with return-home navigation
    │
    ├── routes/                        # Centralized routing definitions
    │   └── AppRoutes.jsx              # Route tree using React Router DOM
    │
    ├── styles/                        # Design tokens & styling
    │   └── theme.js                   # Master Colors, Typography, Gradients, and Breakpoints
    │
    ├── utils/                         # Pure utility functions
    │   ├── cn.js                      # Class names merging utility
    │   └── formatters.js              # Numbers, dates, and currency formatting helpers
    │
    ├── App.jsx                        # App entry point with BrowserRouter & RootLayout
    ├── index.css                      # Tailwind CSS v4 directives & master token mappings
    └── main.jsx                       # React DOM root render
```

---

## 3. Design System: Master Colors & Fonts in One Place

To maintain visual harmony, prevent color drift, and ensure theme consistency, **all master colors and fonts must be defined in `src/styles/theme.js`** and mapped directly into `src/index.css`.

### Master Color Palette

| Token Key | CSS Variable / Hex | Semantic Meaning |
| :--- | :--- | :--- |
| `primary.base` / `primary.forest` | `#17382E` | **Pine Spruce / Deep Forest Green**: Primary brand color, CTA buttons, active indicators |
| `primary.hover` | `#112B23` | Hover states for primary action buttons |
| `primary.navy` | `#0B192C` | Authority, official state trust, deep header/card backgrounds |
| `primary.navyLight` | `#1E3E62` | Subtle borders, elevated surface hover states |
| `accent.saffron` | `#F97316` | **Pragati Saffron**: Energy, action, cultural significance |
| `accent.saffronHover` | `#EA580C` | Active/hover states for primary action buttons |
| `accent.gold` | `#F59E0B` | Secondary warm badge and milestone highlights |
| `accent.gangaCyan` | `#06B6D4` | **Ganga Cyan**: Modern digital bridge, flow, connectivity |
| `accent.teal` | `#0D9488` | Verification checkmarks, security, and stability |
| `surface.dark` | `#050811` | Canvas base background (sleek high-contrast civic dark mode) |
| `surface.card` | `#0E1626` | Content cards, modal panels, drop-downs |
| `surface.border` | `#1E293B` | Structural boundary lines and dividers |
| `text.primary` | `#F8FAFC` | High-emphasis titles, headlines, critical text |
| `text.secondary` | `#94A3B8` | Body copy, descriptions, captions, labels |
| `status.success` | `#10B981` | Approved statuses, active services |
| `status.warning` | `#F59E0B` | In-review applications, scheduled maintenance |
| `status.danger` | `#EF4444` | High-priority grievances, errors, overdue alerts |

### Typography System

- **Primary UI Font (English)**: `'Plus Jakarta Sans', system-ui, sans-serif`
  - Clean geometric sans-serif that maintains sharp legibility on all mobile screens.
- **Bilingual / Regional Font (Hindi / Devanagari)**: `'Noto Sans Devanagari', sans-serif`
  - High-clarity rendering for Hindi state mottos, local terminology, and bilingual toggles.

### Single Source of Truth Rule:
- **Never hardcode arbitrary hex codes** (e.g., `#123456`) directly across scattered JSX files.
- Always use the semantic theme classes derived from `theme.js` and `index.css` (e.g., `bg-navy`, `text-saffron`, `border-surface-border`, `text-ganga-cyan`).

---

## 4. Routing & Navigation Rules

1. **Always Use React Router DOM**:
   - Internal links must **always** use `<Link to="...">` or `<NavLink to="...">` from `react-router-dom`.
   - Never use raw `<a href="/...">` for internal page navigation.
   - Use `<a href="..." target="_blank" rel="noopener noreferrer">` exclusively for external government portals (e.g. state or national links).
2. **Active State Indication**:
   - Nav links in `Navbar` must visibly indicate the active page using `NavLink`'s `isActive` callback.
3. **Deep Linking & 404 Guard**:
   - Every route must be registered in `src/routes/AppRoutes.jsx`.
   - Any unknown path must fall back to the `NotFound` page (`path="*"`).

---

## 5. Component Construction Rules

1. **Encapsulation by Section / Feature**:
   - Large sections (such as Hero, Features, Schemes) must have their own folder in `src/components/<section>/`.
   - Internal subcomponents belong in `src/components/<section>/components/`.
   - The top-level component (`src/components/<section>/index.jsx`) wraps and coordinates the subcomponents, passing data from `src/data/<section>Data.js`.
2. **Shared Layout Components in `src/shared/`**:
   - `Navbar.jsx`, `Footer.jsx`, and global navigation dialogs belong directly in `src/shared/` (outside `components/`).
3. **Data-Driven UI**:
   - Components should not hardcode lists of links, stats, or features in JSX.
   - Keep datasets clean and structured inside `src/data/` (e.g., `heroData.js`, `navigation.js`).
4. **Clean Code & Linting**:
   - Zero unused imports or variables (must pass `npm run lint` cleanly at all times).
   - Use functional components with standard React 19 hooks.
   - Ensure semantic HTML (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<h1>`-`<h6>`).

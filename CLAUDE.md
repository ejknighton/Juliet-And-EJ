# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based wedding website for a June 27th, 2026 wedding in June Lake, CA. The site is built with Vite, React Router, and Material-UI (MUI), featuring a custom design with nature-inspired colors derived from engagement photos.

## Development Commands

```bash
# Install dependencies
npm install

# Start dev server (default Vite port 5173)
npm run dev

# Build for production
npm run build
# Note: prebuild script adds VITE_BUILD_ID to .env.production.local
# postbuild copies index.html to 404.html for client-side routing

# Preview production build
npm run preview

# Deploy to GitHub Pages
npm run deploy
# Note: predeploy runs build automatically

# Lint code
npx eslint .
```

## Architecture

### Routing
- Uses HashRouter for GitHub Pages compatibility (client-side routing)
- All routes defined in `src/App.tsx`
- Page components located in `src/pages/`
- Fallback route redirects to Home

### Theming & Design System
The custom theme (`src/theme.ts`) defines:
- **Custom color palette**: Extended MUI palette with `ochre`, `taupe`, `rose`, and `sky` colors derived from engagement photos
- **Typography**: Fraunces Variable (serif) for headings, Inter Variable (sans-serif) for body text
- **Colors**: Deep forest greens, warm ochres, dusty rose, and sky blue tones
- Theme is applied globally via MUI ThemeProvider in App.tsx

When working with colors, reference the custom palette extensions or use the predefined `colors` object from theme.ts.

### Component Architecture
- **NavBar**: Responsive navigation with desktop horizontal layout and mobile hamburger drawer
- **HeroSlider**: react-slick based image carousel with customizable aspect ratio, autoplay (respects prefers-reduced-motion), and custom arrow styling
- **BeigeFooterBand**: Shared footer component
- **LeafCorner**: Decorative component for page aesthetics

### Data Management
- Static JSON data files in `src/data/` (e.g., hotels.json for travel accommodations)
- Images stored in `src/assets/photos/` with subdirectories for organization

### Path Aliasing
- `@assets` maps to `src/assets/` (configured in both vite.config.ts and tsconfig.json)
- Use `@assets/photos/image.jpg` instead of relative paths when importing from assets

### Build Configuration
- Vite uses fs module to read package.json at build time
- Defines global constants: `__APP_VERSION__` and `__BUILD_TIME__`
- Custom 404.html handling for SPA routing on GitHub Pages

## File Extensions & Imports
- TypeScript components use `.tsx` extension
- JavaScript components use `.jsx` extension (some legacy files)
- When importing `.jsx` components from `.tsx`, include `.jsx` extension explicitly (see App.tsx imports)
- When importing TypeScript files, omit extensions (`.ts`/`.tsx`)

## Styling Patterns
- MUI's `sx` prop is the primary styling method
- Theme values accessed via `theme.palette.*`, `theme.spacing()`, etc.
- Custom palette colors: `theme.palette.ochre.main`, `theme.palette.taupe.main`, `theme.palette.rose.main`, `theme.palette.sky.main`
- Responsive breakpoints: `{ xs: value, sm: value, md: value, lg: value }`

## Outstanding TODOs (from README)
- Restrict push access to deployed branch
- Add cache busting (currently handled by VITE_BUILD_ID in prebuild script)

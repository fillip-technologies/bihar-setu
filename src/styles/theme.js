/**
 * Master Design System Tokens: Colors, Typography & Shadows
 * Single source of truth for Bihar Setu (Derived directly from the official logo)
 */

export const theme = {
  colors: {
    // Primary Brand: Royal Mahogany (exact shade extracted from "BIHAR" text and Bodhi tree in logo)
    primary: {
      base: '#370C01',
      hover: '#260800',
      dark: '#1A0500',
      light: '#4F1707',
      mahogany: '#370C01',
      forest: '#370C01', // backwards-compatible alias
      forestLight: '#4F1707',
      forestDark: '#1A0500',
      navy: '#190904', // Deep mahogany surface
      navyLight: '#2D140A',
      navyDark: '#100502',
      navyGlass: 'rgba(25, 9, 4, 0.85)',
    },
    // Accent: Heritage Gold & Amber (extracted from "SETU", Bodhi leaves, bridge & sun in logo)
    accent: {
      gold: '#C38B34',
      goldHover: '#AF7625',
      goldLight: '#E0A34B',
      goldWarm: '#D97706',
      saffron: '#D97706',
      saffronHover: '#B45309',
      gangaCyan: '#06B6D4',
      teal: '#0D9488',
    },
    // Dark Surfaces (Footer, Dark cards & dialogs)
    surface: {
      dark: '#100502',
      card: '#1D0A04',
      cardHover: '#2A1108',
      border: '#2E150B',
      glassBorder: 'rgba(195, 139, 52, 0.15)',
    },
    // Text Hierarchy
    text: {
      primary: '#FDFBF7',
      secondary: '#C7B5A7',
      muted: '#957F71',
      gold: '#C38B34',
      dark: '#231515', // Rich espresso ink from logo tagline
    },
    // Light Civic Canvas (Warm Heritage Parchment/Ivory from user sample)
    light: {
      ivory: '#FAF6EE',
      ivoryDeep: '#F2EADD',
      ink: '#231515', // Rich espresso ink from logo tagline
      inkSoft: '#5C443C',
      inkMuted: '#8A7268',
      terracotta: '#A84E1A',
      heritage: '#C38B34',
      heritageInk: '#7A3F16',
    },
    // Status Feedback
    status: {
      success: '#10B981',
      warning: '#F59E0B',
      danger: '#EF4444',
    },
  },
  fonts: {
    primary: "'Plus Jakarta Sans', system-ui, sans-serif",
    display: "'Lora', Georgia, serif",
    outfit: "'Outfit', sans-serif",
    bilingual: "'Noto Sans Devanagari', sans-serif",
  },
}

export default theme


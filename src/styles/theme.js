/**
 * Master Design System Tokens: Colors, Typography & Shadows
 * Single source of truth for Bihar Setu (AGENTS.md guideline)
 */

export const theme = {
  colors: {
    primary: {
      base: '#17382E',
      hover: '#112B23',
      dark: '#0B1E18',
      light: '#235243',
      forest: '#17382E',
      forestLight: '#235243',
      forestDark: '#0B1E18',
      navy: '#0B192C',
      navyLight: '#1E3E62',
      navyDark: '#050B14',
      navyGlass: 'rgba(11, 25, 44, 0.75)',
    },
    accent: {
      saffron: '#F97316',
      saffronHover: '#EA580C',
      gold: '#F59E0B',
      goldHover: '#D97706',
      goldWarm: '#F5A623',
      gangaCyan: '#06B6D4',
      teal: '#0D9488',
    },
    surface: {
      dark: '#050811',
      card: '#0E1626',
      cardHover: '#131F35',
      border: '#1E293B',
      glassBorder: 'rgba(255, 255, 255, 0.08)',
    },
    text: {
      primary: '#F8FAFC',
      secondary: '#94A3B8',
      muted: '#64748B',
      gold: '#F5A623',
      dark: '#0B192C',
    },
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


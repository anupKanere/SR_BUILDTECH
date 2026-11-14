/**
 * SR BUILDTEC - Design Tokens
 * 
 * Aesthetic Direction: Warm, light, editorial construction and engineering portfolio.
 * Replaces high-contrast navy/slate and orange with organic architectural tones:
 * Sand/Stone, Deep Forest Green, and Muted Architectural Brass.
 */

export const designTokens = {
  palette: {
    // Light Mode (Default)
    light: {
      background: '#F4F0E8', // Warm sand / raw limestone
      backgroundSubtle: '#EDE8DE', // Slightly darker sand for subtle contrast
      surface: '#FFFFFF', // Clean architectural white for cards & elevated panels
      surfaceMuted: '#EAE4D8', // Warm linen stone
      borderHairline: '#DDD6C8', // 1px architectural drawing rule
      borderStrong: '#C8BEAE',
      
      textPrimary: '#1F3A2E', // Deep forest green - grounding, editorial readability
      textSecondary: '#3D5447', // Muted forest
      textMuted: '#6C7E73', // Caption & timestamp tone
      textInverted: '#FAF7F2',
      
      accent: '#B08D57', // Muted brass / raw brass hardware
      accentHover: '#C5A36E', // Warm brass highlight
      accentSubtle: '#F3EDE2', // Very soft brass wash
      accentBorder: '#D8C3A0',
    },
    // Dark Mode Variants
    dark: {
      background: '#13241C', // Deep forest bedrock
      backgroundSubtle: '#182C22',
      surface: '#1B3127', // Forest slate panel
      surfaceMuted: '#243E32', // Elevated forest surface
      borderHairline: '#2E4C3E', // Subtle green rule
      borderStrong: '#3F6452',
      
      textPrimary: '#F4F0E8', // Sand text on dark bedrock
      textSecondary: '#C8D5CE', // Muted sage
      textMuted: '#8BA194',
      textInverted: '#13241C',
      
      accent: '#C5A36E', // Luminous brass
      accentHover: '#D4B889',
      accentSubtle: '#1E3529',
      accentBorder: '#8C7247',
    },
  },
  
  typography: {
    fonts: {
      heading: 'var(--font-serif)', // Cormorant Garamond / Fraunces (sentence-case, editorial)
      body: 'var(--font-sans)', // Manrope / DM Sans (clean, rational)
      mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
    },
    scale: {
      display: {
        fontSize: 'clamp(2.75rem, 5vw + 1rem, 4.5rem)',
        lineHeight: '1.08',
        letterSpacing: '-0.02em',
        fontWeight: '400',
      },
      h1: {
        fontSize: 'clamp(2.25rem, 4vw + 0.5rem, 3.5rem)',
        lineHeight: '1.12',
        letterSpacing: '-0.015em',
        fontWeight: '500',
      },
      h2: {
        fontSize: 'clamp(1.75rem, 2.5vw + 0.5rem, 2.5rem)',
        lineHeight: '1.2',
        letterSpacing: '-0.01em',
        fontWeight: '500',
      },
      h3: {
        fontSize: 'clamp(1.35rem, 1.5vw + 0.5rem, 1.75rem)',
        lineHeight: '1.28',
        letterSpacing: '-0.005em',
        fontWeight: '500',
      },
      h4: {
        fontSize: '1.15rem',
        lineHeight: '1.4',
        letterSpacing: '0em',
        fontWeight: '600',
      },
      bodyLg: {
        fontSize: '1.125rem',
        lineHeight: '1.65',
        fontWeight: '400',
      },
      body: {
        fontSize: '1rem',
        lineHeight: '1.6',
        fontWeight: '400',
      },
      bodySm: {
        fontSize: '0.875rem',
        lineHeight: '1.5',
        fontWeight: '400',
      },
      caption: {
        fontSize: '0.75rem',
        lineHeight: '1.4',
        letterSpacing: '0.04em',
        fontWeight: '500',
      },
      indexNumber: {
        fontSize: '0.8125rem',
        lineHeight: '1',
        letterSpacing: '0.08em',
        fontWeight: '600',
      },
    },
  },
  
  spacing: {
    containerMax: '76rem', // 1216px max width for disciplined editorial reading
    sectionY: {
      sm: '4rem',
      md: '6rem',
      lg: '8rem',
    },
    gridGap: {
      sm: '1rem',
      md: '1.5rem',
      lg: '2.5rem',
    },
  },
  
  radii: {
    none: '0px',
    sm: '2px', // Minimal architectural precision
    md: '4px',
    lg: '8px',
    full: '9999px',
  },
  
  shadows: {
    none: 'none',
    subtle: '0 1px 3px 0 rgba(31, 58, 46, 0.04), 0 1px 2px -1px rgba(31, 58, 46, 0.02)',
    elevated: '0 4px 12px 0 rgba(31, 58, 46, 0.06)',
    modal: '0 20px 40px -15px rgba(19, 36, 28, 0.25)',
  },
  
  transitions: {
    timing: 'cubic-bezier(0.16, 1, 0.3, 1)',
    fast: '150ms',
    normal: '250ms',
    slow: '400ms',
  },
} as const

export type DesignTokens = typeof designTokens


// theme.ts
import { createTheme } from "@mui/material/styles";

declare module '@mui/material/styles' {
  interface Palette {
    ochre: Palette['primary'];
    taupe: Palette['primary'];
    rose: Palette['primary'];
    sky: Palette['primary'];
  }

  interface PaletteOptions {
    ochre?: PaletteOptions['primary'];
    taupe?: PaletteOptions['primary'];
    rose?: PaletteOptions['primary'];
    sky?: PaletteOptions['primary'];
  }
}

// Custom color palette from your photos
export const colors = {
  burntOrange: "#D26A1D",
  goldenOchre: "#E5B76B",
  forestPine: "#2C3B32",
  warmTaupe: "#C6B7A2",
  offWhite: "#F8F6F3",
  deepCharcoal: "#3C3C3B",
  dustyRose: "#B37B6D",
  skyMist: "#9BAFBF",
  skyLight: "#c7ddeeff",
  slateGray: "#6B7280",
};

export const theme = createTheme({
  palette: {
    // Main brand colors
    primary: {
      main: colors.goldenOchre,
      light: "#e3c491ff",
      dark: "#dfa342ff",
      contrastText: colors.offWhite,
    },
    secondary: {
      main: colors.forestPine,
      light: "#476454",
      dark: "#1E2A23",
      contrastText: colors.offWhite,
    },
    // Backgrounds
    background: {
      default: colors.skyLight,
      paper: colors.warmTaupe,
    },
    // Text colors
    text: {
      primary: colors.deepCharcoal,
      secondary: colors.forestPine,
    },
    // Support accents (can be used manually)
    ochre: {
      main: colors.goldenOchre,
    },
    taupe: {
      main: colors.warmTaupe,
    },
    rose: {
      main: colors.dustyRose,
    },
    sky: {
      main: colors.skyMist,
      light: "#c7ddeeff",
    },
  },
  typography: {
    fontFamily: "Inter Variable, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
    h1: {
      fontFamily: "Fraunces Variable, serif",
      fontWeight: 600,
      color: colors.forestPine,
    },
    h2: {
      fontFamily: "Fraunces Variable, serif",
      fontWeight: 500,
      color: colors.forestPine,
    },
    h3: {
      fontFamily: "Fraunces Variable, serif",
      fontWeight: 500,
      color: colors.forestPine,
    },
    h4: {
      fontFamily: "Fraunces Variable, serif",
      fontWeight: 500,
      color: colors.dustyRose,
    },
    body1: {
      fontFamily: "Inter, sans-serif",
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.6,
      color: colors.deepCharcoal,
    },
  body2: {
    fontFamily: "Inter, sans-serif",
    fontWeight: 400,
    fontSize: "0.9rem",
    lineHeight: 1.5,
    color: colors.deepCharcoal,
  },
  caption: {
    fontFamily: "Inter, sans-serif",
    fontWeight: 400,
    fontSize: "0.8rem",
    color: colors.slateGray, // subtle, for photo captions
    textAlign: 'center'
  },
  overline: {
    fontFamily: "Fraunces Variable, serif",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    fontSize: "0.75rem",
    color: colors.goldenOchre, // ties in with your divider color
  },
    button: {
      textTransform: "none",
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          padding: "8px 20px",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: colors.forestPine,
            },
            '&:hover fieldset': {
              borderColor: colors.forestPine,
            },
            '&.Mui-focused fieldset': {
              borderColor: colors.forestPine,
            },
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: colors.forestPine,
          },
        },
      },
    },
    MuiPaper: {
      // styleOverrides: { root: { boxShadow: "0 8px 30px #B37B6D" } }
    }
  },
});

// export const theme = createTheme({
//   typography: {
//     fontFamily: "Inter Variable, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
//     h1: { fontFamily: "Fraunces Variable, serif", fontWeight: 600, letterSpacing: "-0.01em" },
//     h2: { fontFamily: "Fraunces Variable, serif", fontWeight: 600 },
//     button: { textTransform: "none", fontWeight: 600, letterSpacing: ".02em" },
//   },
//   palette: {
//     mode: "light",
//     background: { default: "#F3E9DD", paper: "#FFFDF9" },
//     text: { primary: "#2E4C3F", secondary: "#222428" },
//     primary: { main: "#C76525" }, // poppy
//     secondary: { main: "#8BA88F" }, // sage
//     beige: { main: "#CBB0928C" },
//     divider: "#E8E1D8",
//   },
//   shape: { borderRadius: 16 },
//   components: {
//     MuiAppBar: {
//       styleOverrides: { root: { backdropFilter: "blur(6px)", color: "#222" } }
//     },
//     MuiButton: {
//       defaultProps: { variant: "contained", disableElevation: true },
//       styleOverrides: {
//         root: { borderRadius: 999, paddingInline: 20, paddingBlock: 10 },
//         containedPrimary: { color: "#fff" }
//       }
//     },
//     MuiPaper: {
//       styleOverrides: { root: { boxShadow: "0 8px 30px rgba(0,0,0,.06)" } }
//     }
//   }
// });

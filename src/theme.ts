// theme.ts
import { createTheme } from "@mui/material/styles";

declare module '@mui/material/styles' {
  interface Palette {
    beige: Palette['primary'];
  }

  interface PaletteOptions {
    beige?: PaletteOptions['primary'];
  }
}

export const theme = createTheme({
  typography: {
    fontFamily: "Inter Variable, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
    h1: { fontFamily: "Fraunces Variable, serif", fontWeight: 600, letterSpacing: "-0.01em" },
    h2: { fontFamily: "Fraunces Variable, serif", fontWeight: 600 },
    button: { textTransform: "none", fontWeight: 600, letterSpacing: ".02em" },
  },
  palette: {
    mode: "light",
    background: { default: "#F3E9DD", paper: "#FFFDF9" },
    text: { primary: "#2E4C3F", secondary: "#222428" },
    primary: { main: "#C76525" }, // poppy
    secondary: { main: "#8BA88F" }, // sage
    beige: { main: "#CBB0928C" },
    divider: "#E8E1D8",
  },
  shape: { borderRadius: 16 },
  components: {
    MuiAppBar: {
      styleOverrides: { root: { backdropFilter: "blur(6px)", color: "#222" } }
    },
    MuiButton: {
      defaultProps: { variant: "contained", disableElevation: true },
      styleOverrides: {
        root: { borderRadius: 999, paddingInline: 20, paddingBlock: 10 },
        containedPrimary: { color: "#fff" }
      }
    },
    MuiPaper: {
      styleOverrides: { root: { boxShadow: "0 8px 30px rgba(0,0,0,.06)" } }
    }
  }
});

import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#C76525" },   // burnt orange
    secondary: { main: "#8A9A80" }, // sage
    background: {
      default: "#FAF3E8",           // warm cream
      paper:   "#FAF3E8",
    },
    text: {
      primary: "#1F1A17",
    },
  },
  typography: {
    fontFamily: ["'Cormorant Garamond'", "serif"].join(","),
    h1: {
      fontWeight: 700,
      letterSpacing: "-0.01em",
      // smaller than before
      fontSize: "3.25rem",              // ~52px
      lineHeight: 1.05,
    },
    h5: { fontSize: "1.4rem" },
  },
});

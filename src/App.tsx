import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline, Container, Box } from "@mui/material";
import NavBar from "./components/NavBar.jsx";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home.jsx";
import Photos from "./pages/Photos.jsx";
import OurStory from "./pages/OurStory.jsx";
import WeddingDetails from "./pages/WeddingDetails.jsx";
import TravelStay from "./pages/TravelStay.jsx";
import RSVP from "./pages/RSVP.jsx";
import Registry from "./pages/Registry.jsx";
import FAQ from "./pages/FAQ.jsx";
import { theme } from "./theme.js";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ScrollToTop />
      <NavBar />
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          // maxWidth: 1140,                // site-wide clamp
          px: { xs: 2, sm: 3, md: 4 },   // side padding
          mx: "auto",
          // backgroundColor: theme.palette.background.paper
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/wedding-details" element={<WeddingDetails />} />
          <Route path="/travel-and-stay" element={<TravelStay />} />
          <Route path="/rsvp" element={<RSVP />} />
          <Route path="/registry" element={<Registry />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
}
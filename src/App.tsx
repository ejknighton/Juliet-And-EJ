import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline, Container, Box } from "@mui/material";
import NavBar from "./components/NavBar.jsx";
import Home from "./pages/Home.jsx";
import OurStory from "./pages/OurStory.jsx";
import WeddingDetails from "./pages/WeddingDetails.jsx";
import TravelStay from "./pages/TravelStay.jsx";
import RSVP from "./pages/RSVP.jsx";
import Registry from "./pages/Registry.jsx";
import Schedule from "./pages/Schedule.jsx";
import FAQ from "./pages/FAQ.jsx";
import { theme } from "./theme.js";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <Box sx={{ py: { xs: 4, md: 6 } }}>
        <Container maxWidth="lg">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/wedding-details" element={<WeddingDetails />} />
            <Route path="/travel-and-stay" element={<TravelStay />} />
            <Route path="/rsvp" element={<RSVP />} />
            <Route path="/registry" element={<Registry />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
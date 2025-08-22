import * as React from "react";
import { Box, Typography, Stack } from "@mui/material";
import ImageSlider from "../components/ImageSlider.jsx";

// Put your photos in /public/photos and list them here:
const photos = [
  // "/photos/1.jpg",
  // "/photos/2.jpg",
  // "/photos/3.jpg",
];

export default function Home() {
  return (
    <Box sx={{ textAlign: "center" }}>
      {/* Title block */}
      <Stack spacing={1} sx={{ mb: 4 }}>
        <Typography variant="h1" sx={{ fontSize: { xs: 48, md: 80 } }}>
          Juliet & EJ
        </Typography>
        <Typography variant="h3" sx={{ fontSize: { xs: 22, md: 34 } }}>
          June 27th, 2026
        </Typography>
        <Typography variant="h4" sx={{ fontSize: { xs: 18, md: 26 }, color: "text.secondary" }}>
          June Lake, CA
        </Typography>
      </Stack>

      {/* Slider in sage box (80% width) */}
      <ImageSlider images={photos} height={440} />

      {/* “More details coming soon” */}
      <Typography sx={{ mt: 4, fontSize: { xs: 18, md: 24 } }}>
        More details coming soon
      </Typography>
    </Box>
  );
}
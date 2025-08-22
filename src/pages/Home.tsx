// src/pages/Home.tsx
import * as React from "react";
import { Box, Typography, Stack } from "@mui/material";
import LeafCorner from "../components/LeafCorner";
import HeroSlider from "../components/HeroSlider";
import BeigeFooterBand from "../components/BeigeFooterBand";

// TIP: Because this is a GitHub Project Page, use the full base path so images load in production.
const sliderImages = [
  "/Juliet-And-EJ/photos/kissing_on_rock.jpg",
  "/Juliet-And-EJ/photos/lake_overlook.jpg",
  "/Juliet-And-EJ/photos/waterfall.jpg",
];

export default function Home() {
  return (
    <Box sx={{ position: "relative", textAlign: "center", pt: { xs: 3, md: 4 } }}>
      {/* parchment glow behind the hero */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(1200px 500px at 50% -220px, rgba(0,0,0,0.06), transparent 60%)",
        }}
      />

      {/* corner leaf flourishes */}
      <LeafCorner position="tl" />
      <LeafCorner position="tr" />
      <LeafCorner position="bl" />
      <LeafCorner position="br" />

      {/* Title block — slightly smaller & closer to the navbar */}
      <Stack spacing={1} sx={{ mt: { xs: 1, md: 0 }, mb: { xs: 2, md: 2 } }}>
        <Typography
          variant="h1"
          sx={{
            fontFamily: '"Cormorant Garamond", serif',
            fontWeight: 600,
            fontSize: { xs: 44, md: 72 },
            lineHeight: 1.05,
          }}
        >
          Juliet &amp; EJ
        </Typography>

        <Typography variant="h3" sx={{ fontSize: { xs: 22, md: 28 }, mt: { xs: 0.5, md: 0 } }}>
          June 27th, 2026
        </Typography>

        <Typography
          variant="h4"
          sx={{ fontSize: { xs: 18, md: 22 }, color: "text.secondary", mt: -0.5 }}
        >
          June Lake, CA
        </Typography>
      </Stack>

      {/* Larger hero slider with tan frame & soft oval feel */}
      <Box
        sx={{
          mx: "auto",
          width: { xs: "94vw", md: "min(1200px, 92vw)" },
          borderRadius: "36px / 24px",
          overflow: "hidden",
          // tan inner frame like your mock
          boxShadow: "0 0 0 10px rgba(203,176,146,0.55) inset",
          mb: { xs: 3, md: 6 },
        }}
      >
        {/* If your HeroSlider doesn't accept props, just use <HeroSlider /> here */}
        <HeroSlider
          images={sliderImages}
          height={{ xs: "420px", md: "660px" }}
          intervalMs={4500}
        />

      </Box>

      <Typography
        sx={{
          mt: { xs: 2, md: 3 },
          mb: { xs: 3, md: 6 },
          fontSize: { xs: 18, md: 24 },
          fontFamily: '"Cormorant Garamond", serif',
        }}
      >
        More details coming soon
      </Typography>

      {/* full-width footer band (component already handles 100vw background) */}
      <BeigeFooterBand />
    </Box>
  );
}

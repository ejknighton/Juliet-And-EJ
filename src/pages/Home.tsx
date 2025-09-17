// src/pages/Home.tsx
import * as React from "react";
import { Box, Typography, Stack, useTheme } from "@mui/material";
import LeafCorner from "../components/LeafCorner";
import HeroSlider from "../components/HeroSlider";
import BeigeFooterBand from "../components/BeigeFooterBand";
import kissing_on_rock from '@assets/photos/kissing_on_rock.jpg'
import lake_overlook from '@assets/photos/lake_overlook.jpg'
import waterfall from '@assets/photos/waterfall.jpg'
import mountain_background from '@assets/photos/mountain_background.jpg'

// TIP: Because this is a GitHub Project Page, use the full base path so images load in production.
const sliderImages = [
  kissing_on_rock,
  lake_overlook,
  waterfall,
  mountain_background
];

export default function Home() {
  const theme = useTheme(); 
  return (
    <Box sx={{ 
      position: "relative", 
      textAlign: "center", 
      pt: { xs: 3, md: 4 }, 
      width: '100%' 
      }}
    >
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
      {/* <LeafCorner position="tl" />
      <LeafCorner position="tr" />
      <LeafCorner position="bl" />
      <LeafCorner position="br" /> */}

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

        <Typography  color={theme.palette.secondary.main} sx={{ fontSize: { xs: 22, md: 28 }, mt: { xs: 0.5, md: 0 } }}>
          June 27th, 2026
        </Typography>

        <Typography
          sx={{ fontSize: { xs: 18, md: 22 }, mt: -0.5 }}
          color={theme.palette.secondary.main}
        >
          June Lake, CA
        </Typography>
      </Stack>

      {/* Larger hero slider with tan frame & soft oval feel */}
      <Box
        sx={{
          mx: "auto",
          overflow: "hidden",
          mb: { xs: 3, md: 6 },
        }}
      >
        <HeroSlider
          images={sliderImages}
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
      {/* <BeigeFooterBand /> */}
    </Box>
  );
}

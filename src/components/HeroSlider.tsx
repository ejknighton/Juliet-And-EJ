// src/components/HeroSlider.tsx
import React, { useMemo } from "react";
import Slider, { Settings as SlickSettings } from "react-slick";
import { Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

type ImageItem = string | { src: string; alt?: string };

type HeroSliderProps = {
  images: ImageItem[];
  /** Defaults to 3000ms */
  intervalMs?: number;
  /** Defaults to your photo shape (2048x1386) */
  aspectRatio?: `${number} / ${number}` | number;
  /** Show arrows? */
  arrows?: boolean;
  /** Show dots? */
  dots?: boolean;
  /** How images should fit the slide */
};

export default function HeroSlider({
  images,
  intervalMs = 3000,
  aspectRatio = "2048 / 1386",
  arrows = true,
  dots = false,
}: HeroSliderProps) {
  const theme = useTheme();
  const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  // guard: nothing to render
  if (!images || images.length === 0) return null;

  const settings: SlickSettings = useMemo(
    () => ({
      dots,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows,
      autoplay: !prefersReducedMotion,
      autoplaySpeed: intervalMs,
      pauseOnHover: true,
      accessibility: true,
      adaptiveHeight: false,
    }),
    [arrows, dots, intervalMs, prefersReducedMotion]
  );

  return (
<Box
  sx={{
    width: "100%",                 // container handles the clamp
    maxHeight: '85vh', // fix to change width too
    maxWidth: "calc(85vh * (2048 / 1366))", 
    mx: "auto",
    aspectRatio: "2048 / 1366",    // locks height responsively
    borderRadius: 2,
    overflow: "hidden",
    border: 4,
    borderColor: 'beige.main',
    // boxShadow: "0 14px 40px rgba(0,0,0,.18)",
    "& .slick-list, & .slick-track, & .slick-slide > div": { height: "100%" },
    "& .slick-prev:before, & .slick-next:before": { color: "#fff", fontSize: 28 },
    "& .slick-prev, & .slick-next": {
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 2,
        width: 40,
        height: 40,
        borderRadius: "50%",
        background: "rgba(100, 99, 99, 0.35)",
        display: "grid",
        placeItems: "center",
        fill: "rgba(255, 255, 255, 0.62)", 
        "&::before": { display: "none" },
      },
      "& .slick-prev": { left: 12 },
      "& .slick-next": { right: 12 },
  }}
>
  <Slider {...settings}
       prevArrow={
      <button className="slick-prev">
        <svg viewBox="0 0 24 24"><path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
      </button>
    }
    nextArrow={
      <button className="slick-next">
        <svg viewBox="0 0 24 24"><path d="m8.59 16.59 1.41 1.41L16 12 10 6 8.59 7.41 13.17 12z"/></svg>
      </button>
    }   
  >
    {images.map((src, i) => (
      <Box key={i} sx={{ width: "100%", height: "100%" }}>
        <Box
          component="img"
          src={typeof src === "string" ? src : src.src}
          alt={typeof src === "string" ? "" : src.alt ?? ""}
          loading={i === 0 ? "eager" : "lazy"}
          fetchPriority={i === 0 ? "high" : "auto"}
          sx={{ width: "100%", height: "100%", display: "block", objectFit: "cover" }}
        />
      </Box>
    ))}
  </Slider>
</Box>
  );
}
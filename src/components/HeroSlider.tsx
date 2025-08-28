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
    mx: "auto",
    // ✅ even, non-weird width that includes borders
    width: "min(90vw, 1500px)",
    boxSizing: "border-box",
    overflow: "hidden",         // clip any accidental bleed
    borderRadius: 4,
    border: "6px solid rgba(203,176,146,0.55)",
    // optional inner ring without the shadow bulking sides
    outline: "10px solid rgba(203,176,146,0.55)",
    outlineOffset: "-16px",
    bgcolor: "background.paper",
  }}
>
  {/* INNER SLIDER BOX */}
  <Box
    sx={{
      width: "100%",
      aspectRatio: "2048 / 1386",
      maxHeight: "90vh",             // ✅ never taller than screen
      overflow: "hidden",
      borderRadius: 3,

      // force slick to fill exactly this box
      "& .slick-slider, & .slick-list, & .slick-track": { height: "100%" },
      "& .slick-list": { margin: 0 }, // prevent any theme margins
      "& .slick-track": { display: "flex" },
      "& .slick-slide": { height: "auto", padding: 0 },
      "& .slick-slide > div": { height: "100%" },

      // arrows inside the clipped area
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
        fill: "rgba(203,176,146,0.55)", 
        "&::before": { display: "none" },
      },
      "& .slick-prev": { left: 12 },
      "& .slick-next": { right: 12 },

      // images fill the box perfectly
      "& img": { width: "100%", height: "100%", objectFit: "cover", display: "block" },
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
          {images.map((item, i) => {
            const src = typeof item === "string" ? item : item.src;
            const alt = typeof item === "string" ? `Slide ${i + 1}` : item.alt ?? `Slide ${i + 1}`;
            return (
              <Box
                key={src ?? i}
                sx={{
                  height: "100%",
                  "& img": {
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    display: "block",
                  },
                }}
              >
                <img
                  src={src}
                  alt={alt}
                  loading={i === 0 ? "eager" : "lazy"}
                  decoding="async"
                  {...(i === 0 ? { fetchpriority: "high" as const } : {})}
                />
              </Box>
            );
          })}
        </Slider>
      </Box>
    </Box>
  );
}
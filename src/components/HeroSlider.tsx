// src/components/HeroSlider.tsx
import React from "react";
import Slider from "react-slick";
import { Box } from "@mui/material";

type HeroSliderProps = {
  images: string[];
  height?: { xs: string | number; md: string | number };
  intervalMs?: number;
};

export default function HeroSlider({
  images,
  height = { xs: "250px", md: "500px" },
  intervalMs = 5000,
}: HeroSliderProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: intervalMs,
    arrows: false,
    adaptiveHeight: true,
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        mt: { xs: 2, md: 4 },
        mb: { xs: 2, md: 6 },
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
      }}
    >
      <Slider {...settings}>
        {images.map((src, i) => (
          <Box
            key={i}
            component="img"
            src={src}
            alt={`slide-${i}`}
            sx={{
              width: "100%",
              height: height,
              objectFit: "cover",
            }}
          />
        ))}
      </Slider>
    </Box>
  );
}

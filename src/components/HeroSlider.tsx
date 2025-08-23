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
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 4000,
      adaptiveHeight: false, // we'll manage height via aspect-ratio
    };


  return (
    <Box
      sx={{
        width: "min(1100px, 90vw)",
        mx: "auto",
        // p: 1.5,                 // space for the border "frame"
        borderRadius: 4,
        border: "6px solid rgba(203,176,146,0.55) ",
        // boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
        background: "0 0 0 10px rgba(203,176,146,0.55) inset",
      }}
    >
      <Box
        sx={{
          aspectRatio: "2048 / 1386", // = 1.4776...
          width: "100%",
          overflow: "hidden",
          borderRadius: 3,
          // ensure slick fills this box vertically
          "& .slick-list, & .slick-track, & .slick-slide, & .slick-slide > div": {
            height: "100%",
          },
        }}
      >
        <Slider {...settings}>
          {images.map((src, i) => (
            <Box
              key={i}
              sx={{
                height: "100%",
                "& img": {
                  width: "100%",
                  height: "100%",
                  objectFit: "cover", // always fill, crop edges if needed (but ratio matches, so minimal/no crop)
                  display: "block",
                },
              }}
            >
              <img src={src} alt={`slide-${i}`} />
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
}

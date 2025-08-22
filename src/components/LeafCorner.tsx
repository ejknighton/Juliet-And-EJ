import * as React from "react";
import { Box } from "@mui/material";

// Simple hand‑drawn style leaf sprig
const LeafSVG = ({ flipX=false, flipY=false, color="#7E8D74" }) => (
  <svg viewBox="0 0 120 160" width="100%" height="100%"
       style={{ transform: `scale(${flipX?-1:1}, ${flipY?-1:1})` }}>
    <g fill="none" stroke={color} strokeWidth="3" strokeLinecap="round">
      <path d="M20 140 C 50 110, 70 80, 80 30" />
      <path d="M35 120 C 55 110, 70 95, 90 70" />
      <path d="M50 100 C 70 90, 85 80, 105 60" />
    </g>
    <g fill={color} opacity=".9">
      <ellipse cx="35" cy="120" rx="8" ry="16"/>
      <ellipse cx="50" cy="100" rx="8" ry="16"/>
      <ellipse cx="20" cy="140" rx="9" ry="18"/>
      <ellipse cx="90" cy="70" rx="7" ry="14"/>
      <ellipse cx="105" cy="60" rx="7" ry="14"/>
    </g>
  </svg>
);

export default function LeafCorner({
  size = 120,
  position = "tl",           // "tl" | "tr" | "bl" | "br"
  color = "#7E8D74",
}) {
  const pos = {
    tl: { top: 24, left: 8,  flipX:false, flipY:false },
    tr: { top: 24, right: 8, flipX:true,  flipY:false },
    bl: { bottom: 24, left: 8,  flipX:false, flipY:true  },
    br: { bottom: 24, right: 8, flipX:true,  flipY:true  },
  }[position];

  return (
    <Box
      sx={{
        position: "absolute",
        pointerEvents: "none",
        width: { xs: size*0.7, md: size },
        ...(pos.top!==undefined ? { top: pos.top } : { bottom: pos.bottom }),
        ...(pos.left!==undefined ? { left: pos.left } : { right: pos.right }),
        opacity: 0.9,
      }}
    >
      <LeafSVG flipX={pos.flipX} flipY={pos.flipY} color={color} />
    </Box>
  );
}
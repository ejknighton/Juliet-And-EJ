// src/components/travel/ScrollableCardContainer.tsx
import * as React from "react";
import { Box } from "@mui/material";
import { colors } from "../../theme";
import { useScrollFade } from "../../hooks/useScrollFade";
import { ScrollFadeOverlays } from "./ScrollFadeOverlays";

interface ScrollableCardContainerProps {
  children: React.ReactNode;
}

/**
 * A horizontally scrollable container for card components with custom scrollbar styling
 * Features subtle fade gradients at both edges to indicate more content and soften cutoffs
 */
export function ScrollableCardContainer({
  children,
}: ScrollableCardContainerProps) {
  const { scrollRef, showLeftFade, showRightFade, handleScroll } = useScrollFade();

  return (
    <Box
      sx={{
        position: "relative",
        // Negative margin breaks out of parent padding to allow full-width scrolling
        mx: { xs: -2, sm: -10 },
      }}
    >
      <Box
        ref={scrollRef}
        onScroll={handleScroll}
        sx={{
          display: "flex",
          gap: 2,
          overflowX: "auto",
          // Left padding aligns first card with header text, right padding for fade effect
          pl: { xs: 2, sm: 10 },
          pr: { xs: 2, sm: 2 },
          // Vertical padding prevents shadow clipping
          pb: 3,
          pt: 0.5,
          // Hide scrollbar on some browsers for cleaner look
          scrollbarWidth: "thin",
          "&::-webkit-scrollbar": {
            height: "8px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: colors.warmTaupe,
            borderRadius: "4px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: colors.goldenOchre,
            borderRadius: "4px",
            "&:hover": {
              backgroundColor: colors.burntOrange,
            },
          },
        }}
      >
        {children}
      </Box>

      <ScrollFadeOverlays
        showLeftFade={showLeftFade}
        showRightFade={showRightFade}
        scrollRef={scrollRef}
      />
    </Box>
  );
}
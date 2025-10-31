// src/components/travel/ScrollFadeOverlays.tsx
import { Box } from "@mui/material";
import { colors } from "../../theme";

interface ScrollFadeOverlaysProps {
  showLeftFade: boolean;
  showRightFade: boolean;
  fadeColor?: string;
}

/**
 * Renders left and right fade gradient overlays for scrollable containers
 * Used to indicate scrollable content and soften card cutoffs
 */
export function ScrollFadeOverlays({
  showLeftFade,
  showRightFade,
  fadeColor = colors.skyLight,
}: ScrollFadeOverlaysProps) {
  return (
    <>
      {/* Left fade gradient - only shows when scrolled */}
      {showLeftFade && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 8,
            width: "60px",
            background: `linear-gradient(to right, ${fadeColor}, transparent)`,
            pointerEvents: "none",
            zIndex: 1,
          }}
        />
      )}

      {/* Right fade gradient - shows when more content available */}
      {showRightFade && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 8,
            width: "60px",
            background: `linear-gradient(to left, ${fadeColor}, transparent)`,
            pointerEvents: "none",
            zIndex: 1,
          }}
        />
      )}
    </>
  );
}
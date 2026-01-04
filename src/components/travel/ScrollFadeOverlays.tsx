// src/components/travel/ScrollFadeOverlays.tsx
import { Box } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { colors } from "../../theme";

interface ScrollFadeOverlaysProps {
  showLeftFade: boolean;
  showRightFade: boolean;
  fadeColor?: string;
  scrollRef?: React.RefObject<HTMLDivElement>;
}

/**
 * Renders left and right fade gradient overlays for scrollable containers
 * Used to indicate scrollable content and soften card cutoffs
 */
export function ScrollFadeOverlays({
  showLeftFade,
  showRightFade,
  fadeColor = colors.skyLight,
  scrollRef,
}: ScrollFadeOverlaysProps) {
  const handleScrollLeft = () => {
    if (!scrollRef?.current) return;
    scrollRef.current.scrollBy({
      left: -500,
      behavior: "smooth",
    });
  };

  const handleScrollRight = () => {
    if (!scrollRef?.current) return;
    scrollRef.current.scrollBy({
      left: 500,
      behavior: "smooth",
    });
  };
  return (
    <>
      {/* Left fade gradient - only shows when scrolled */}
      {showLeftFade && (
        <>
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
          {/* Left scroll indicator arrow */}
          <Box
            onClick={handleScrollLeft}
            sx={{
              position: "absolute",
              left: "0px",
              top: "50%",
              transform: "translateY(-50%)",
              pointerEvents: "auto",
              zIndex: 2,
              display: "flex",
              alignItems: "center",
              opacity: 0.7,
              cursor: "pointer",
              transition: "opacity 0.2s",
              "&:hover": {
                opacity: 1,
              },
            }}
          >
            <ChevronLeftIcon
              sx={{
                color: colors.forestPine,
                fontSize: 40,
              }}
            />
          </Box>
        </>
      )}

      {/* Right fade gradient - shows when more content available */}
      {showRightFade && (
        <>
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
          {/* Right scroll indicator arrow */}
          <Box
            onClick={handleScrollRight}
            sx={{
              position: "absolute",
              right: "0px",
              top: "50%",
              transform: "translateY(-50%)",
              pointerEvents: "auto",
              zIndex: 2,
              display: "flex",
              alignItems: "center",
              opacity: 0.7,
              cursor: "pointer",
              transition: "opacity 0.2s",
              "&:hover": {
                opacity: 1,
              },
            }}
          >
            <ChevronRightIcon
              sx={{
                color: colors.forestPine,
                fontSize: 40,
              }}
            />
          </Box>
        </>
      )}
    </>
  );
}
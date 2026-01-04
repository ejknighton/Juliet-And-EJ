import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { colors } from "../../theme";

interface TrailStop {
  id: string;
  label: string;
  elevation: string;
}

interface VerticalTrailNavigationProps {
  stops: TrailStop[];
}

/**
 * VerticalTrailNavigation - Fixed sidebar showing trail progress through the page
 * Displays a vertical trail line with markers for each section
 */
export default function VerticalTrailNavigation({
  stops,
}: VerticalTrailNavigationProps) {
  const [activeStop, setActiveStop] = useState(0);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = stops.findIndex((stop) => stop.id === entry.target.id);
          if (index !== -1) {
            setActiveStop(index);
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe all sections
    stops.forEach((stop) => {
      const element = document.getElementById(stop.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [stops]);

  const handleStopClick = (stopId: string) => {
    const element = document.getElementById(stopId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Box
      sx={{
        position: "fixed",
        left: "40px",
        top: "50%",
        transform: "translateY(-50%)",
        height: "60vh",
        maxHeight: "600px",
        zIndex: 100,
        display: { xs: "none", md: "flex" },
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* Vertical trail line */}
      <Box
        sx={{
          position: "absolute",
          left: "10px",
          top: 0,
          bottom: 0,
          width: "4px",
          background: `linear-gradient(to bottom,
            ${colors.forestPine}00 0%,
            ${colors.forestPine}40 10%,
            ${colors.forestPine}40 90%,
            ${colors.forestPine}00 100%)`,
          borderRadius: "2px",
        }}
      />

      {/* Trail stops */}
      {stops.map((stop, index) => {
        const isActive = index === activeStop;
        const isPast = index < activeStop;

        return (
          <Box
            key={stop.id}
            onClick={() => handleStopClick(stop.id)}
            sx={{
              position: "relative",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 2,
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateX(4px)",
              },
            }}
          >
            {/* Trail marker dot */}
            <Box
              sx={{
                width: isActive ? "20px" : "16px",
                height: isActive ? "20px" : "16px",
                borderRadius: "50%",
                backgroundColor: isActive
                  ? colors.goldenOchre
                  : isPast
                  ? colors.warmTaupe
                  : colors.offWhite,
                border: `3px solid ${colors.forestPine}`,
                boxShadow: isActive
                  ? `0 0 0 4px rgba(229, 183, 107, 0.3), 0 2px 8px rgba(0,0,0,0.3)`
                  : isPast
                  ? `0 2px 4px rgba(0,0,0,0.2)`
                  : `0 2px 4px rgba(0,0,0,0.15)`,
                transition: "all 0.3s ease",
                position: "relative",
                zIndex: 2,
              }}
            />

            {/* Label */}
            <Box
              sx={{
                opacity: isActive ? 1 : 0.7,
                transform: isActive ? "scale(1.05)" : "scale(1)",
                transition: "all 0.3s ease",
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: colors.forestPine,
                  fontWeight: isActive ? 700 : 600,
                  fontSize: isActive ? "0.8rem" : "0.75rem",
                  lineHeight: 1.2,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  whiteSpace: "nowrap",
                }}
              >
                {stop.label}
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  display: "block",
                  color: colors.forestPine,
                  fontSize: "0.65rem",
                  opacity: 0.7,
                  whiteSpace: "nowrap",
                }}
              >
                {stop.elevation}
              </Typography>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}

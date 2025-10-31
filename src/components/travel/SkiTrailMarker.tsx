// src/components/travel/SkiTrailMarker.tsx
import * as React from "react";
import { Box } from "@mui/material";
import { colors } from "../../theme";
import { SkiDifficulty } from "../../types/travel";
import { DifficultySymbol } from "./DifficultySymbol";

interface SkiTrailMarkerProps {
  icon: React.ReactNode;
  label: string;
  difficulty: SkiDifficulty;
  elevation?: string;
}

/**
 * Displays a decorative ski trail marker sign with difficulty rating
 * Used as section headers on the Travel & Stay page
 */
export function SkiTrailMarker({
  icon,
  label,
  difficulty,
  elevation,
}: SkiTrailMarkerProps) {
  const difficultyColors = {
    green: colors.forestPine,
    blue: colors.skyMist,
    black: colors.deepCharcoal,
  };

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        mb: 12,
      }}
    >
      <Box sx={{ position: "relative" }}>
        {/* Ski trail sign post */}
        <Box
          sx={{
            position: "absolute",
            left: "50%",
            top: "100%",
            width: "12px",
            height: "64px",
            ml: "-6px",
            boxShadow: 2,
            background: `linear-gradient(to right, ${colors.warmTaupe}, ${colors.offWhite}, ${colors.warmTaupe})`,
          }}
        />

        {/* Arrow-shaped sign */}
        <Box sx={{ position: "relative" }}>
          <Box
            sx={{
              px: 4,
              py: 2.5,
              boxShadow: 6,
              border: "4px solid",
              minWidth: "320px",
              position: "relative",
              backgroundColor: difficultyColors[difficulty],
              borderColor: colors.offWhite,
              clipPath: "polygon(0 0, 100% 0, 100% 70%, 50% 100%, 0 70%)",
              pb: "2.5rem",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <DifficultySymbol difficulty={difficulty} />

              <Box sx={{ flex: 1 }}>
                <Box
                  sx={{
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: colors.offWhite,
                  }}
                >
                  {label}
                </Box>
                {elevation && (
                  <Box
                    sx={{
                      fontSize: "0.75rem",
                      mt: 0.5,
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      color: "rgba(255,255,255,0.9)",
                    }}
                  >
                    <span>⛷ {elevation}</span>
                  </Box>
                )}
              </Box>

              <Box sx={{ color: colors.offWhite }}>{icon}</Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
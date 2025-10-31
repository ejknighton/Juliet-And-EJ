// src/components/travel/AirportCard.tsx
import { Box, Card } from "@mui/material";
import { Plane, ExternalLink } from "lucide-react";
import { colors } from "../../theme";

interface AirportCardProps {
  code: string;
  name: string;
  distance: string;
  details: string;
  link?: string;
}

/**
 * Displays airport information with travel details
 * Includes optional link to transportation information
 */
export function AirportCard({
  code,
  name,
  distance,
  details,
  link,
}: AirportCardProps) {
  return (
    <Card
      sx={{
        p: { xs: 2, sm: 2.5 },
        boxShadow: 3,
        "&:hover": { boxShadow: 6 },
        transition: "box-shadow 0.3s",
        border: "2px solid",
        position: "relative",
        overflow: "hidden",
        height: "100%",
        minWidth: { xs: "240px", sm: "320px" },
        backgroundColor: colors.offWhite,
        borderColor: colors.skyMist,
        scrollSnapAlign: "start",
      }}
    >
      {/* Subtle accent */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: "80px",
          height: "80px",
          opacity: 0.05,
          pointerEvents: "none",
          backgroundImage: `repeating-linear-gradient(
            135deg,
            ${colors.skyMist} 0px,
            ${colors.skyMist} 2px,
            transparent 2px,
            transparent 10px
          )`,
        }}
      />

      <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5, mb: 1.5, position: "relative" }}>
        <Box
          sx={{
            width: "48px",
            height: "48px",
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            backgroundColor: colors.skyMist,
          }}
        >
          <Plane size={22} style={{ color: colors.offWhite }} />
        </Box>
        <Box sx={{ flex: 1 }}>
          <Box sx={{ display: "flex", alignItems: "baseline", gap: 1 }}>
            <Box component="h4" sx={{ color: colors.forestPine, m: 0 }}>
              {code}
            </Box>
            <Box
              component="span"
              sx={{
                fontSize: "0.875rem",
                px: 1,
                py: 0.25,
                borderRadius: "4px",
                color: colors.forestPine,
                backgroundColor: colors.goldenOchre,
              }}
            >
              {distance}
            </Box>
          </Box>
          <Box component="p" sx={{ fontSize: "0.875rem", mt: 0.5, color: colors.deepCharcoal, m: 0 }}>
            {name}
          </Box>
        </Box>
      </Box>

      <Box
        component="p"
        sx={{ fontSize: "0.875rem", mt: 1.5, mb: 1.5, position: "relative", color: colors.deepCharcoal }}
      >
        {details}
      </Box>

      {link && (
        <Box
          component="a"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 0.5,
            fontSize: "0.875rem",
            position: "relative",
            color: colors.burntOrange,
            textDecoration: "none",
            "&:hover": { textDecoration: "underline" },
          }}
        >
          Transportation Info <ExternalLink size={14} />
        </Box>
      )}
    </Card>
  );
}
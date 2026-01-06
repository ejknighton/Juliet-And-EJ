import { Box, Typography } from "@mui/material";
import { Mountain } from "lucide-react";
import { colors } from "../../theme";
import NPSArrowheadBadge from "./NPSArrowheadBadge";

/**
 * PageFooter - Summit achievement marker for Wedding Details page
 * Represents reaching the peak of the hiking journey
 */
export default function PageFooter() {
  return (
    <Box
      sx={{
        textAlign: "center",
        mt: 8,
        mb: 4,
      }}
    >
      {/* Summit Flag Pole */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
        }}
      >
        {/* Summit Pole/Marker */}
        <Box
          sx={{
            width: "12px",
            height: "100px",
            background: `linear-gradient(to right, ${colors.forestPine}, #1a2519, ${colors.forestPine})`,
            boxShadow: "3px 0 6px rgba(0,0,0,0.3)",
            position: "relative",
            zIndex: 1,
            borderRadius: "2px 2px 0 0",
          }}
        />

        {/* Summit NPS Badge */}
        <Box sx={{
          my: 3,
          filter: "drop-shadow(0 0 20px rgba(229, 183, 107, 0.4))"
        }}>
          <NPSArrowheadBadge title="SUMMIT" subtitle="Reached" size="large" />
        </Box>

        {/* Elevation Marker */}
        <Box
          sx={{
            backgroundColor: colors.forestPine,
            color: "#FFFFFF",
            px: 3,
            py: 1.5,
            borderRadius: "4px",
            border: `2px solid ${colors.warmTaupe}`,
            boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
            mb: 3,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Mountain size={20} color="#FFFFFF" />
            <Typography
              variant="body2"
              sx={{
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#FFFFFF",
              }}
            >
              June Mountain • 10,174 ft
            </Typography>
          </Box>
        </Box>

        {/* Celebration Message */}
        <Box
          sx={{
            backgroundColor: colors.offWhite,
            border: `2px solid ${colors.warmTaupe}`,
            borderRadius: "8px",
            p: 3,
            boxShadow: 1,
            maxWidth: "500px",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: colors.deepCharcoal,
              fontStyle: "italic",
              lineHeight: 1.6,
            }}
          >
            Congratulations! You've reached the summit of our wedding weekend adventure.
            We're so happy to be able to celebrate with you!
          </Typography>
        </Box>

        {/* Summit cairn stones decoration */}
        <Box
          sx={{
            display: "flex",
            gap: 1,
            mt: 3,
            opacity: 0.6,
          }}
        >
          {[32, 28, 22, 28, 24].map((size, i) => (
            <Box
              key={i}
              sx={{
                width: `${size}px`,
                height: `${size}px`,
                backgroundColor: colors.warmTaupe,
                border: `1px solid ${colors.forestPine}`,
                borderRadius: "2px",
                transform: `rotate(${(i - 2) * 5}deg)`,
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

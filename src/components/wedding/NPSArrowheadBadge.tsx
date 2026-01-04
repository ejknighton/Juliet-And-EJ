import { Box, Typography } from "@mui/material";
import { colors } from "../../theme";

interface NPSArrowheadBadgeProps {
  title: string;
  subtitle?: string;
  size?: "large" | "small";
}

/**
 * NPSArrowheadBadge - National Park Service style shield/arrowhead badge
 * Mimics the iconic NPS entrance signs and badges
 */
export default function NPSArrowheadBadge({
  title,
  subtitle,
  size = "large",
}: NPSArrowheadBadgeProps) {
  const isLarge = size === "large";
  const badgeWidth = isLarge ? 280 : 120;
  const badgeHeight = isLarge ? 320 : 140;

  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-block",
      }}
    >
      {/* SVG Pentagon/Arrowhead Shield */}
      <Box
        component="svg"
        viewBox="0 0 280 320"
        sx={{
          width: `${badgeWidth}px`,
          height: `${badgeHeight}px`,
          filter: "drop-shadow(0 8px 20px rgba(0, 0, 0, 0.4))",
        }}
      >
        {/* Main shield shape - authentic NPS arrowhead */}
        <path
          d="M 140 10 L 180 35 L 260 35 L 260 260 L 140 310 L 20 260 L 20 35 L 100 35 Z"
          fill={colors.warmTaupe}
          stroke={colors.forestPine}
          strokeWidth="6"
        />

        {/* Inner bevel effect for depth */}
        <path
          d="M 140 20 L 175 42 L 250 42 L 250 255 L 140 300 L 30 255 L 30 42 L 105 42 Z"
          fill="none"
          stroke={colors.offWhite}
          strokeWidth="1"
          opacity="0.3"
        />

        {/* Inner border for depth */}
        <path
          d="M 140 20 L 175 42 L 250 42 L 250 255 L 140 300 L 30 255 L 30 42 L 105 42 Z"
          fill="none"
          stroke={colors.forestPine}
          strokeWidth="2"
          opacity="0.3"
        />
      </Box>

      {/* Text Content Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          px: 3,
          pt: isLarge ? 2 : 1,
        }}
      >
        {/* Top Arc Text - "NATIONAL PARK" */}
        {isLarge && (
          <Typography
            variant="caption"
            sx={{
              color: colors.forestPine,
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              fontSize: "0.75rem",
              mb: 1,
            }}
          >
            {/* NATIONAL PARK */}
          </Typography>
        )}

        {/* Main Title */}
        <Typography
          variant={isLarge ? "h3" : "body2"}
          sx={{
            color: colors.forestPine,
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            textAlign: "center",
            lineHeight: 1.1,
            mb: isLarge ? 1.5 : 0.5,
            fontSize: isLarge ? "2.4rem" : "0.85rem",
            fontFamily: "Fraunces Variable, serif",
          }}
        >
          {title}
        </Typography>

        {/* Subtitle */}
        {subtitle && (
          <Typography
            variant={isLarge ? "body2" : "caption"}
            sx={{
              color: colors.forestPine,
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              textAlign: "center",
              fontSize: isLarge ? "1rem" : "0.6rem",
              lineHeight: 1.2,
            }}
          >
            {subtitle}
          </Typography>
        )}

        {/* Decorative Pine Tree Element (optional) */}
        {isLarge && (
          <Box
            component="svg"
            viewBox="0 0 40 50"
            sx={{
              width: "30px",
              height: "40px",
              mt: 2,
              opacity: 0.4,
            }}
          >
            <path
              d="M 20 5 L 15 18 L 17 18 L 13 28 L 16 28 L 12 40 L 18 40 L 18 48 L 22 48 L 22 40 L 28 40 L 24 28 L 27 28 L 23 18 L 25 18 Z"
              fill={colors.forestPine}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
}

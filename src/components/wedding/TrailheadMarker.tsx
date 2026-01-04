import { Box, Typography } from "@mui/material";
import { LucideIcon } from "lucide-react";
import { colors } from "../../theme";
import NPSArrowheadBadge from "./NPSArrowheadBadge";

interface TrailheadMarkerProps {
  icon: LucideIcon;
  label: string;
  elevation?: string;
  showBadge?: boolean;
}

/**
 * TrailheadMarker - National park style trailhead sign for section headers
 * Replaces the ski trail marker with a summer hiking aesthetic
 */
export default function TrailheadMarker({
  icon: Icon,
  label,
  elevation,
  showBadge = false,
}: TrailheadMarkerProps) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-end",
        gap: 2,
        mb: 4,
        mt: 4,
        position: "relative",
      }}
    >
      {/* Optional mini NPS badge */}
      {showBadge && (
        <Box
          sx={{
            position: "absolute",
            top: "-20px",
            left: "-10px",
            zIndex: 2,
          }}
        >
          <NPSArrowheadBadge title="JL" size="small" />
        </Box>
      )}
      {/* Wooden post */}
      <Box
        sx={{
          width: "16px",
          height: "120px",
          background: `linear-gradient(to right, ${colors.warmTaupe} 0%, #8B7355 20%, #6B5444 50%, #8B7355 80%, ${colors.warmTaupe} 100%)`,
          borderRadius: "3px",
          boxShadow: "3px 3px 6px rgba(0,0,0,0.25)",
          position: "relative",
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "24px",
            height: "10px",
            background: colors.deepCharcoal,
            borderRadius: "50%",
            opacity: 0.3,
          },
        }}
      />

      {/* Trail sign board */}
      <Box
        sx={{
          position: "relative",
          background: colors.forestPine,
          color: colors.offWhite,
          px: 3,
          py: 2,
          borderRadius: "4px",
          boxShadow: "3px 3px 8px rgba(0,0,0,0.35)",
          border: `4px solid ${colors.warmTaupe}`,
          mb: 1,
          minWidth: "280px",
          "&::before": {
            content: '""',
            position: "absolute",
            top: "50%",
            left: "-16px",
            transform: "translateY(-50%)",
            width: 0,
            height: 0,
            borderTop: "22px solid transparent",
            borderBottom: "22px solid transparent",
            borderRight: `16px solid ${colors.forestPine}`,
            filter: "drop-shadow(-2px 0 2px rgba(0,0,0,0.2))",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Icon size={28} strokeWidth={2.5} />
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                m: 0,
                lineHeight: 1.2,
              }}
            >
              {label}
            </Typography>
            {elevation && (
              <Typography
                variant="caption"
                sx={{
                  display: "block",
                  mt: 0.5,
                  opacity: 0.9,
                  fontSize: "0.75rem",
                  letterSpacing: "0.05em",
                  color: "#fff"
                }}
              >
                {elevation}
              </Typography>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

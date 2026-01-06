import { Box, Typography } from "@mui/material";
import { colors } from "../../theme";
import NPSArrowheadBadge from "./NPSArrowheadBadge";

/**
 * PageHeader - NPS-style entrance sign for Wedding Details page
 * Represents the trailhead where the hiking journey begins
 */
export default function PageHeader() {
  return (
    <Box sx={{ textAlign: "center", mb: 6 }}>
      {/* Wood grain SVG pattern definition */}
      <Box
        component="svg"
        width="0"
        height="0"
        sx={{ position: "absolute" }}
      >
        <defs>
          <pattern id="woodGrain" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <rect width="100" height="100" fill="transparent"/>
            <path d="M 0 20 Q 25 15, 50 20 T 100 20" stroke="rgba(0,0,0,0.1)" strokeWidth="1" fill="none"/>
            <path d="M 0 40 Q 25 35, 50 40 T 100 40" stroke="rgba(0,0,0,0.1)" strokeWidth="1" fill="none"/>
            <path d="M 0 60 Q 25 55, 50 60 T 100 60" stroke="rgba(0,0,0,0.1)" strokeWidth="1" fill="none"/>
            <path d="M 0 80 Q 25 75, 50 80 T 100 80" stroke="rgba(0,0,0,0.1)" strokeWidth="1" fill="none"/>
          </pattern>
        </defs>
      </Box>

      {/* NPS Arrowhead Badge - Main Entry Marker */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mb: 4,
        }}
      >
        <NPSArrowheadBadge title="JUNE LAKE" subtitle="Wedding Weekend" size="large" />
      </Box>

      {/* Wooden Entrance Sign */}
      <Box
        sx={{
          display: "inline-block",
          px: 5,
          py: 2.5,
          background: `linear-gradient(135deg, #8B7355 0%, #6B5444 25%, #7A6350 50%, #6B5444 75%, #8B7355 100%)`,
          border: `5px solid ${colors.warmTaupe}`,
          borderRadius: "4px",
          boxShadow: "0 6px 16px rgba(0,0,0,0.4)",
          position: "relative",
          mb: 4,
          "&::before": {
            content: '""',
            position: "absolute",
            top: "50%",
            left: "-8px",
            width: "8px",
            height: "60%",
            background: colors.warmTaupe,
            transform: "translateY(-50%)",
            borderRadius: "2px",
          },
          "&::after": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: "url(#woodGrain)",
            opacity: 0.4,
            pointerEvents: "none",
            borderRadius: "4px",
          },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: colors.offWhite,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
            m: 0,
          }}
        >
          TRAILHEAD
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: colors.offWhite,
            display: "block",
            mt: 0.5,
            letterSpacing: "0.1em",
            opacity: 0.9,
            textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
          }}
        >
          Journey Begins Here
        </Typography>
      </Box>

      {/* Welcome Info Box */}
      <Box
        sx={{
          maxWidth: "672px",
          mx: "auto",
          p: 3,
          border: `2px solid ${colors.warmTaupe}`,
          boxShadow: 2,
          borderRadius: "8px",
          backgroundColor: colors.offWhite,
        }}
      >
        <Typography
          variant="body1"
          sx={{
            color: colors.deepCharcoal,
            lineHeight: 1.8,
            m: 0,
          }}
        >
          Welcome to our wedding weekend adventure! Below you'll find your trail guide
          for the celebration weekend in the mountains of June Lake, California.
        </Typography>
      </Box>
    </Box>
  );
}

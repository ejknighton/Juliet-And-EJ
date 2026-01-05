// src/components/travel/TransportationSection.tsx
import { Box, Card } from "@mui/material";
import { Bus, Car, ExternalLink } from "lucide-react";
import { colors } from "../../theme";
import { SkiTrailMarker } from "./SkiTrailMarker";

/**
 * Transportation section with information about getting around Mammoth Lakes
 */
export function TransportationSection() {
  return (
    <Box id="transportation" sx={{ mb: 8 }}>
      <SkiTrailMarker
        icon={<Bus size={28} />}
        label="Village Shuttle"
        difficulty="green"
        elevation="7,880 ft"
      />

      <Card
        sx={{
          p: 3,
          boxShadow: 3,
          border: "2px solid",
          position: "relative",
          overflow: "hidden",
          borderRadius: "8px",
          backgroundColor: colors.offWhite,
          borderColor: colors.warmTaupe,
        }}
      >
        {/* Subtle pattern */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "128px",
            height: "128px",
            opacity: 0.05,
            pointerEvents: "none",
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              ${colors.forestPine} 0px,
              ${colors.forestPine} 2px,
              transparent 2px,
              transparent 12px
            )`,
          }}
        />

        <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5, mb: 2, position: "relative" }}>
          <Box
            sx={{
              width: "48px",
              height: "48px",
              borderRadius: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              backgroundColor: colors.forestPine,
            }}
          >
            <Car size={22} style={{ color: colors.offWhite }} />
          </Box>
          <Box sx={{ flex: 1 }}>
            <Box
              component="h3"
              sx={{
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                color: colors.forestPine,
                m: 0,
              }}
            >
              Getting Around Mammoth
            </Box>
          </Box>
        </Box>

        <Box component="p" sx={{ mb: 2, position: "relative", color: colors.deepCharcoal }}>
          If you're staying near Mammoth Village, most shops, restaurants,
          and the shuttle pickup area will be{" "}
          <strong>within easy walking distance</strong>. The town also
          offers a <strong>free and reliable bus system</strong> that
          connects the Village, Main Lodge, and other parts of Mammoth
          Lakes.
        </Box>

        <Box
          component="a"
          href="https://www.estransit.com"
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
          More information on local transit <ExternalLink size={14} />
        </Box>
      </Card>
    </Box>
  );
}
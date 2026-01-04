// src/components/travel/HotelBlock.tsx
import { Box, Card } from "@mui/material";
import { Hotel } from "lucide-react";
import LaunchIcon from "@mui/icons-material/Launch";
import { colors } from "../../theme";

interface HotelBlockProps {
  name: string;
  description: string;
  rooms: { type: string; price: string }[];
  ctaHref?: string;
}

/**
 * Displays hotel accommodation information in a card format
 */
export function HotelBlock({ name, description, rooms, ctaHref }: HotelBlockProps) {
  return (
    <Card
      onClick={ctaHref ? () => window.open(ctaHref, "_blank", "noopener,noreferrer") : undefined}
      sx={{
        p: { xs: 2, sm: 3 },
        boxShadow: 3,
        "&:hover": { boxShadow: 6 },
        transition: "box-shadow 0.3s",
        border: "3px solid",
        position: "relative",
        overflow: "hidden",
        height: "100%",
        minWidth: { xs: "240px", sm: "340px" },
        backgroundColor: colors.offWhite,
        borderColor: colors.warmTaupe,
        scrollSnapAlign: "start",
        cursor: ctaHref ? "pointer" : "default",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5, mb: 1.5, position: "relative" }}>
        <Box
          sx={{
            width: "40px",
            height: "40px",
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            backgroundColor: colors.goldenOchre,
          }}
        >
          <Hotel size={20} style={{ color: colors.forestPine }} />
        </Box>
        <Box sx={{ flex: 1 }}>
          <Box component="h4" sx={{ color: colors.forestPine, m: 0 }}>
            {name}
          </Box>
        </Box>
        {ctaHref && (
          <LaunchIcon
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              color: colors.forestPine,
              fontSize: "1.25rem",
            }}
          />
        )}
      </Box>

      <Box
        component="p"
        sx={{ fontSize: "0.875rem", mb: 2, color: colors.deepCharcoal, m: 0 }}
      >
        {description}
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mt: "auto" }}>
        {rooms.map((room, idx) => (
          <Box
            key={idx}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              py: 1,
              px: 1.5,
              borderRadius: "4px",
              backgroundColor: colors.skyLight,
            }}
          >
            <Box component="span" sx={{ fontSize: "0.875rem", color: colors.deepCharcoal }}>
              {room.type}
            </Box>
            <Box component="span" sx={{ color: colors.burntOrange, fontWeight: 600 }}>
              {room.price}
            </Box>
          </Box>
        ))}
      </Box>
    </Card>
  );
}
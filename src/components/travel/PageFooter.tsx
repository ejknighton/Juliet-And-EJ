// src/components/travel/PageFooter.tsx
import { Box } from "@mui/material";
import { MapPin } from "lucide-react";
import { colors } from "../../theme";

/**
 * Summit marker footer for the Travel & Stay page
 */
export function PageFooter() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 10 }}>
      <Box sx={{ position: "relative" }}>
        {/* Flag pole */}
        <Box
          sx={{
            position: "absolute",
            left: "50%",
            bottom: 0,
            width: "8px",
            height: "96px",
            ml: "-4px",
            background: `linear-gradient(to right, ${colors.warmTaupe}, ${colors.offWhite}, ${colors.warmTaupe})`,
          }}
        />

        {/* Summit marker */}
        <Box
          sx={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: 6,
            border: "4px solid",
            position: "relative",
            mb: 12,
            backgroundColor: colors.goldenOchre,
            borderColor: colors.offWhite,
          }}
        >
          <MapPin size={36} style={{ color: colors.forestPine }} />
        </Box>
      </Box>

      <Box
        sx={{
          px: 5,
          py: 3,
          borderRadius: "8px",
          border: "2px solid",
          boxShadow: 3,
          textAlign: "center",
          maxWidth: "448px",
          backgroundColor: colors.offWhite,
          borderColor: colors.warmTaupe,
        }}
      >
        <Box component="p" sx={{ color: colors.forestPine, m: 0 }}>
          <strong>Summit Reached</strong>
        </Box>
        <Box component="p" sx={{ fontSize: "0.875rem", mt: 1.5, color: colors.deepCharcoal, mb: 0 }}>
          We can't wait to celebrate with you in the mountains!
        </Box>
        <Box sx={{ mt: 2, display: "flex", justifyContent: "center", gap: 1.5 }}>
          <span style={{ color: colors.forestPine }}>●</span>
          <span style={{ color: colors.skyMist }}>■</span>
          <span style={{ color: colors.deepCharcoal }}>◆</span>
        </Box>
      </Box>
    </Box>
  );
}

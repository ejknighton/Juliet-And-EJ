// src/components/travel/PageHeader.tsx
import { Box } from "@mui/material";
import { Mountain } from "lucide-react";
import { colors } from "../../theme";

/**
 * Page header for the Travel & Stay page with trail map theme
 */
export function PageHeader() {
  return (
    <Box sx={{ textAlign: "center", mb: 8 }}>
      {/* <Box
        sx={{
          display: "inline-block",
          px: 6,
          py: 3,
          boxShadow: 6,
          border: "4px solid",
          position: "relative",
          backgroundColor: colors.goldenOchre,
          borderColor: colors.offWhite,
        }}
      >
        <Box sx={{ position: "relative", display: "flex", alignItems: "center", gap: 3 }}>
          <Mountain size={40} style={{ color: colors.forestPine }} />
          <Box>
            <Box
              component="h1"
              sx={{
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: colors.forestPine,
                m: 0,
              }}
            >
              Trail Map
            </Box>
            <Box
              component="p"
              sx={{ fontSize: "0.875rem", mt: 0.5, color: colors.deepCharcoal, m: 0 }}
            >
              June Lake Wedding Weekend
            </Box>
          </Box>
          <Mountain size={40} style={{ color: colors.forestPine }} />
        </Box>
      </Box> */}

      <Box
        sx={{
          maxWidth: "672px",
          mx: "auto",
          mt: 4,
          p: 3,
          border: "2px solid",
          boxShadow: 2,
          borderRadius: "8px",
          backgroundColor: colors.offWhite,
          borderColor: colors.warmTaupe,
        }}
      >
        <Box component="p" sx={{ color: colors.deepCharcoal, m: 0 }}>
          Welcome! Here's everything you need to know to plan your stay and
          travel for our wedding weekend in June Lake.
        </Box>
      </Box>
    </Box>
  );
}

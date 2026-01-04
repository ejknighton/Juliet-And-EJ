import { Box } from "@mui/material";
import { colors } from "../../theme";

interface TrailProgressionLineProps {
  height?: string;
  showMarker?: boolean;
}

/**
 * TrailProgressionLine - Visual connector representing hiking trail between sections
 * Creates the narrative of progressing along a hiking path
 */
export default function TrailProgressionLine({
  height = "60px",
  showMarker = false,
}: TrailProgressionLineProps) {
  return (
    <Box
      sx={{
        position: "relative",
        width: "6px",
        height: height,
        mx: "auto",
        my: 2,
      }}
    >
      {/* Main dashed trail line */}
      <Box
        sx={{
          position: "absolute",
          left: "50%",
          top: 0,
          bottom: 0,
          width: "6px",
          transform: "translateX(-50%)",
          borderLeft: `6px dashed ${colors.forestPine}`,
          opacity: 0.3,
        }}
      />

      {/* Optional trail marker dot */}
      {showMarker && (
        <Box
          sx={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: "18px",
            height: "18px",
            borderRadius: "50%",
            backgroundColor: colors.goldenOchre,
            border: `2px solid ${colors.forestPine}`,
            boxShadow: `0 0 0 3px rgba(229, 183, 107, 0.3), 0 2px 4px rgba(0,0,0,0.2)`,
          }}
        />
      )}
    </Box>
  );
}

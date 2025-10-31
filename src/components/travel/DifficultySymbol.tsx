// src/components/travel/DifficultySymbol.tsx
import { Box } from "@mui/material";
import { colors } from "../../theme";

interface DifficultySymbolProps {
  difficulty: string;
}

/**
 * Displays a ski trail difficulty symbol (green circle, blue square, or black diamond)
 */
export function DifficultySymbol({ difficulty }: DifficultySymbolProps) {
  const symbols = {
    green: {
      color: colors.forestPine,
      label: "●",
    },
    blue: {
      color: colors.skyMist,
      label: "■",
    },
    black: {
      color: colors.deepCharcoal,
      label: "◆",
    },
  };

  const symbol = symbols[difficulty as keyof typeof symbols];

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
      <Box component="span" sx={{ fontSize: "1.5rem", color: symbol.color }}>
        {symbol.label}
      </Box>
    </Box>
  );
}
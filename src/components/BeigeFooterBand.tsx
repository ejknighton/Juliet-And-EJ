import * as React from "react";
import { Box } from "@mui/material";

export default function BeigeFooterBand() {
  return (
    <Box
      component="footer"
      sx={{
        mt: { xs: 6, md: 10 },
        height: { xs: 80, md: 140 },
        bgcolor: "#E7D4C2",
        width: "100%",
      }}
    />
  );
}
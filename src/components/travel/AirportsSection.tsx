// src/components/travel/AirportsSection.tsx
import { Box } from "@mui/material";
import { Plane } from "lucide-react";
import { colors } from "../../theme";
import { AirportType } from "../../types/travel";
import { SkiTrailMarker } from "./SkiTrailMarker";
import { AirportCard } from "./AirportCard";
import { ScrollableCardContainer } from "./ScrollableCardContainer";

interface AirportsSectionProps {
  airports: AirportType[];
}

/**
 * Airports section displaying flight options and travel recommendations
 */
export function AirportsSection({ airports }: AirportsSectionProps) {
  return (
    <Box sx={{ mb: 10 }}>
      <SkiTrailMarker
        icon={<Plane size={28} />}
        label="Access Lifts (Airports)"
        difficulty="blue"
        elevation=""
      />

      <Box
        sx={{
          p: 3,
          borderRadius: "8px",
          border: "2px solid",
          mb: 4,
          boxShadow: 2,
          backgroundColor: colors.offWhite,
          borderColor: colors.warmTaupe,
        }}
      >
        <Box component="p" sx={{ color: colors.deepCharcoal, m: 0 }}>
          For those guests that can, we recommend driving to Mammoth Lakes,
          the drive through the Eastern Sierras is gorgeous and not bad at
          all. For those flying in{" "}
          <strong>Bishop (BIH) or Reno (RNO)</strong> and renting a car or
          carpooling with someone, driving is likely the most convenient
          option.
        </Box>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2 }}>
        <Box
          component="h3"
          sx={{
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: colors.forestPine,
            m: 0,
          }}
        >
          Flight Options
        </Box>
      </Box>

      <ScrollableCardContainer>
        {airports.map((airport) => (
          <Box key={airport.code} sx={{ width: { xs: "240px", sm: "350px" }, flexShrink: 0 }}>
            <AirportCard
              code={airport.code}
              name={airport.name}
              distance={airport.distance}
              details={airport.details}
              link={airport.link}
            />
          </Box>
        ))}
      </ScrollableCardContainer>
    </Box>
  );
}
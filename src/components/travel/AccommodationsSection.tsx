// src/components/travel/AccommodationsSection.tsx
import { Box } from "@mui/material";
import { Hotel } from "lucide-react";
import { colors } from "../../theme";
import { HotelType } from "../../types/travel";
import { SkiTrailMarker } from "./SkiTrailMarker";
import { HotelBlock } from "./HotelBlock";
import { ScrollableCardContainer } from "./ScrollableCardContainer";
import SnowboardingOutlinedIcon from '@mui/icons-material/SnowboardingOutlined';

interface AccommodationsSectionProps {
  hotels: HotelType[];
}

/**
 * Accommodations section displaying hotel options with recommendations
 */
export function AccommodationsSection({ hotels }: AccommodationsSectionProps) {
  return (
    <Box id="accommodations" sx={{ mb: 10 }}>
      <SkiTrailMarker
        icon={<Hotel size={28} />}
        label="Base Lodge (Accommodations)"
        difficulty="green"
        elevation="7,880 ft"
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
          We recommend staying in <strong>Mammoth Lakes</strong>, the
          larger nearby mountain town located about 20 minutes from June
          Lake. It offers a wide range of accommodations, restaurants, and
          amenities. We will be providing a{" "}
          <strong>
            shuttle service from the Mammoth Lakes Village to June Mountain
          </strong>{" "}
          for guests who prefer to enjoy the weekend without renting a car.
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
          Lodging Options
        </Box>
      </Box>

      <ScrollableCardContainer>
        {hotels.map((hotel, index) => (
          <Box key={hotel.name} sx={{ width: { xs: "240px", sm: "400px" }, flexShrink: 0 }}>
            <HotelBlock
              name={hotel.name}
              description={`${hotel.blurb}${
                hotel.savingsNote ? ` ${hotel.savingsNote}` : ""
              }`}
              rooms={
                hotel.rates?.map((rate) => ({
                  type: rate.label,
                  price: rate.price,
                })) || []
              }
              ctaHref={hotel.ctaHref}
            />
          </Box>
        ))}
      </ScrollableCardContainer>

      <Box
        sx={{
          mt: 4,
          p: 2.5,
          borderRadius: "8px",
          border: "2px dashed",
          backgroundColor: colors.offWhite,
          borderColor: colors.warmTaupe,
        }}
      >
        <Box component="p" sx={{ fontSize: "0.875rem", color: colors.deepCharcoal, m: 0 }}>
          <strong><SnowboardingOutlinedIcon sx={{ height: "0.875rem", width: "0.875rem" }}/> Trail Note:</strong> There are also many other hotels,
          Airbnbs, and vacation rentals available in both Mammoth Lakes and
          June Lake. However, please note that shuttles to and from the
          wedding venue will run only from Mammoth Village, so if not
          renting a car, we recommend booking accommodations within walking
          distance of the Village for convenience, as there are no Uber or
          taxi services in town.
        </Box>
      </Box>
    </Box>
  );
}
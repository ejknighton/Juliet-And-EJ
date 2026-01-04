import { Box, Typography } from "@mui/material";
import { LucideIcon } from "lucide-react";
import { colors } from "../../theme";
import TrailheadMarker from "./TrailheadMarker";
import TrailProgressionLine from "./TrailProgressionLine";

interface Event {
  name: string;
  time?: string;
  location?: string;
  details?: string[];
}

interface EventSectionProps {
  icon: LucideIcon;
  title: string;
  date: string;
  events: Event[];
  elevationLabel?: string;
  showProgressionLine?: boolean;
}

/**
 * EventSection - Displays a day's events with trailhead marker header
 * Now includes optional trail progression line to connect sections
 */
export default function EventSection({
  icon,
  title,
  date,
  events,
  elevationLabel,
  showProgressionLine = true,
}: EventSectionProps) {
  return (
    <Box sx={{ mb: 4 }}>
      <TrailheadMarker
        icon={icon}
        label={title}
        elevation={date}
      />

      <Box
        sx={{
          background: `linear-gradient(135deg, transparent 0%, rgba(198, 183, 162, 0.03) 100%), ${colors.offWhite}`,
          border: `2px solid ${colors.warmTaupe}`,
          borderRadius: "8px",
          p: 4,
          boxShadow: 4,
        }}
      >
        {events.map((event, index) => (
          <Box
            key={index}
            sx={{
              mb: events.length > 1 && index < events.length - 1 ? 4 : 0,
              pb: events.length > 1 && index < events.length - 1 ? 4 : 0,
              borderBottom:
                events.length > 1 && index < events.length - 1
                  ? `1px solid ${colors.warmTaupe}`
                  : "none",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: colors.forestPine,
                fontWeight: 600,
                mb: 2,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              {event.name}
            </Typography>

            {event.time && (
              <Typography
                variant="body1"
                sx={{
                  color: colors.deepCharcoal,
                  mb: 1,
                  fontWeight: 500,
                }}
              >
                <strong>Time:</strong> {event.time}
              </Typography>
            )}

            {event.location && (
              <Typography
                variant="body1"
                sx={{
                  color: colors.deepCharcoal,
                  mb: 1,
                  fontWeight: 500,
                }}
              >
                <strong>Location:</strong> {event.location}
              </Typography>
            )}

            {event.details && event.details.length > 0 && (
              <Box
                sx={{
                  mt: 2,
                  p: 2,
                  backgroundColor: "rgba(229, 183, 107, 0.15)",
                  border: `3px dashed ${colors.warmTaupe}`,
                  borderRadius: "4px",
                }}
              >
                {event.details.map((detail, detailIndex) => (
                  <Box
                    key={detailIndex}
                    sx={{
                      display: "flex",
                      gap: 1,
                      alignItems: "flex-start",
                      mb: detailIndex < event.details!.length - 1 ? 1 : 0,
                    }}
                  >
                    <Box sx={{ color: colors.goldenOchre, flexShrink: 0, mt: 0.3 }}>•</Box>
                    <Typography
                      variant="body2"
                      sx={{
                        color: colors.deepCharcoal,
                        lineHeight: 1.6,
                      }}
                    >
                      {detail}
                    </Typography>
                  </Box>
                ))}
              </Box>
            )}
          </Box>
        ))}
      </Box>

      {/* Trail Progression Line */}
      {showProgressionLine && (
        <Box sx={{ mt: 6 }}>
          <TrailProgressionLine height="80px" showMarker />
        </Box>
      )}
    </Box>
  );
}

// src/components/travel/RecommendationCard.tsx
import * as React from "react";
import { Box, Card, Tooltip } from "@mui/material";
import { MapPin } from "lucide-react";
import { colors } from "../../theme";

interface RecommendationCardProps {
  icon: React.ReactNode;
  iconColor: string;
  category: string;
  title: string;
  description: string;
  location?: string;
  link?: string;
  photo?: string;
}

/**
 * Displays activity or recommendation information with category, description, and optional link
 * Used for things to do, restaurants, attractions, etc.
 */
export function RecommendationCard({
  icon,
  iconColor,
  category,
  title,
  description,
  location,
  link,
  photo,
}: RecommendationCardProps) {
  const cardContent = (
    <>
      {/* Photo banner or placeholder */}
      <Box
        sx={{
          width: "100%",
          height: "180px",
          position: "relative",
          overflow: "hidden",
          backgroundColor: iconColor,
          flexShrink: 0,
        }}
      >
        {photo && (
          <Box
            component="img"
            src={photo}
            alt={title}
            loading="lazy"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        )}
      </Box>

      {/* Content section */}
      <Box
        sx={{
          p: 1.5,
          position: "relative",
          backgroundColor: colors.offWhite,
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Subtle pattern */}
        {/* <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "64px",
            height: "64px",
            opacity: 0.05,
            pointerEvents: "none",
            backgroundImage: `repeating-linear-gradient(
              -30deg,
              ${iconColor} 0px,
              ${iconColor} 1px,
              transparent 1px,
              transparent 6px
            )`,
          }}
        /> */}

        <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1, position: "relative" }}>
          {/* {!photo && ( */}
            <Tooltip title={category} arrow placement="top">
              <Box
                sx={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "4px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  backgroundColor: iconColor,
                  // cursor: "help",
                }}
              >
                <Box sx={{ color: colors.offWhite }}>{icon}</Box>
              </Box>
            </Tooltip>
          {/* )} */}
          <Box sx={{ flex: 1 }}>
            <Box component="h4" sx={{ mb: 0.25, color: colors.forestPine, mt: 0, fontSize: "0.875rem" }}>
              {title}
            </Box>
            {location && (
              <Box
                component="p"
                sx={{
                  fontSize: "0.65rem",
                  mb: 0.25,
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                  color: colors.slateGray,
                  m: 0,
                }}
              >
                <MapPin size={12} /> {location}
              </Box>
            )}
            <Box component="p" sx={{ fontSize: "0.75rem", mb: 0, color: colors.deepCharcoal, lineHeight: 1.3 }}>
              {description}
            </Box>
          </Box>
        </Box>

      </Box>
    </>
  );

  return (
    <Card
      component={link ? "a" : "div"}
      href={link || undefined}
      target={link ? "_blank" : undefined}
      rel={link ? "noopener noreferrer" : undefined}
      sx={{
        boxShadow: "none",
        "&:hover": {
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
          transform: "translateY(-4px)"
        },
        transition: "all 0.3s",
        border: "2px solid",
        borderRadius: "8px",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        minWidth: { xs: "240px", sm: "300px" },
        height: "100%",
        backgroundColor: colors.offWhite,
        borderColor: colors.warmTaupe,
        scrollSnapAlign: "start",
        textDecoration: "none",
        cursor: link ? "pointer" : "default",
      }}
    >
      {cardContent}
    </Card>
  );
}

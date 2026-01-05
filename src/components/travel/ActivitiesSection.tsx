// src/components/travel/ActivitiesSection.tsx
import * as React from "react";
import { Box, Select, MenuItem, Checkbox, ListItemText, OutlinedInput, FormControl, Link } from "@mui/material";
import { Compass } from "lucide-react";
import { colors } from "../../theme";
import { ActivityType } from "../../types/travel";
import { getCategoryIconAndColor } from "../../utils/categoryIcons";
import { SkiTrailMarker } from "./SkiTrailMarker";
import { RecommendationCard } from "./RecommendationCard";
import { useScrollFade } from "../../hooks/useScrollFade";
import { ScrollFadeOverlays } from "./ScrollFadeOverlays";
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import { getActivityImage } from "../../utils/activityImages";

interface ActivitiesSectionProps {
  activities: ActivityType[];
}

/**
 * Activities section with filterable recommendations for things to do
 * Includes category filtering functionality
 */
export function ActivitiesSection({ activities }: ActivitiesSectionProps) {
  const [selectedCategories, setSelectedCategories] = React.useState<string[]>([]);

  // Get unique categories from activities
  const categories = Array.from(new Set(activities.map(a => a.category)));

  // Filter activities based on selected categories
  const filteredActivities = selectedCategories.length === 0
    ? activities
    : activities.filter(a => selectedCategories.includes(a.category));

  const handleCategoryChange = (event: any) => {
    const value = event.target.value;
    setSelectedCategories(typeof value === 'string' ? value.split(',') : value);
  };

  // Use scroll fade hook with filteredActivities as dependency
  const { scrollRef, showLeftFade, showRightFade, handleScroll } = useScrollFade([filteredActivities]);

  return (
    <Box id="activities" sx={{ mb: 10 }}>
      <SkiTrailMarker
        icon={<Compass size={28} />}
        label="Terrain Features (Activities)"
        difficulty="black"
        elevation="7,000-11,000 ft"
      />

      <Box sx={{
        display: "flex",
        alignItems: { xs: "flex-start", sm: "center" },
        justifyContent: "space-between",
        flexDirection: { xs: "column", sm: "row" },
        gap: { xs: 1.5, sm: 0 },
        mb: 2
      }}>
        <Box
          component="h3"
          sx={{
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: colors.forestPine,
            m: 0,
            display: "flex",
            alignItems: "center",
            gap: 0.5,
          }}
        >
          Local Recommendations
          <Link
            href="https://maps.app.goo.gl/ynBj4UvH18o5Y4Ji9"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: "flex",
              alignItems: "center",
              color: colors.forestPine,
              "&:hover": {
                color: colors.goldenOchre,
              },
            }}
          >
            <RoomOutlinedIcon sx={{ fontSize: "1.2em" }} />
          </Link>
        </Box>

        <FormControl sx={{ minWidth: { xs: "100%", sm: 200 } }}>
          <Select
            multiple
            displayEmpty
            value={selectedCategories}
            onChange={handleCategoryChange}
            input={<OutlinedInput />}
            renderValue={(selected) => {
              if (selected.length === 0) {
                return <Box sx={{ color: colors.slateGray, fontSize: "0.875rem" }}>Filter by category</Box>;
              }
              return selected.join(', ');
            }}
            sx={{
              backgroundColor: colors.offWhite,
              borderRadius: "4px",
              fontSize: "0.875rem",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: colors.warmTaupe,
                borderWidth: "2px",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: colors.goldenOchre,
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: colors.forestPine,
              },
            }}
            MenuProps={{
              PaperProps: {
                sx: {
                  backgroundColor: colors.offWhite,
                  "& .MuiMenuItem-root": {
                    fontSize: "0.875rem",
                    backgroundColor: colors.offWhite,
                    "&:hover": {
                      backgroundColor: colors.skyLight,
                    },
                    "&.Mui-selected": {
                      backgroundColor: colors.offWhite,
                      "&:hover": {
                        backgroundColor: colors.skyLight,
                      },
                    },
                  },
                },
              },
            }}
          >
            {categories.map((category) => {
              const { icon, color } = getCategoryIconAndColor(category);
              return (
                <MenuItem key={category} value={category}>
                  <Checkbox checked={selectedCategories.indexOf(category) > -1} />
                  <Box
                    sx={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "3px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: color,
                      mr: 1,
                      flexShrink: 0,
                    }}
                  >
                    <Box sx={{ color: colors.offWhite, display: "flex", fontSize: "14px" }}>
                      {icon}
                    </Box>
                  </Box>
                  <ListItemText
                    primary={category}
                    primaryTypographyProps={{ fontSize: "0.875rem" }}
                  />
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>

      <Box sx={{ position: "relative", mx: { xs: -2, sm: -10 } }}>
        <Box
          ref={scrollRef}
          onScroll={handleScroll}
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(auto-fill, 240px)",
              sm: "repeat(auto-fill, 330px)"
            },
            gridTemplateRows: "1fr 1fr",
            gridAutoFlow: "column",
            alignItems: "stretch",
            gap: 2,
            overflowX: "auto",
            pl: { xs: 2, sm: 10 },
            pr: { xs: 2, sm: 2 },
            pb: 3,
            pt: 0.5,
            scrollbarWidth: "thin",
            "&::-webkit-scrollbar": {
              height: "8px",
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: colors.warmTaupe,
              borderRadius: "4px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: colors.goldenOchre,
              borderRadius: "4px",
              "&:hover": {
                backgroundColor: colors.burntOrange,
              },
            },
          }}
        >
          {filteredActivities.map((activity) => {
            const { icon, color } = getCategoryIconAndColor(
              activity.category
            );
            return (
              <Box
                key={activity.name}
                sx={{
                  width: { xs: "240px", sm: "330px" }
                }}
              >
                <RecommendationCard
                  icon={icon}
                  iconColor={color}
                  category={activity.category}
                  title={activity.name}
                  description={activity.note || ""}
                  link={activity.link}
                  photo={getActivityImage(activity.photo)}
                />
              </Box>
            );
          })}
        </Box>

        <ScrollFadeOverlays
          showLeftFade={showLeftFade}
          showRightFade={showRightFade}
          scrollRef={scrollRef}
        />
      </Box>

      <Box
        sx={{
          mt: 8,
          p: 2.5,
          borderRadius: "8px",
          border: "2px dashed",
          backgroundColor: colors.offWhite,
          borderColor: colors.warmTaupe,
        }}
      >
        <Box component="p" sx={{ fontSize: "0.875rem", color: colors.deepCharcoal, m: 0 }}>
          <strong>⛷ Ski Patrol Tip:</strong> June weather can be
          unpredictable! Layers are essential, and always check trail
          conditions before heading out. The area is at high elevation
          (7,000+ feet, Reception 8,695ft), so take it easy if you're not acclimated.
        </Box>
      </Box>
    </Box>
  );
}
# Travel Components

This directory contains reusable components for the Travel & Stay page, organized with a ski trail theme.

## Component Organization

### Basic Components

These are small, reusable UI components that can be used independently:

- **[DifficultySymbol.tsx](DifficultySymbol.tsx)** - Displays ski trail difficulty symbols (●, ■, ◆)
- **[SkiTrailMarker.tsx](SkiTrailMarker.tsx)** - Decorative section header styled as a ski trail sign
- **[ScrollableCardContainer.tsx](ScrollableCardContainer.tsx)** - Horizontally scrollable container with custom scrollbar styling

### Card Components

These components display specific types of information in card format:

- **[HotelBlock.tsx](HotelBlock.tsx)** - Hotel accommodation card with pricing and amenities
- **[AirportCard.tsx](AirportCard.tsx)** - Airport information card with distance and details
- **[RecommendationCard.tsx](RecommendationCard.tsx)** - Activity/recommendation card with category badges

### Section Components

These are larger components that compose multiple basic components into complete page sections:

- **[AccommodationsSection.tsx](AccommodationsSection.tsx)** - Complete accommodations section with hotel listings
- **[AirportsSection.tsx](AirportsSection.tsx)** - Complete airports section with flight options
- **[ActivitiesSection.tsx](ActivitiesSection.tsx)** - Activities section with category filtering
- **[TransportationSection.tsx](TransportationSection.tsx)** - Local transportation information section

### Layout Components

These components handle page-level layout and decoration:

- **[BackgroundDecorations.tsx](BackgroundDecorations.tsx)** - SVG background elements (contour lines, ski runs)
- **[PageHeader.tsx](PageHeader.tsx)** - Page header with trail map branding
- **[PageFooter.tsx](PageFooter.tsx)** - Summit marker footer section

## Usage Example

```tsx
import {
  BackgroundDecorations,
  PageHeader,
  AccommodationsSection,
  ActivitiesSection,
} from "../components/travel";

function MyPage() {
  return (
    <Box>
      <BackgroundDecorations />
      <PageHeader />
      <AccommodationsSection hotels={hotelsData} />
      <ActivitiesSection activities={activitiesData} />
    </Box>
  );
}
```

## Related Files

- **[/src/types/travel.ts](/src/types/travel.ts)** - TypeScript type definitions
- **[/src/utils/categoryIcons.tsx](/src/utils/categoryIcons.tsx)** - Category icon mapping utility
- **[/src/pages/TravelStay.tsx](/src/pages/TravelStay.tsx)** - Main page that uses these components

## Design Theme

All components follow a ski resort/mountain theme with:
- Ski trail difficulty markers (green, blue, black)
- Decorative ski slope patterns
- Nature-inspired color palette from the theme
- Mountain and outdoor activity iconography

## Extending

To add new sections:
1. Create a new section component in this directory
2. Import and use basic/card components as needed
3. Export from [index.ts](index.ts)
4. Use in the main [TravelStay.tsx](/src/pages/TravelStay.tsx) page
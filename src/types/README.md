# Type Definitions

This directory contains TypeScript type definitions used throughout the application.

## Files

### [travel.ts](travel.ts)

Type definitions for travel and accommodation related data:

- **`Rate`** - Hotel rate pricing information
- **`HotelType`** - Hotel accommodation details
- **`AirportType`** - Airport information
- **`ActivityType`** - Activity/recommendation details
- **`SkiDifficulty`** - Ski trail difficulty levels ("green" | "blue" | "black")

### [static-assets.d.ts](static-assets.d.ts)

Type declarations for importing static assets (images, JSON files, etc.)

## Usage

```typescript
import { HotelType, AirportType, ActivityType } from "../types/travel";

const hotels: HotelType[] = hotelsData.hotels;
const airports: AirportType[] = airportsData.airports;
```

## Adding New Types

When adding new types:
1. Create a new `.ts` file in this directory if the types are for a new domain
2. Export all types using `export type`
3. Add documentation comments describing the purpose of each type
4. Update this README with the new file information

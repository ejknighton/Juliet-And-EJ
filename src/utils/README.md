# Utility Functions

This directory contains reusable utility functions and helper modules.

## Files

### [categoryIcons.tsx](categoryIcons.tsx)

Maps activity categories to their corresponding icons and colors.

**Function:**
- `getCategoryIconAndColor(category: string)` - Returns an icon component and color for a given category

**Supported Categories:**
- Hiking → Trees icon, forest pine color
- Activities → Activity icon, burnt orange color
- Shopping → Shopping bag icon, dusty rose color
- Restaurant → Utensils icon, golden ochre color
- Scenic → Camera icon, sky mist color
- Wedding → Heart icon, dusty rose color
- Default → Compass icon, deep charcoal color

**Usage:**
```typescript
import { getCategoryIconAndColor } from "../utils/categoryIcons";

const { icon, color } = getCategoryIconAndColor("Hiking");
// Returns: { icon: <Trees size={20} />, color: colors.forestPine }
```

## Adding New Utilities

When adding new utility functions:
1. Create focused, single-purpose utility files
2. Export named functions (avoid default exports)
3. Add JSDoc comments documenting parameters and return values
4. Update this README with usage examples
5. Consider if the utility should be tested

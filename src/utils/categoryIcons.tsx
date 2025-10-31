// src/utils/categoryIcons.tsx
import * as React from "react";
import {
  Trees,
  Activity,
  ShoppingBag,
  Utensils,
  Camera,
  Heart,
  Compass,
} from "lucide-react";
import { colors } from "../theme";

/**
 * Maps activity categories to their corresponding icon and color
 * @param category - The activity category name
 * @returns An object containing the icon component and associated color
 */
export function getCategoryIconAndColor(
  category: string
): { icon: React.ReactNode; color: string } {
  const categoryMap: Record<string, { icon: React.ReactNode; color: string }> =
    {
      Hiking: { icon: <Trees size={20} />, color: colors.forestPine },
      Activities: { icon: <Activity size={20} />, color: colors.burntOrange },
      Shopping: { icon: <ShoppingBag size={20} />, color: colors.dustyRose },
      Restaurant: { icon: <Utensils size={20} />, color: colors.goldenOchre },
      Scenic: { icon: <Camera size={20} />, color: colors.skyMist },
      Wedding: { icon: <Heart size={20} />, color: colors.dustyRose },
    };

  return (
    categoryMap[category] || {
      icon: <Compass size={20} />,
      color: colors.deepCharcoal,
    }
  );
}
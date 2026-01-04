// Activity photo imports for Vite build processing
// This ensures images are properly bundled and hashed during production builds

import bishopVista from "@assets/photos/activities/bishop_vista.jpg";
import crowleyLakeSouth from "@assets/photos/activities/crowley_lake_south.jpg";
import devilsPostpile from "@assets/photos/activities/devils_postpile.jpg";
import distantBrewing from "@assets/photos/activities/distant_brewing.png";
import horshoeLakeLoop from "@assets/photos/activities/horshoe_lake_loop.jpg";
import juneLakeBeach from "@assets/photos/activities/june_lake_beach.JPG";
import juneLakeBrewing from "@assets/photos/activities/june_lake_brewing.jpg";
import juneLakeLoopBike from "@assets/photos/activities/june_lake_loop_bike.jpg";
import juneMountain from "@assets/photos/activities/june_mountain.jpg";
import kayaking from "@assets/photos/activities/kayaking.jpg";
import mammothBrewery from "@assets/photos/activities/mammoth_brewery.jpg";
import mammothCoffeeRoastingCo from "@assets/photos/activities/mammoth_coffee_roasting_co.png";
import monoLakeBoardwalk from "@assets/photos/activities/mono_lake_boardwalk.jpg";
import monoLakeOverlook from "@assets/photos/activities/mono_lake_overlook.jpg";
import reversedPeak from "@assets/photos/activities/reversed_peak.jpg";
import schatsBakery from "@assets/photos/activities/schats_bakery.jpg";
import shelterDistilling from "@assets/photos/activities/shelter_distilling.jpg";
import sherwinLakes from "@assets/photos/activities/sherwin_lakes.jpg";
import twinLakes from "@assets/photos/activities/twin_lakes.jpg";

/**
 * Maps photo filenames (as stored in JSON) to their imported asset URLs
 * This allows Vite to properly process and bundle images during the build
 */
export const activityImages: Record<string, string> = {
  "/src/assets/photos/activities/bishop_vista.jpg": bishopVista,
  "/src/assets/photos/activities/crowley_lake_south.jpg": crowleyLakeSouth,
  "/src/assets/photos/activities/devils_postpile.jpg": devilsPostpile,
  "/src/assets/photos/activities/distant_brewing.png": distantBrewing,
  "/src/assets/photos/activities/horshoe_lake_loop.jpg": horshoeLakeLoop,
  "/src/assets/photos/activities/june_lake_beach.jpg": juneLakeBeach,
  "/src/assets/photos/activities/june_lake_beach.JPG": juneLakeBeach,
  "/src/assets/photos/activities/june_lake_brewing.jpg": juneLakeBrewing,
  "/src/assets/photos/activities/june_lake_loop_bike.jpg": juneLakeLoopBike,
  "/src/assets/photos/activities/june_mountain.jpg": juneMountain,
  "/src/assets/photos/activities/kayaking.jpg": kayaking,
  "/src/assets/photos/activities/mammoth_brewery.jpg": mammothBrewery,
  "/src/assets/photos/activities/mammoth_coffee_roasting_co.png": mammothCoffeeRoastingCo,
  "/src/assets/photos/activities/mono_lake_boardwalk.jpg": monoLakeBoardwalk,
  "/src/assets/photos/activities/mono_lake_overlook.jpg": monoLakeOverlook,
  "/src/assets/photos/activities/reversed_peak.jpg": reversedPeak,
  "/src/assets/photos/activities/schats_bakery.jpg": schatsBakery,
  "/src/assets/photos/activities/shelter_distilling.jpg": shelterDistilling,
  "/src/assets/photos/activities/sherwin_lakes.jpg": sherwinLakes,
  "/src/assets/photos/activities/twin_lakes.jpg": twinLakes,
};

/**
 * Resolves a photo path from JSON to the actual bundled asset URL
 * Returns undefined if the photo path is not found in the manifest
 */
export function getActivityImage(photoPath: string | undefined): string | undefined {
  if (!photoPath) return undefined;
  return activityImages[photoPath];
}

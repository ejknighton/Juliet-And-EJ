// Activity photo imports for Vite build processing
// This ensures images are properly bundled and hashed during production builds

import bishopVista from "@assets/photos/activities/bishop_vista.jpg";
import blackVelvet from "@assets/photos/activities/black_velvet.jpg";
import bowl from "@assets/photos/activities/bowl.jpg";
import castOff from "@assets/photos/activities/cast_off.jpg";
import crowleyLakeSouth from "@assets/photos/activities/crowley_lake_south.jpg";
import devilsPostpile from "@assets/photos/activities/devils_postpile.jpg";
import distantBrewing from "@assets/photos/activities/distant_brewing.png";
import horshoeLakeLoop from "@assets/photos/activities/horshoe_lake_loop.jpg";
import juneLakeBeach from "@assets/photos/activities/june_lake_beach.JPG";
import juneLakeBrewing from "@assets/photos/activities/june_lake_brewing.jpg";
import juneLakeLoopBike from "@assets/photos/activities/june_lake_loop_bike.jpg";
import juneMountain from "@assets/photos/activities/june_mountain.jpg";
import kayaking from "@assets/photos/activities/kayaking.jpg";
import mainStreetPizzaAndTap from "@assets/photos/activities/main_street_pizza_and_tap.jpg";
import mammothBrewery from "@assets/photos/activities/mammoth_brewery.jpg";
import mammothCoffeeRoastingCo from "@assets/photos/activities/mammoth_coffee_roasting_co.png";
import monoLakeBoardwalk from "@assets/photos/activities/mono_lake_boardwalk.jpg";
import monoLakeOverlook from "@assets/photos/activities/mono_lake_overlook.jpg";
import nyBagel from "@assets/photos/activities/ny_bagel.jpg";
import reversedPeak from "@assets/photos/activities/reversed_peak.jpg";
import schatsBakery from "@assets/photos/activities/schats_bakery.jpg";
import secondChance from "@assets/photos/activities/second_chance.jpg";
import shelterDistilling from "@assets/photos/activities/shelter_distilling.jpg";
import sherwinLakes from "@assets/photos/activities/sherwin_lakes.jpg";
import sideDoor from "@assets/photos/activities/side_door.jpg";
import smokeShack from "@assets/photos/activities/smoke_shack.jpg";
import tigerBar from "@assets/photos/activities/tiger_bar.jpg";
import twinLakes from "@assets/photos/activities/twin_lakes.jpg";

/**
 * Maps photo filenames (as stored in JSON) to their imported asset URLs
 * This allows Vite to properly process and bundle images during the build
 */
export const activityImages: Record<string, string> = {
  "/src/assets/photos/activities/bishop_vista.jpg": bishopVista,
  "/src/assets/photos/activities/black_velvet.jpg": blackVelvet,
  "/src/assets/photos/activities/bowl.jpg": bowl,
  "/src/assets/photos/activities/cast_off.jpg": castOff,
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
  "/src/assets/photos/activities/main_street_pizza_and_tap.jpg": mainStreetPizzaAndTap,
  "/src/assets/photos/activities/mammoth_brewery.jpg": mammothBrewery,
  "/src/assets/photos/activities/mammoth_coffee_roasting_co.png": mammothCoffeeRoastingCo,
  "/src/assets/photos/activities/mono_lake_boardwalk.jpg": monoLakeBoardwalk,
  "/src/assets/photos/activities/mono_lake_overlook.jpg": monoLakeOverlook,
  "/src/assets/photos/activities/ny_bagel.jpg": nyBagel,
  "/src/assets/photos/activities/reversed_peak.jpg": reversedPeak,
  "/src/assets/photos/activities/schats_bakery.jpg": schatsBakery,
  "/src/assets/photos/activities/second_chance.jpg": secondChance,
  "/src/assets/photos/activities/shelter_distilling.jpg": shelterDistilling,
  "/src/assets/photos/activities/sherwin_lakes.jpg": sherwinLakes,
  "/src/assets/photos/activities/side_door.jpg": sideDoor,
  "/src/assets/photos/activities/smoke_shack.jpg": smokeShack,
  "/src/assets/photos/activities/tiger_bar.jpg": tigerBar,
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

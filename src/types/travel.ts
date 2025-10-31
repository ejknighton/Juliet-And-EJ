// src/types/travel.ts

/**
 * Represents a rate option for hotel accommodations
 */
export type Rate = {
  label: string;
  price: string;
};

/**
 * Hotel accommodation information
 */
export type HotelType = {
  name: string;
  blurb: string;
  savingsNote?: string;
  rates?: Rate[];
  ctaLabel?: string;
  ctaHref?: string;
};

/**
 * Airport information for travel planning
 */
export type AirportType = {
  code: string;
  name: string;
  distance: string;
  details: string;
  link?: string;
};

/**
 * Activity or recommendation information
 */
export type ActivityType = {
  name: string;
  category: string;
  note?: string;
  link?: string;
  photo?: string;
};

/**
 * Ski trail difficulty levels
 */
export type SkiDifficulty = "green" | "blue" | "black";
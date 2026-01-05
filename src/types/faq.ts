/**
 * Represents a single FAQ item (question and answer)
 */
export type FAQItem = {
  question: string;
  answer: string | string[]; // String for single paragraph, array for multiple
  list?: string[]; // Optional bullet list after answer text
};

/**
 * Represents a category of related FAQ items
 */
export type FAQCategory = {
  id: string; // For aria-labelledby (e.g., "lodging-logistics")
  title: string; // Display title (e.g., "Lodging & Logistics")
  items: FAQItem[];
};

/**
 * Complete FAQ data structure
 */
export type FAQData = {
  introduction: string | string[]; // Intro paragraph(s) before categories
  categories: FAQCategory[];
};

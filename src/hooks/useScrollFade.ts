// src/hooks/useScrollFade.ts
import * as React from "react";

/**
 * Custom hook to manage scroll-based fade gradients for horizontally scrollable containers
 * Returns scroll ref, fade visibility states, and scroll handler
 */
export function useScrollFade(dependencies: any[] = []) {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [showLeftFade, setShowLeftFade] = React.useState(false);
  const [showRightFade, setShowRightFade] = React.useState(false);

  const handleScroll = React.useCallback(() => {
    if (!scrollRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

    // Show left fade if scrolled past 5px (reduced threshold for smoother transition)
    setShowLeftFade(scrollLeft > 5);

    // Show right fade if there's more content to scroll
    // Only show if scrollWidth is actually greater than clientWidth
    const hasOverflow = scrollWidth > clientWidth;
    const isAtEnd = scrollLeft >= scrollWidth - clientWidth - 5;
    setShowRightFade(hasOverflow && !isAtEnd);
  }, []);

  React.useEffect(() => {
    // Use requestAnimationFrame for smoother updates
    const rafId = requestAnimationFrame(() => {
      handleScroll();
    });

    return () => cancelAnimationFrame(rafId);
  }, [handleScroll, ...dependencies]);

  return {
    scrollRef,
    showLeftFade,
    showRightFade,
    handleScroll,
  };
}
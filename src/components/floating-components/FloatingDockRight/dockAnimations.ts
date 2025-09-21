import { gsap } from 'gsap';
import { RefObject } from 'react';

export const handleMouseEnter = (
  index: number,
  itemsRef: RefObject<(HTMLAnchorElement | null)[]>,
  labelsRef: RefObject<(HTMLParagraphElement | null)[]>
) => {
  const item = itemsRef.current?.[index];
  const label = labelsRef.current?.[index];
  const icon = item?.querySelector('svg');

  // Animate the dock item - shift it left out of container
  if (item) {
    gsap.to(item, {
      x: -20,
      scale: 1.1,
      duration: 0.3,
      ease: "back.out(1.7)"
    });
  }

  // Animate the icon
  if (icon) {
    gsap.to(icon, {
      scale: 1.2,
      rotation: 5,
      duration: 0.3,
      ease: "back.out(1.7)"
    });
  }

  // Animate the label - show with height and opacity
  if (label) {
    gsap.to(label, {
      opacity: 1,
      scale: 1,
      height: "auto",
      marginTop: "6px",
      duration: 0.25,
      ease: "back.out(1.7)"
    });
  }

  // Add a subtle bounce to neighboring items
  const prevItem = itemsRef.current?.[index - 1];
  const nextItem = itemsRef.current?.[index + 1];

  if (prevItem) {
    gsap.to(prevItem, {
      scale: 1.05,
      duration: 0.2,
      ease: "power2.out"
    });
  }

  if (nextItem) {
    gsap.to(nextItem, {
      scale: 1.05,
      duration: 0.2,
      ease: "power2.out"
    });
  }
};

export const handleMouseLeave = (
  index: number,
  itemsRef: RefObject<(HTMLAnchorElement | null)[]>,
  labelsRef: RefObject<(HTMLParagraphElement | null)[]>
) => {
  const item = itemsRef.current?.[index];
  const label = labelsRef.current?.[index];
  const icon = item?.querySelector('svg');

  // Reset the dock item position and scale
  if (item) {
    gsap.to(item, {
      x: 0,
      scale: 1,
      duration: 0.3,
      ease: "back.out(1.7)"
    });
  }

  // Reset the icon
  if (icon) {
    gsap.to(icon, {
      scale: 1,
      rotation: 0,
      duration: 0.3,
      ease: "back.out(1.7)"
    });
  }

  // Hide the label by collapsing height and fading out
  if (label) {
    gsap.to(label, {
      opacity: 0,
      scale: 0.8,
      height: 0,
      margin: 0,
      duration: 0.2,
      ease: "power2.out"
    });
  }

  // Reset neighboring items
  const prevItem = itemsRef.current?.[index - 1];
  const nextItem = itemsRef.current?.[index + 1];

  if (prevItem) {
    gsap.to(prevItem, {
      scale: 1,
      duration: 0.2,
      ease: "power2.out"
    });
  }

  if (nextItem) {
    gsap.to(nextItem, {
      scale: 1,
      duration: 0.2,
      ease: "power2.out"
    });
  }
};
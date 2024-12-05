"use client";

import { RefObject } from 'react';
import { ViewState } from '@/lib/types';

export function useZoom(containerRef: RefObject<HTMLDivElement>) {
  const handleZoom = (delta: number, mouseX: number, currentState: ViewState) => {
    const newScale = Math.min(Math.max(0.5, currentState.scale + delta), 5);
    
    if (!containerRef.current) return currentState;

    const rect = containerRef.current.getBoundingClientRect();
    const relativeMouseX = mouseX - rect.left - 96; // Adjust for the stage label width (24rem)
    const scrollLeft = containerRef.current.scrollLeft;
    
    // Calculate the point we're zooming around in the content space
    const zoomPoint = (relativeMouseX + scrollLeft) / currentState.scale;
    
    // Calculate the new position to maintain the same relative position after scaling
    const newTranslateX = -zoomPoint * (newScale - currentState.scale);
    
    return {
      scale: newScale,
      translateX: currentState.translateX + newTranslateX,
    };
  };

  return handleZoom;
}
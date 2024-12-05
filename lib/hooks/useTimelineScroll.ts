"use client";

import { useEffect, RefObject } from 'react';
import { ViewState } from '@/lib/types';
import { getTimelinePositionPercentage } from '@/lib/date-utils';

export function useTimelineScroll(
  containerRef: RefObject<HTMLDivElement>,
  startTime: Date,
  endTime: Date,
  viewState: ViewState
) {
  useEffect(() => {
    if (!containerRef.current) return;

    const now = new Date();
    const eventDate = new Date(startTime);
    let focusPosition = 0;

    if (now < eventDate) {
      focusPosition = 0;
    } else if (now > endTime) {
      focusPosition = 100;
    } else {
      focusPosition = getTimelinePositionPercentage(now, startTime, endTime);
    }

    const containerWidth = containerRef.current.clientWidth;
    const scrollPosition = (containerWidth * focusPosition * viewState.scale) / 100 - containerWidth / 2;

    requestAnimationFrame(() => {
      if (containerRef.current) {
        containerRef.current.scrollLeft = scrollPosition;
      }
    });
  }, [containerRef, startTime, endTime, viewState.scale]);
}
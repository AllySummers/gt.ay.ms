"use client";

import { useEffect, useState } from 'react';
import { formatTime, getTimelinePositionPercentage, createTimeIntervals } from '@/lib/date-utils';
import { ViewState } from '@/lib/types';

interface TimelineProps {
  startTime: Date;
  endTime: Date;
  currentTime: Date;
  viewState: ViewState;
}

export function Timeline({ startTime, endTime, currentTime, viewState }: TimelineProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const timeIntervals = createTimeIntervals(startTime, endTime, 30);

  if (!mounted) {
    return null;
  }

  const containerStyle = {
    width: `${100 * viewState.scale}%`,
    transform: `translateX(${viewState.translateX}px)`,
  };

  return (
    <div className="sticky top-0 overflow-hidden bg-gray-900 ml-24 z-10">
      <div 
        className="relative h-12"
        style={containerStyle}
      >
        {timeIntervals.map((time, index) => {
          const position = getTimelinePositionPercentage(time, startTime, endTime);
          return (
            <div
              key={index}
              className="absolute top-0 border-l border-gray-700 h-full"
              style={{ left: `${position}%` }}
            >
              <span className="text-sm text-gray-400 absolute left-2 top-1 whitespace-pre">
                {formatTime(time)}
              </span>
            </div>
          );
        })}
        <div
          className="absolute top-0 w-0.5 bg-blue-500 h-full"
          style={{
            left: `${getTimelinePositionPercentage(currentTime, startTime, endTime)}%`,
          }}
        />
      </div>
    </div>
  );
}
"use client";

import { Stage, Event, ViewState } from '@/lib/types';
import { EventBlock } from './EventBlock';

interface StageTrackProps {
  stage: Stage;
  events: Event[];
  startTime: Date;
  endTime: Date;
  viewState: ViewState;
}

export function StageTrack({ stage, events, startTime, endTime, viewState }: StageTrackProps) {
  const containerStyle = {
    width: `${100 * viewState.scale}%`,
    transform: `translateX(${viewState.translateX}px)`,
  };

  return (
    <div className="relative h-24 border-b border-gray-800">
      <div className="absolute left-0 top-0 w-24 h-full flex items-center px-2 bg-gray-900 z-20">
        <h3 className="font-semibold text-gray-100 text-sm truncate">{stage.name}</h3>
      </div>
      <div className="relative ml-24 h-full bg-gray-950">
        <div style={containerStyle} className="relative h-full">
          {events.map((event) => (
            <EventBlock
              key={event.id}
              event={event}
              startTime={startTime}
              endTime={endTime}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
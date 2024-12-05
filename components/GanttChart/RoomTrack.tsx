"use client";

import { Room, Event } from '@/lib/types';
import { EventBlock } from './EventBlock';

interface RoomTrackProps {
  room: Room;
  events: Event[];
  startTime: Date;
  endTime: Date;
}

export function RoomTrack({ room, events, startTime, endTime }: RoomTrackProps) {
  const roomEvents = events.filter((event) => event.room === room.id);

  return (
    <div className="relative h-20 border-b border-gray-100">
      <div className="absolute left-0 top-0 w-40 h-full flex items-center px-4 bg-gray-50 z-10">
        <h3 className="font-medium truncate">{room.name}</h3>
      </div>
      <div className="relative ml-40 h-full">
        {roomEvents.map((event) => (
          <EventBlock
            key={event.id}
            event={event}
            startTime={startTime}
            endTime={endTime}
          />
        ))}
      </div>
    </div>
  );
}
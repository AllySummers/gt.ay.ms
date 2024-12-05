"use client";

import { Event } from '@/lib/types';
import { formatTime, getTimelinePositionPercentage } from '@/lib/date-utils';
import { Card } from '@/components/ui/card';
import { useState, useEffect, useRef } from 'react';
import { EventModal } from './EventModal';

interface EventBlockProps {
  event: Event;
  startTime: Date;
  endTime: Date;
}

export function EventBlock({ event, startTime, endTime }: EventBlockProps) {
  const [mounted, setMounted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showTime, setShowTime] = useState(true);
  const timeRef = useRef<HTMLParagraphElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && containerRef.current && timeRef.current) {
      const containerHeight = containerRef.current.clientHeight;
      const timeHeight = timeRef.current.scrollHeight;
      setShowTime(containerHeight >= timeHeight * 2); // Show time only if there's enough space for both title and time
    }
  }, [mounted]);

  if (!mounted) {
    return null;
  }

  const left = getTimelinePositionPercentage(event.start, startTime, endTime);
  const width = getTimelinePositionPercentage(event.end, startTime, endTime) - left;

  return (
    <>
      <Card
        className="absolute top-2 h-20 rounded-md p-2 cursor-pointer hover:shadow-lg transition-shadow group z-10"
        style={{
          left: `${left}%`,
          width: `${width}%`,
          backgroundColor: `hsl(var(--chart-${parseInt(event.id) % 5 + 1}))`,
        }}
        onClick={() => setIsModalOpen(true)}
      >
        <div ref={containerRef} className="text-white h-full flex flex-col justify-between">
          <h3 className="font-bold text-sm md:text-base truncate group-hover:underline">
            {event.title}
          </h3>
          {showTime && (
            <p ref={timeRef} className="text-xs opacity-90 truncate">
              {formatTime(event.start)} - {formatTime(event.end)}
            </p>
          )}
        </div>
      </Card>
      <EventModal 
        event={event}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
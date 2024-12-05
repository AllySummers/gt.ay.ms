"use client";

import { GanttChart } from '@/components/GanttChart/GanttChart';
import { stages, events } from '@/lib/festival-data';
import { parseAustralianTime } from '@/lib/date-utils';

// Festival times in Sydney timezone
const startTime = parseAustralianTime('12:00');
const endTime = parseAustralianTime('23:59');

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950">
      <div className="mx-auto">
        <div className="mb-4 text-center pt-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Good Things 2024</h1>
          <p className="text-xl text-gray-300">Saturday, 7 December • Centennial Park, Sydney</p>
        </div>
        <div className="bg-gray-900 rounded-xl shadow-2xl overflow-hidden border border-gray-800">
          <GanttChart
            stages={stages}
            events={events}
            startTime={startTime}
            endTime={endTime}
          />
        </div>
      </div>
    </div>
  );
}
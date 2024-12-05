"use client";

import { useState, useEffect, useRef } from 'react';
import { Timeline } from './Timeline';
import { StageTrack } from './StageTrack';
import { Stage, Event, ViewState } from '@/lib/types';
import { ZoomControls } from './ZoomControls';
import { useTimelineScroll } from '@/lib/hooks/useTimelineScroll';
import { useZoom } from '@/lib/hooks/useZoom';

interface GanttChartProps {
  stages: Stage[];
  events: Event[];
  startTime: Date;
  endTime: Date;
}

export function GanttChart({ stages, events, startTime, endTime }: GanttChartProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [mounted, setMounted] = useState(false);
  const [viewState, setViewState] = useState<ViewState>({
    scale: 1.5,
    translateX: 0,
  });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, translateX: 0 });

  const handleZoom = useZoom(containerRef);
  useTimelineScroll(containerRef, startTime, endTime, viewState);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX,
      translateX: viewState.translateX,
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      const dx = e.clientX - dragStart.x;
      setViewState(prev => ({
        ...prev,
        translateX: dragStart.translateX + dx,
      }));
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (e.ctrlKey || e.metaKey) {
      e.preventDefault();
      const delta = -e.deltaY * 0.001;
      const newViewState = handleZoom(delta, e.clientX, viewState);
      setViewState(newViewState);
    } else {
      setViewState(prev => ({
        ...prev,
        translateX: prev.translateX - e.deltaX,
      }));
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="relative h-[calc(100vh-8rem)]" ref={containerRef}>
      <ZoomControls
        scale={viewState.scale}
        onZoomChange={(scale) => setViewState(prev => ({ ...prev, scale }))}
      />
      <div 
        className="h-full overflow-y-auto hide-scrollbar select-none cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onWheel={handleWheel}
      >
        <Timeline
          startTime={startTime}
          endTime={endTime}
          currentTime={currentTime}
          viewState={viewState}
        />
        <div className="relative">
          {stages.map((stage) => (
            <StageTrack
              key={stage.id}
              stage={stage}
              events={events.filter(event => event.room === stage.id)}
              startTime={startTime}
              endTime={endTime}
              viewState={viewState}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
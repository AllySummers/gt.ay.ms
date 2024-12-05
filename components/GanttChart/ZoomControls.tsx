"use client";

import { Minus, Plus, RotateCcw } from 'lucide-react';

interface ZoomControlsProps {
  scale: number;
  onZoomChange: (scale: number) => void;
}

export function ZoomControls({ scale, onZoomChange }: ZoomControlsProps) {
  const MIN_SCALE = 0.5;
  const MAX_SCALE = 3;
  const STEP = 0.2;

  const handleZoomIn = () => {
    onZoomChange(Math.min(scale + STEP, MAX_SCALE));
  };

  const handleZoomOut = () => {
    onZoomChange(Math.max(scale - STEP, MIN_SCALE));
  };

  const handleReset = () => {
    onZoomChange(1);
  };

  return (
    <div className="absolute top-4 right-4 flex gap-2 bg-gray-800 rounded-lg p-1 z-20">
      <button
        onClick={handleZoomOut}
        className="p-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md transition-colors"
        disabled={scale <= MIN_SCALE}
      >
        <Minus size={16} />
      </button>
      <button
        onClick={handleReset}
        className="p-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md transition-colors"
      >
        <RotateCcw size={16} />
      </button>
      <button
        onClick={handleZoomIn}
        className="p-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md transition-colors"
        disabled={scale >= MAX_SCALE}
      >
        <Plus size={16} />
      </button>
    </div>
  );
}
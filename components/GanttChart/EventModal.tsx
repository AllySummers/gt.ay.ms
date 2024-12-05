"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Event } from '@/lib/types';
import { formatTime } from '@/lib/date-utils';

interface EventModalProps {
  event: Event;
  isOpen: boolean;
  onClose: () => void;
}

export function EventModal({ event, isOpen, onClose }: EventModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gray-900 text-white border-gray-800">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">{event.title}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium text-gray-400">Time</h4>
            <p className="text-lg">
              {formatTime(event.start)} - {formatTime(event.end)}
            </p>
          </div>
          {event.description && (
            <div>
              <h4 className="text-sm font-medium text-gray-400">Description</h4>
              <p className="text-gray-200">{event.description}</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
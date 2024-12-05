export function formatTime(date: Date): string {
  const time = date.toLocaleTimeString(undefined, {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
  
  // Split time and meridiem
  const [timeStr, meridiem] = time.split(' ');
  return `${timeStr}\n${meridiem}`;
}

export function getTimelinePositionPercentage(date: Date, startTime: Date, endTime: Date): number {
  const total = endTime.getTime() - startTime.getTime();
  const current = date.getTime() - startTime.getTime();
  return (current / total) * 100;
}

export function createTimeIntervals(startTime: Date, endTime: Date, intervalMinutes: number = 30): Date[] {
  const intervals: Date[] = [];
  let currentTime = new Date(startTime);

  while (currentTime <= endTime) {
    intervals.push(new Date(currentTime));
    currentTime = new Date(currentTime.getTime() + intervalMinutes * 60000);
  }

  return intervals;
}

export function parseAustralianTime(timeStr: string, dateStr: string = '2024-12-07'): Date {
  const [hours, minutes] = timeStr.split(':').map(Number);
  
  // Create date in Sydney timezone
  const sydneyDate = new Date(`${dateStr}T${timeStr}:00+11:00`);
  
  // Convert to local timezone
  const localDate = new Date(sydneyDate.toLocaleString('en-US', { timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone }));
  
  return localDate;
}
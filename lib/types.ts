export interface Event {
  id: string;
  title: string;
  start: Date;
  end: Date;
  room: string;
  description?: string;
}

export interface Stage {
  id: string;
  name: string;
  color?: string;
}

export interface TimeBlock {
  hour: number;
  minute: number;
}

export interface ViewState {
  scale: number;
  translateX: number;
}
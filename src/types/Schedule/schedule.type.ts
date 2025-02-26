import { Response } from "../Util/response.type";

export interface Schedule {
  date: string[];
  id: number;
  name: string;
  place: string;
  targetGrades: string[];
}

export interface eventSchedule {
  id: number;
  title: string;
  target: string;
  attendees: string[];
  location: string;
  category: string;
  isReadOnly: boolean;
  borderColor: string;
  backgroundColor: string;
  start: string;
  end: string;
  state: null;
}

export interface SchedulesResponse extends Response {
  data: Schedule[];
}

export interface SchduelsByDateResponse extends Response {
  data: Schedule[];
}

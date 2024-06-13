import { Response } from "../util/response.type";

export interface Schedule {
  date: string[];
  id: number;
  name: string;
  place: string;
  targetGrades: string[];
}

export interface SchedulesResponse extends Response {
  data: Schedule[];
}

export interface SchduelsByDateResponse extends Response {
  data: Schedule[];
}

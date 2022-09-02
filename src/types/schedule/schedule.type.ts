import { Response } from "../util/response.type";

export interface Schedule {
  endDate: string;
  id: number;
  name: string;
  place: string;
  startDate: string;
  target: string;
}

export interface SchedulesResponse extends Response {
  data: Schedule[];
}

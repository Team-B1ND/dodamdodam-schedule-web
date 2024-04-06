import { Response } from "../util/response.type";

export interface Schedule {
  endDate: string;
  id: number;
  name: string;
  place: string;
  type: "ACADEMIC" | "HOLIDAY";
  startDate: string;
  targetGrades: string[];
}

export interface SchedulesResponse extends Response {
  data: Schedule[];
}

export interface SchduelsByDateResponse extends Response {
  data: Schedule[];
}

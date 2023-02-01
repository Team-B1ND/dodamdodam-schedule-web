import { AxiosError } from "axios";
import { useQuery, UseQueryOptions, UseQueryResult } from "react-query";
import {
  getSchedulesByDateParam,
  getSchedulesParam,
} from "../../repository/schedule/schedule.param";
import scheduleRepository from "../../repository/schedule/schedule.repository";
import {
  SchduelsByDateResponse,
  SchedulesResponse,
} from "../../types/schedule/schedule.type";

export const useGetSchedules = ({
  page,
  limit,
}: getSchedulesParam): UseQueryResult<SchedulesResponse, AxiosError> =>
  useQuery(
    ["schedule/getSchedules", page],
    () => scheduleRepository.getSchedules({ page, limit }),
    {
      staleTime: 1000 * 60,
      cacheTime: 1000 * 60 * 60,
    }
  );

export const useGetSchedulesByDate = (
  { startDate, endDate }: getSchedulesByDateParam,
  options?: UseQueryOptions<
    SchduelsByDateResponse,
    AxiosError,
    SchduelsByDateResponse,
    ["schedule/getSchedulesByDate", string]
  >
): UseQueryResult<SchduelsByDateResponse, AxiosError> =>
  useQuery(
    ["schedule/getSchedulesByDate", `${startDate}~${endDate}`],
    () => scheduleRepository.getSchedulesByDate({ startDate, endDate }),
    {
      enabled: !!startDate && !!endDate,
      ...options,
      staleTime: 1000 * 60,
      cacheTime: 1000 * 60 * 60,
    }
  );

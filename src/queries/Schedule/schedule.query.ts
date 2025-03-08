import { AxiosError } from "axios";
import { useQuery, UseQueryOptions, UseQueryResult } from "react-query";
import {
  getSchedulesByDateParam,
  getSchedulesParam,
} from "../../repository/Schedule/schedule.param";
import scheduleRepository from "../../repository/Schedule/schedule.repository";
import {
  SchduelsByDateResponse,
  SchedulesResponse,
} from "../../types/Schedule/schedule.type";

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
  { startAt, endAt }: getSchedulesByDateParam,
  options?: UseQueryOptions<
    SchduelsByDateResponse,
    AxiosError,
    SchduelsByDateResponse,
    ["schedule/getSchedulesByDate", string]
  >
): UseQueryResult<SchduelsByDateResponse, AxiosError> =>
  useQuery(
    ["schedule/getSchedulesByDate", `${startAt}~${endAt}`],
    () => scheduleRepository.getSchedulesByDate({ startAt, endAt }),
    {
      enabled: !!startAt && !!endAt,
      ...options,
      staleTime: 1000 * 60,
      cacheTime: 1000 * 60 * 60,
    }
  );

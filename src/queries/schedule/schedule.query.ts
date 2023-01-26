import { AxiosError } from "axios";
import { useQuery, UseQueryResult } from "react-query";
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

export const useGetSchedulesByDate = ({
  startDate,
  endDate,
}: getSchedulesByDateParam): UseQueryResult<
  SchduelsByDateResponse,
  AxiosError
> =>
  useQuery(
    ["schedule/getSchedulesByDate", `${startDate}~${endDate}`],
    () => scheduleRepository.getSchedulesByDate({ startDate, endDate }),
    {
      suspense: true,
      enabled: !!startDate && !!endDate,
      staleTime: 1000 * 60,
      cacheTime: 1000 * 60 * 60,
    }
  );

import { AxiosError } from "axios";
import { useQuery, UseQueryResult } from "react-query";
import { getSchedulesParam } from "../../repository/schedule/schedule.param";
import scheduleRepository from "../../repository/schedule/schedule.repository";
import { SchedulesResponse } from "../../types/schedule/schedule.type";

export const useGetSchedules = ({
  page,
  limit,
}: getSchedulesParam): UseQueryResult<SchedulesResponse, AxiosError> =>
  useQuery(
    ["schedule/getSchdules", page],
    () => scheduleRepository.getSchedules({ page, limit }),
    {
      staleTime: 1000 * 60,
      cacheTime: 1000 * 60 * 60,
    }
  );

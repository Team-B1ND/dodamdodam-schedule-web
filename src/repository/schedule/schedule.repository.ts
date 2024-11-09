import { dodamV6Axios } from "../../lib/axios/customAxios";
import { SchduelsByDateResponse, SchedulesResponse } from "../../types/schedule/schedule.type";
import { getSchedulesByDateParam, getSchedulesParam } from "./schedule.param";

class ScheduleRepository {
  public async getSchedules({ page, limit }: getSchedulesParam): Promise<SchedulesResponse> {
    const { data } = await dodamV6Axios.get(`/schedule?limit=${limit}&page=${page}`);
    return data;
  }

  public async getSchedulesByDate({ startAt, endAt }: getSchedulesByDateParam): Promise<SchduelsByDateResponse> {
    const { data } = await dodamV6Axios.get(`/schedule/search?startAt=${startAt}&endAt=${endAt}`);
    return data;
  }
}
const scheduleRepository = new ScheduleRepository();
export default scheduleRepository;

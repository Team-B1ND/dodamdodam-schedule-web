import { dodamV6Axios } from "../../lib/axios/customAxios";
import { SchedulesResponse } from "../../types/schedule/schedule.type";
import { getSchedulesParam } from "./schedule.param";

class ScheduleRepository {
  public async getSchedules({
    page,
    limit,
  }: getSchedulesParam): Promise<SchedulesResponse> {
    const { data } = await dodamV6Axios.get(
      `/schedule?limit=${limit}&page=${page}`
    );
    return data;
  }
}

export default new ScheduleRepository();

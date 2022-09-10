import { AxiosError } from "axios";
import { useQuery, UseQueryResult } from "react-query";
import memberRepository from "../../repository/member/member.repository";
import { MyMemberResponse } from "../../types/member/member.type";

export const useGetMember = (): UseQueryResult<MyMemberResponse, AxiosError> =>
  useQuery("member/getMyMember", () => memberRepository.getMyMember(), {
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 60,
  });

import { dodamV6Axios } from "../../lib/Axios/customAxios";
import { MyMemberResponse } from "../../types/Member/member.type";

class MemberRepository {
  public async getMyMember(): Promise<MyMemberResponse> {
    const { data } = await dodamV6Axios.get<MyMemberResponse>("/member/my");
    return data;
  }
}
const memberRepository = new MemberRepository();
export default memberRepository;

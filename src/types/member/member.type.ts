import { Student } from "../common/common.type";

export interface MyMemberResponse extends Response {
  data: {
    id: number;
    name: string;
    email: string;
    number: number;
    phone: string;
    student: Student;
    profileImage: null | string;
    readonly role: string;
    readonly status: "ACTIVE" | "DEACTIVATED";
  };
}

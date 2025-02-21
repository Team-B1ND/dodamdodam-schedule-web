import * as S from "./style";
import { Megaphone } from "@b1nd/dds-web";

interface Props {
  title: string;
}

const EmptySkeleton = ({ title }: Props) => {
  return (
    <S.EmptySkeleton>
      <Megaphone color={"labelNormal"} />
      <S.Title>{title}</S.Title>
    </S.EmptySkeleton>
  );
};

export default EmptySkeleton;

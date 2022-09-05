import {
  HomeScheduleHeaderColorSetItemCircle,
  HomeScheduleHeaderColorSetItemContainer,
  HomeScheduleHeaderColorSetItemText,
} from "./style";

interface Props {
  backgroundColor: string;
  text: string;
}

const HomeScheduleHeaderColorSetItem = ({ backgroundColor, text }: Props) => {
  return (
    <HomeScheduleHeaderColorSetItemContainer>
      <HomeScheduleHeaderColorSetItemCircle backgroundColor={backgroundColor} />
      <HomeScheduleHeaderColorSetItemText>
        {text}
      </HomeScheduleHeaderColorSetItemText>
    </HomeScheduleHeaderColorSetItemContainer>
  );
};

export default HomeScheduleHeaderColorSetItem;

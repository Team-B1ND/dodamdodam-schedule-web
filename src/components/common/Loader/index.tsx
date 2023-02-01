import { SkeletonContainer, SkeletonItem } from "./style";

const Loader = () => {
  return (
    <SkeletonContainer>
      <SkeletonItem />
      <SkeletonItem />
      <SkeletonItem />
      <SkeletonItem />
      <SkeletonItem />
    </SkeletonContainer>
  );
};

export default Loader;

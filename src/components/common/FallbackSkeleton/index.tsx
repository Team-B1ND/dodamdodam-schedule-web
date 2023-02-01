import { SkeletonContainer, SkeletonItem } from "./style";

const FallbackSkeleton = () => {
  return (
    <>
      <SkeletonContainer>
        {Array.from({ length: 6 }).map((_, idx) => (
          <SkeletonItem />
        ))}
      </SkeletonContainer>
      ;
    </>
  );
};

export default FallbackSkeleton;

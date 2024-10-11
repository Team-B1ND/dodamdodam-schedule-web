import { SkeletonContainer, SkeletonItem } from "./style";

const FallbackSkeleton = () => {
  return (
    <>
      <SkeletonContainer>
        {Array.from({ length: 6 }).map((_, idx) => (
          <SkeletonItem key={idx} />
        ))}
      </SkeletonContainer>
    </>
  );
};

export default FallbackSkeleton;

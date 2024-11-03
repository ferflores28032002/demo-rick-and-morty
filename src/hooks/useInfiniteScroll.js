import { useCallback, useRef } from 'react';

export const useInfiniteScroll = ({ hasNextPage, fetchNextPage, isFetchingNextPage, isLoading }) => {
  const observer = useRef(null);

  const lastElementRef = useCallback(
    (node) => {
      if (isLoading || isFetchingNextPage) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      });

      if (node) observer.current.observe(node);
    },
    [isLoading, isFetchingNextPage, hasNextPage, fetchNextPage]
  );

  return { lastElementRef };
};

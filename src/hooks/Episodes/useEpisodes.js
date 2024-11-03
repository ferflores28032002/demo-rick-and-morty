import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchEpisodes } from 'src/services/Episodes/EpisodesService';

/**
 * Custom hook to fetch episodes with infinite scroll support.
 */
export const useEpisodes = () => {
  return useInfiniteQuery({
    queryKey: ['episodes'],
    queryFn: async ({ pageParam = 1 }) => fetchEpisodes(pageParam),
    getNextPageParam: (lastPage) => {
      // Parse the next page number from the `next` URL
      return lastPage.info.next ? parseInt(lastPage.info.next.split('page=')[1], 10) : undefined;
    },
    initialPageParam: 1,
    staleTime: 60000,
    refetchOnWindowFocus: false,
  });
};

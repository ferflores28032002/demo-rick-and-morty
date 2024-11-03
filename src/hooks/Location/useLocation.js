import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchLocation } from 'src/services/Location/LocationService';

/**
 * Custom hook to fetch location with infinite scroll support.
 */
export const useLocation = () => {
  return useInfiniteQuery({
    queryKey: ['location'],
    queryFn: async ({ pageParam = 1 }) => fetchLocation(pageParam),
    getNextPageParam: (lastPage) => {
      // Parse the next page number from the `next` URL
      return lastPage.info.next ? parseInt(lastPage.info.next.split('page=')[1], 10) : undefined;
    },
    initialPageParam: 1,
    staleTime: 60000,
    refetchOnWindowFocus: false,
  });
};

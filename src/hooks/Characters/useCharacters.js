import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchCharacters } from 'src/services/Characters/CharactersService';

/**
 * Custom hook to fetch characters with infinite scroll support.
 */
export const useCharacters = () => {
  return useInfiniteQuery({
    queryKey: ['characters'],
    queryFn: async ({ pageParam = 1 }) => fetchCharacters(pageParam),
    getNextPageParam: (lastPage) => {
      // Parse the next page number from the `next` URL
      return lastPage.info.next ? parseInt(lastPage.info.next.split('page=')[1], 10) : undefined;
    },
    initialPageParam: 1,
    staleTime: 60000,
    refetchOnWindowFocus: false,
  });
};

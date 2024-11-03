import rickAndMortyApi from '../../api/rickAndMortyApi';

/**
 * Fetches a paginated list of espisodes from the Rick and Morty API.
 * @param {number} page - The current page number to fetch.
 */
export const fetchEpisodes = async (page = 1) => {
  const response = await rickAndMortyApi.get(`/episode?page=${page}`);
  return response.data;
};

import rickAndMortyApi from '../../api/rickAndMortyApi';

/**
 * Fetches a paginated list of location from the Rick and Morty API.
 * @param {number} page - The current page number to fetch.
 */
export const fetchLocation = async (page = 1) => {
  const response = await rickAndMortyApi.get(`/location?page=${page}`);
  return response.data;
};

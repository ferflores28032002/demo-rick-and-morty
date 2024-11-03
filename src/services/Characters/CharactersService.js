import rickAndMortyApi from '../../api/rickAndMortyApi';

/**
 * Fetches a paginated list of characters from the Rick and Morty API.
 * @param {number} page - The current page number to fetch.
 */
export const fetchCharacters = async (page = 1) => {
  const response = await rickAndMortyApi.get(`/character?page=${page}`);
  return response.data;
};

import axios from "axios";

/**
 * Axios instance configured specifically for the Rick and Morty API.
 * This instance includes the base URL from the environment variables and any Rick and Morty-specific settings.
 */
const rickAndMortyApi = axios.create({
  baseURL: import.meta.env.VITE_RICK_AND_MORTY_API_URL,
  timeout: 10000,
});

export default rickAndMortyApi;

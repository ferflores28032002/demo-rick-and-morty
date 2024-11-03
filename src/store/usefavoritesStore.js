import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useFavoritesStore = create(
  persist(
    (set) => ({
      favorites: [],
      addFavorite: (character) =>
        set((state) => {
          if (!state.favorites.some((fav) => fav.id === character.id)) {
            return { favorites: [...state.favorites, character] };
          }
          return state;
        }),
      removeFavorite: (id) =>
        set((state) => ({
          favorites: state.favorites.filter((character) => character.id !== id),
        })),
    }),
    {
      name: 'favorites-storage',
    }
  )
);

export default useFavoritesStore;

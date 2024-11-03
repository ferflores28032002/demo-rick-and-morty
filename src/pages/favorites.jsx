import { Helmet } from 'react-helmet-async';
import { FavoritesView } from 'src/sections/favorites/view';

export default function FavoritesPage() {
  return (
    <>
      <Helmet>
        <title>Favorites</title>
      </Helmet>

      <FavoritesView />
    </>
  );
}

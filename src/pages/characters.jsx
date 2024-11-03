import { Helmet } from 'react-helmet-async';
import { CharactersView } from 'src/sections/characters/view';

export default function CharactersPage() {
  return (
    <>
      <Helmet>
        <title>Characters</title>
      </Helmet>

      <CharactersView />
    </>
  );
}

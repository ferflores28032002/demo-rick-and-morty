import { useState } from 'react';

import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';

import useFavoritesStore from 'src/store/usefavoritesStore';
import CharacterCard from 'src/sections/characters/CharacterCard';
import CharacterDialog from 'src/sections/characters/CharacterDialog';

const FavoritesView = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const favorites = useFavoritesStore((state) => state.favorites);

  const handleOpenModal = (character) => setSelectedCharacter(character);
  const handleCloseModal = () => setSelectedCharacter(null);

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Favorites</Typography>
      </Stack>

      <Grid container spacing={3}>
        {favorites.length > 0 ? (
          favorites.map((character, index) => (
            <CharacterCard
              ref={null}
              key={character.id}
              post={{
                id: character.id,
                cover: character.cover,
                title: character.title,
                description: `A ${character.title} who is currently ${character.description}.`,
                author: {
                  name: character.author.name,
                  status: character.author.status,
                  location: character.author.location?.name || 'Unknown',
                  avatarUrl: character.cover,
                },
                createdAt: character.createdAt,
              }}
              index={index}
              onClick={() => handleOpenModal(character)}
            />
          ))
        ) : (
          <Typography variant="h6">No favorites found.</Typography>
        )}
      </Grid>

      <CharacterDialog
        character={selectedCharacter}
        open={!!selectedCharacter}
        onClose={handleCloseModal}
      />
    </Container>
  );
};

export default FavoritesView;

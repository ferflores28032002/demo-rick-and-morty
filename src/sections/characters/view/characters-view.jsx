import React, { useState } from 'react';

import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';

import LoadingSpinner from 'src/components/LoadingSpinner/LoadingSpinner';
import CharacterCard from '../CharacterCard';
import CharacterDialog from '../CharacterDialog';

import { useCharacters } from 'src/hooks/Characters/useCharacters';
import { useInfiniteScroll } from 'src/hooks/useInfiniteScroll';

const CharactersView = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const { data, isLoading, isError, error, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useCharacters();
  const { lastElementRef } = useInfiniteScroll({
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isLoading,
  });

  const handleOpenModal = (character) => setSelectedCharacter(character);
  const handleCloseModal = () => setSelectedCharacter(null);

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <p>Error: {error?.message}</p>;

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Characters</Typography>
      </Stack>

      <Grid container spacing={3}>
        {data?.pages.map((page, pageIndex) => (
          <React.Fragment key={pageIndex}>
            {page.results.map((character, charIndex) => {
              const isLastCharacter =
                pageIndex === data.pages.length - 1 && charIndex === page.results.length - 1;

              return (
                <CharacterCard
                  ref={isLastCharacter ? lastElementRef : null}
                  key={character.id}
                  post={{
                    id: character.id,
                    cover: character.image,
                    title: character.name,
                    description: `A ${character.species} who is currently ${character.status}.`,
                    author: {
                      name: character.species,
                      status: character.status,
                      location: character.location?.name || 'Unknown',
                      avatarUrl: character.image,
                    },
                    createdAt: character.created,
                  }}
                  index={charIndex}
                  onClick={() => handleOpenModal(character)}
                />
              );
            })}
          </React.Fragment>
        ))}
      </Grid>

      {isFetchingNextPage && <LoadingSpinner />}

      <CharacterDialog
        character={selectedCharacter}
        open={!!selectedCharacter}
        onClose={handleCloseModal}
      />
    </Container>
  );
};

export default CharactersView;

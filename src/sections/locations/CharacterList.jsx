import React, { useEffect } from 'react';

import { Avatar, CircularProgress, Stack } from '@mui/material';

function CharacterList({ characterUrls }) {
  const [characters, setCharacters] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const promises = characterUrls.map(async (url) => {
          const response = await fetch(url);
          if (!response.ok) throw new Error('Failed to fetch character');
          return response.json();
        });
        const characterData = await Promise.all(promises);
        setCharacters(characterData);
      } catch (error) {
        setError('Error loading characters');
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [characterUrls]);

  if (loading) return <CircularProgress style={{ margin: 'auto', display: 'block' }} />;
  if (error)
    return (
      <Typography color="error" align="center">
        {error}
      </Typography>
    );

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      {characters.map((character) => (
        <Avatar
          key={character.id}
          alt={character.name}
          src={character.image}
          sx={{ width: 40, height: 40 }}
        />
      ))}
    </Stack>
  );
}

export default CharacterList;

import React, { useState, useEffect } from 'react';
import { Avatar, CircularProgress, Typography, Stack } from '@mui/material';

export default function CharacterList({ characterUrls }) {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

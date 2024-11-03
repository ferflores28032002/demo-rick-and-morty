import { useEffect, useState } from 'react';

import { CircularProgress, Grid, Typography } from '@mui/material';

function AllCharactersList({ characterUrls }) {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllCharacters = async () => {
      try {
        const promises = characterUrls.map(async (url) => {
          const response = await fetch(url);
          if (!response.ok) throw new Error('Failed to fetch character');
          return response.json();
        });
        const characterData = await Promise.all(promises);
        setCharacters(characterData);
      } catch (error) {
        setError('Error loading all characters');
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllCharacters();
  }, [characterUrls]);

  if (loading) return <CircularProgress style={{ margin: 'auto', display: 'block' }} />;
  if (error)
    return (
      <Typography color="error" align="center">
        {error}
      </Typography>
    );

  return (
    <Grid container spacing={2} justifyContent="center">
      {characters.map((character) => (
        <Grid item key={character.id} xs={12} sm={6} md={4} lg={3}>
          <div style={{ textAlign: 'center' }}>
            <img
              src={character.image}
              alt={character.name}
              width={100}
              height={100}
              style={{ borderRadius: '50%' }}
            />
            <Typography variant="subtitle1" sx={{ mt: 1 }}>
              {character.name}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {character.species} - {character.status}
            </Typography>
          </div>
        </Grid>
      ))}
    </Grid>
  );
}

export default AllCharactersList;

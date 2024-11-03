import React, { useState } from 'react';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Iconify from 'src/components/iconify';

const CharacterCardActions = ({ character }) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavoriteToggle = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <Stack
      direction="row"
      alignItems="center"
      onClick={handleFavoriteToggle}
      sx={{
        cursor: 'pointer',
        color: isFavorited ? 'error.main' : 'text.disabled',
        '&:hover': {
          color: isFavorited ? 'error.dark' : 'text.primary',
        },
      }}
    >
      <Iconify
        icon={isFavorited ? 'eva:heart-fill' : 'eva:heart-outline'}
        width={16}
        sx={{ mr: 0.5 }}
      />
      <Typography variant="caption">
        {isFavorited ? 'Added to favorites' : 'Add to favorites'}
      </Typography>
    </Stack>
  );
};

export default CharacterCardActions;

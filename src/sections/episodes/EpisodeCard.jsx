import { useState } from 'react';

import { Card, CardActions, CardContent, CardHeader, Typography } from '@mui/material';

import CustomButton from 'src/components/CustomButton/CustomButton';
import RenderDescription from '../characters/RenderDescription';
import AllCharactersDialog from './AllCharactersDialog';
import CharacterList from './CharacterList';

export default function EpisodeCard({ episode }) {
  const [open, setOpen] = useState(false);

  return (
    <Card sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardHeader title={episode.name} subheader={`Episode: ${episode.episode}`} />
      <CardContent>
        <RenderDescription description={episode.overview} height={20} />
        <Typography variant="subtitle1" gutterBottom>
          Characters:
        </Typography>
        <CharacterList characterUrls={episode.characters.slice(0, 3)} />
      </CardContent>
      {episode.characters.length > 0 && (
        <CardActions sx={{ mt: 'auto' }}>
          <CustomButton
            onClick={() => setOpen(true)}
            label="View All"
            disabled={episode.characters.length === 0}
          />
        </CardActions>
      )}
      <AllCharactersDialog
        open={open}
        onClose={() => setOpen(false)}
        episodeName={episode.name}
        characterUrls={episode.characters}
      />
    </Card>
  );
}

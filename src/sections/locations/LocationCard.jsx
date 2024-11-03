import { Card, CardActions, CardContent, CardHeader, Typography } from '@mui/material';
import { useState } from 'react';
import CustomButton from 'src/components/CustomButton/CustomButton';
import RenderDescription from '../characters/RenderDescription';
import AllCharactersDialog from './AllCharactersDialog';
import CharacterList from './CharacterList';

function LocationCard({ location }) {
  const [open, setOpen] = useState(false);
  const descriptionStyles = {
    overflow: 'hidden',
    WebkitLineClamp: 2,
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
  };

  return (
    <Card sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardHeader
        title={location.name}
        subheader={`Type: ${location.type}`}
        style={descriptionStyles}
      />
      <CardContent>
        <RenderDescription description={location.dimension} height={20} />
        <Typography variant="subtitle1" gutterBottom>
          Residents:
        </Typography>
        <CharacterList characterUrls={location.residents.slice(0, 3)} />
      </CardContent>
      <CardActions sx={{ mt: 'auto' }}>
        <CustomButton
          onClick={() => setOpen(true)}
          disabled={location.residents.length === 0}
          label="View All"
        />
      </CardActions>
      <AllCharactersDialog open={open} onClose={() => setOpen(false)} location={location} />
    </Card>
  );
}

export default LocationCard;

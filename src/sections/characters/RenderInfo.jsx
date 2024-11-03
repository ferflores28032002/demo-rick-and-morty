import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Iconify from 'src/components/iconify';
import useFavoritesStore from 'src/store/usefavoritesStore';

const RenderInfo = ({ character, handleFavoriteToggle }) => {
  const { favorites } = useFavoritesStore();
  const isFavorited =
    character &&
    Array.isArray(favorites) &&
    favorites.some((favorite) => favorite.id === character.id);

  const infoStyles = {
    mt: 2,
    color: 'text.secondary',
  };

  const favoriteStyles = {
    cursor: 'pointer',
    color: isFavorited ? 'error.main' : 'text.disabled',
    '&:hover': {
      color: isFavorited ? 'error.dark' : 'text.primary',
    },
  };

  const handleFavorite = (e) => {
   e.stopPropagation();
   handleFavoriteToggle();
  }

  return (
    <Stack direction="column" spacing={1} sx={infoStyles}>
      <Stack direction="row" alignItems="center" onClick={handleFavorite} sx={favoriteStyles}>
        <Iconify
          icon={isFavorited ? 'eva:heart-fill' : 'eva:heart-outline'}
          width={16}
          sx={{ mr: 0.5 }}
        />
        <Typography variant="caption">
          {isFavorited ? 'Added to favorites' : 'Add to favorites'}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default RenderInfo;

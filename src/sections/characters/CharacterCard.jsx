import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { alpha } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';

import RenderAvatar from './RenderAvatar';
import RenderDate from './RenderDate';
import RenderDescription from './RenderDescription';
import RenderInfo from './RenderInfo';
import RenderShape from './RenderShape';
import RenderTitle from './RenderTitle';
import RenderCover from './RenderCover';
import useFavoritesStore from 'src/store/usefavoritesStore';

const CharacterCard = forwardRef(({ post, index, onClick }, ref) => {
  const { cover, title, author, createdAt, description } = post;
  const { favorites, addFavorite, removeFavorite } = useFavoritesStore();

  const isFavorited = favorites.some((favorite) => favorite.id === post.id);

  const handleFavoriteToggle = () => {
    if (isFavorited) {
      removeFavorite(post.id);
    } else {
      addFavorite(post);
    }
  };

  const latestPostLarge = index === 0;
  const latestPost = index === 1 || index === 2;

  const hoverStyle = {
    transition: 'transform 0.5s ease-in-out',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  };

  return (
    <Grid
      xs={12}
      sm={latestPostLarge ? 12 : 6}
      md={latestPostLarge ? 6 : 3}
      ref={ref}
      onClick={onClick}
    >
      <Card>
        <Box
          sx={{
            position: 'relative',
            pt: 'calc(100% * 3 / 4)',
            ...((latestPostLarge || latestPost) && {
              pt: 'calc(100% * 4 / 3)',
              '&:after': {
                top: 0,
                content: "''",
                width: '100%',
                height: '100%',
                position: 'absolute',
                bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72),
              },
            }),
            cursor: 'pointer',
            ...(latestPostLarge && {
              pt: {
                xs: 'calc(100% * 4 / 3)',
                sm: 'calc(100% * 3 / 4.66)',
              },
            }),
          }}
        >
          <RenderShape latestPostLarge={latestPostLarge} latestPost={latestPost} />
          <RenderAvatar author={author} latestPostLarge={latestPostLarge} latestPost={latestPost} />
          <RenderCover title={title} cover={cover} hoverStyle={hoverStyle} />
        </Box>

        <Box
          sx={{
            p: (theme) => theme.spacing(4, 3, 3, 3),
            ...((latestPostLarge || latestPost) && {
              width: 1,
              bottom: 0,
              position: 'absolute',
              cursor: 'pointer',
            }),
          }}
        >
          <RenderDate
            createdAt={createdAt}
            latestPostLarge={latestPostLarge}
            latestPost={latestPost}
          />
          <RenderTitle title={title} latestPostLarge={latestPostLarge} latestPost={latestPost} />
          <RenderDescription
            description={description}
            latestPostLarge={latestPostLarge}
            latestPost={latestPost}
          />
          <RenderInfo
            isFavorited={isFavorited}
            handleFavoriteToggle={handleFavoriteToggle}
            character={post}
          />
        </Box>
      </Card>
    </Grid>
  );
});

CharacterCard.propTypes = {
  post: PropTypes.object.isRequired,
  index: PropTypes.number,
  onClick: PropTypes.func,
};

export default CharacterCard;

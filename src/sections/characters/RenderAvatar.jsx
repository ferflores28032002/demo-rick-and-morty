import React from 'react';
import Avatar from '@mui/material/Avatar';

const RenderAvatar = ({ author, latestPostLarge = false, latestPost = false }) => {
  const avatarStyles = {
    zIndex: 9,
    width: 32,
    height: 32,
    position: 'absolute',
    left: (theme) => theme.spacing(3),
    bottom: (theme) => theme.spacing(-2),
    ...(latestPostLarge || latestPost
      ? {
          top: 24,
          left: 24,
          width: 40,
          height: 40,
        }
      : {}),
  };

  return <Avatar alt={author.name} src={author.avatarUrl} sx={avatarStyles} />;
};

export default RenderAvatar;

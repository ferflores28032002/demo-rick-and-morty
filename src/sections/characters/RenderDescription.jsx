import React from 'react';

import Typography from '@mui/material/Typography';

const RenderDescription = ({ description, latestPostLarge = false, latestPost = false , height = 60}) => {
  const descriptionStyles = {
    color: 'text.secondary',
    height: height,
    overflow: 'hidden',
    WebkitLineClamp: 3,
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    ...(latestPostLarge && { typography: 'body1', height: 80 }),
    ...((latestPostLarge || latestPost) && { color: 'common.white' }),
  };

  return (
    <Typography variant="body2" sx={descriptionStyles}>
      {description}
    </Typography>
  );
};

export default RenderDescription;

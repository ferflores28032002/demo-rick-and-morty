import React from 'react';

import Link from '@mui/material/Link';

const RenderTitle = ({ title, latestPostLarge = false, latestPost = false }) => {
  const titleStyles = {
    height: 44,
    overflow: 'hidden',
    WebkitLineClamp: 2,
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    ...(latestPostLarge && { typography: 'h5', height: 60 }),
    ...((latestPostLarge || latestPost) && { color: 'common.white' }),
  };

  return (
    <Link color="inherit" variant="subtitle2" underline="hover" sx={titleStyles}>
      {title}
    </Link>
  );
};

export default RenderTitle;

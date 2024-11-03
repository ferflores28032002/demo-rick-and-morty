import React from 'react';

import Box from '@mui/material/Box';

const RenderCover = ({ title, cover, hoverStyle = {} }) => {
  const coverStyles = {
    top: 0,
    width: 1,
    height: 1,
    objectFit: 'cover',
    position: 'absolute',
    ...hoverStyle,
  };

  return <Box component="img" alt={title} src={cover} sx={coverStyles} />;
};

export default RenderCover;

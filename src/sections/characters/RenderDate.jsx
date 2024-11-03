import React from 'react';
import { fDate } from 'src/utils/format-time';
import Typography from '@mui/material/Typography';

const RenderDate = ({ createdAt, latestPostLarge = false, latestPost = false }) => {
  if (latestPostLarge) return null;

  console.log(createdAt, 'createdAt');

  const dateStyles = {
    mb: 2,
    cursor: 'pointer',
    color: 'text.disabled',
    ...(latestPostLarge || latestPost ? { opacity: 0.48, color: 'common.white' } : {}),
  };

  return (
    <Typography variant="caption" component="div" sx={dateStyles}>
      {fDate(new Date(createdAt)) || '25 de nov'}
    </Typography>
  );
};

export default RenderDate;

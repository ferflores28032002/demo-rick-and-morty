import React from 'react';
import SvgColor from 'src/components/svg-color';

const RenderShape = ({ latestPostLarge = false, latestPost = false }) => {
  return (
    <SvgColor
      color="paper"
      src="/assets/icons/shape-avatar.svg"
      sx={{
        width: 80,
        height: 36,
        zIndex: 9,
        bottom: -15,
        position: 'absolute',
        color: 'background.paper',
        ...((latestPostLarge || latestPost) && { display: 'none' }),
      }}
    />
  );
};

export default RenderShape;

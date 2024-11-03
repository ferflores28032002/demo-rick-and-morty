import React from 'react';

import { Grid } from '@mui/material';
import EpisodeCard from './EpisodeCard';

export default function EpisodesGrid({ data, lastElementRef }) {
  return (
    <Grid container spacing={2} justifyContent="center" alignItems="stretch">
      {data?.pages.map((page, pageIndex) => (
        <React.Fragment key={pageIndex}>
          {page.results.map((episode, episodeIndex) => {
            const isLastEpisode =
              pageIndex === data.pages.length - 1 && episodeIndex === page.results.length - 1;
            return (
              <Grid
                item
                key={episode.id}
                xs={12}
                sm={6}
                md={4}
                lg={3}
                style={{ width: '100%' }}
                ref={isLastEpisode ? lastElementRef : null}
              >
                <EpisodeCard episode={episode} />
              </Grid>
            );
          })}
        </React.Fragment>
      ))}
    </Grid>
  );
}

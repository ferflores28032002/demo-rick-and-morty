import React from 'react';

import { Typography, CircularProgress, Stack } from '@mui/material';

import EpisodesGrid from '../EpisodesGrid';

import { useEpisodes } from 'src/hooks/Episodes/useEpisodes';
import { useInfiniteScroll } from 'src/hooks/useInfiniteScroll';

export default function EpisodesView() {
  const { data, isLoading, isError, error, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useEpisodes();
  const { lastElementRef } = useInfiniteScroll({
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isLoading,
  });

  if (isLoading || isError)
    return <LoadingOrError isLoading={isLoading} isError={isError} error={error} />;

  return (
    <div style={{ padding: '16px' }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Episodes</Typography>
      </Stack>
      <EpisodesGrid data={data} lastElementRef={lastElementRef} />
      {isFetchingNextPage && <CircularProgress style={{ margin: 'auto', display: 'block' }} />}
    </div>
  );
}

function LoadingOrError({ isLoading, isError, error }) {
  if (isLoading) return <CircularProgress style={{ margin: 'auto', display: 'block' }} />;
  if (isError)
    return (
      <Typography color="error" align="center" sx={{ mt: 4 }}>
        {error}
      </Typography>
    );
  return null;
}

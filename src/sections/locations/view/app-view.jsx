import { Stack, Typography } from '@mui/material';

import LocationList from '../LocationList';

import LoadingSpinner from 'src/components/LoadingSpinner/LoadingSpinner';
import { useLocation } from 'src/hooks/Location/useLocation';
import { useInfiniteScroll } from 'src/hooks/useInfiniteScroll';

export default function LocationView() {
  const { data, isLoading, isError, error, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useLocation();
  const { lastElementRef } = useInfiniteScroll({
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isLoading,
  });

  if (isLoading) return <LoadingSpinner />;
  if (isError)
    return (
      <Typography color="error" align="center" sx={{ mt: 4 }}>
        {error}
      </Typography>
    );

  return (
    <div style={{ padding: '16px' }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Locations</Typography>
      </Stack>
      <LocationList data={data} lastElementRef={lastElementRef} />
      {isFetchingNextPage && <LoadingSpinner />}
    </div>
  );
}

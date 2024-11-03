import React from 'react';

import { Grid } from '@mui/material';
import LocationCard from './LocationCard';

function LocationList({ data, lastElementRef }) {
  return (
    <Grid container spacing={2} justifyContent="center" alignItems="stretch">
      {data?.pages.map((page, pageIndex) => (
        <React.Fragment key={pageIndex}>
          {page.results.map((location, locationIndex) => {
            const isLastLocation =
              pageIndex === data.pages.length - 1 && locationIndex === page.results.length - 1;
            return (
              <Grid
                item
                key={location.id}
                xs={12}
                sm={6}
                md={4}
                lg={3}
                style={{ width: '100%' }}
                ref={isLastLocation ? lastElementRef : null}
              >
                <LocationCard location={location} />
              </Grid>
            );
          })}
        </React.Fragment>
      ))}
    </Grid>
  );
}

export default LocationList;

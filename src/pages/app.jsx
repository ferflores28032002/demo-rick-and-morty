import { Helmet } from 'react-helmet-async';
import LocationView from 'src/sections/locations/view/app-view';

export default function AppPage() {
  return (
    <>
      <Helmet>
        <title>Locations</title>
      </Helmet>

      <LocationView />
    </>
  );
}

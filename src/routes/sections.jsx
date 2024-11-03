import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from 'src/layouts/dashboard';

export const IndexPage = lazy(() => import('src/pages/app'));
export const CharactersPage = lazy(() => import('src/pages/characters'));
export const EpisodesPage = lazy(() => import('src/pages/episodes'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));
export const FavoritesPage = lazy(() => import('src/pages/favorites'));

export default function Router() {
  const routes = useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { element: <IndexPage />, index: true },
        { path: 'episodes', element: <EpisodesPage /> },
        { path: 'characters', element: <CharactersPage /> },
        {path: 'favorites', element: <FavoritesPage />},
      ],
    },

    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}

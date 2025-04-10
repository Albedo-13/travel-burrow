import { AboutUsPage } from '@pages/about-us-page';
import { HomePage } from '@pages/home-page';
import { HotelPage } from '@pages/hotel-page';
import { Layout } from '@pages/layout';
import { TourPackagesPage } from '@pages/tour-packages-page';
import { createBrowserRouter } from 'react-router';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/about-us',
        element: <AboutUsPage />,
      },
      {
        path: '/tour-packages',
        children: [
          {
            index: true,
            element: <TourPackagesPage />,
          },
          {
            path: ':id',
            element: <HotelPage />,
          },
        ],
      },
    ],
  },
]);

import { AboutUsPage } from '@pages/about-us-page';
import { HomePage } from '@pages/home-page';
import { TourPackagesPage } from '@pages/tour-packages-page';
import { createBrowserRouter } from 'react-router';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about-us',
    element: <AboutUsPage />,
  },
  {
    path: 'tour-packages',
    element: <TourPackagesPage />,
  },

  {
    path: '*',
    element: <HomePage />,
  },
]);

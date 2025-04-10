import { TopScrollProvider } from '@components/top-scroll-provider/top-scroll-provider';
import { Outlet } from 'react-router';

export const Layout = () => (
  <>
    <Outlet />
    <TopScrollProvider />
  </>
);

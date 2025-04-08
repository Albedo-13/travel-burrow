import { Footer } from '@components/footer/footer';
import { Header } from '@components/header/header';
import { PopularHotels } from '@components/popular-hotels/popular-hotels';
import { SpecialOffers } from '@components/special-offers/special-offers';
import { Statistics } from '@components/statistics/statistics';
import { Testimonials } from '@components/testimonials/testimonials';
import { WelcomeHome } from '@components/welcome-home/welcome-home';
import { useStores } from '@hooks/use-stores';
import { Skeleton } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { lazy, Suspense, useEffect } from 'react';

// TODO: уменьшить бандл (KNIP, формат ассетов в webp)
const Benefits = lazy(() =>
  import('@components/benefits/benefits').then((module) => ({
    default: module.Benefits,
  }))
);
const PopularPackages = lazy(() =>
  import('@components/popular-packages/popular-packages').then((module) => ({
    default: module.PopularPackages,
  }))
);
const BookBike = lazy(() =>
  import('@components/book-bike/book-bike').then((module) => ({
    default: module.BookBike,
  }))
);

export const HomePage = observer(() => {
  const {
    hotelsStore: { getHotelsListAction },
    testimonialsStore: { getTestimonialsListAction },
  } = useStores();

  useEffect(() => {
    getHotelsListAction();
    getTestimonialsListAction();
  }, [getHotelsListAction, getTestimonialsListAction]);

  return (
    <>
      <Header isFullWidth={true} />
      <WelcomeHome />
      <PopularHotels />
      <Statistics variant="home" />
      <SpecialOffers />
      <Suspense
        fallback={<Skeleton variant="rectangular" width="100%" height={500} />}
      >
        <Benefits />
      </Suspense>
      <Suspense
        fallback={<Skeleton variant="rectangular" width="100%" height={500} />}
      >
        <BookBike />
      </Suspense>
      <Suspense
        fallback={<Skeleton variant="rectangular" width="100%" height={700} />}
      >
        <PopularPackages />
      </Suspense>
      <Testimonials />
      <Footer />
    </>
  );
});

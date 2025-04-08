import { BookBike } from '@components/book-bike/book-bike';
import { Footer } from '@components/footer/footer';
import { Header } from '@components/header/header';
import { HotelsList } from '@components/hotels-list/hotels-list';
import { Testimonials } from '@components/testimonials/testimonials';
import { useStores } from '@hooks/use-stores';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';

export const TourPackagesPage = observer(() => {
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
      <Header variant="tours" />
      <HotelsList />
      <BookBike />
      <Testimonials />
      <Footer />
    </>
  );
});

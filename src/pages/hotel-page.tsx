import { Footer } from '@components/footer/footer';
import { Header } from '@components/header/header';
import { HotelDescription } from '@components/hotel-description/hotel-description';

export const HotelPage = () => (
  <>
    <Header variant="tours" />
    <HotelDescription />
    <Footer />
  </>
);

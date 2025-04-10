import { Footer } from '@components/footer/footer';
import { Header } from '@components/header/header';
import { HotelDescription } from '@components/hotel-description/hotel-description';

export const HotelPage = () => (
  <div className="grow">
    <Header variant="tours" />
    <HotelDescription />
    <Footer />
  </div>
);

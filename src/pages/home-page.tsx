import { AboutUsHome } from '@components/about-us-home/about-us-home';
import { Benefits } from '@components/benefits/benefits';
import { BookBike } from '@components/book-bike/book-bike';
import { Header } from '@components/header/header';
import { PopularHotels } from '@components/popular-hotels/popular-hotels';
import { PopularPackages } from '@components/popular-packages/popular-packages';
import { SpecialOffers } from '@components/special-offers/special-offers';
import { WelcomeHome } from '@components/welcome-home/welcome-home';
import { useStores } from '@hooks/use-stores';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';

// TODO: уменьшить бандл (KNIP, формат ассетов в webp)

export const HomePage = observer(() => {
  const {
    hotelsStore: { getHotelsListAction },
  } = useStores();

  useEffect(() => {
    getHotelsListAction();
  }, [getHotelsListAction]);

  return (
    <>
      <Header isFullWidth={true} />
      <WelcomeHome />
      <PopularHotels />
      <AboutUsHome />
      <SpecialOffers />
      <Benefits />
      <BookBike />
      <PopularPackages />
    </>
  );
});

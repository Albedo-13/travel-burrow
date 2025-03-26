import { AboutUsHome } from '@components/about-us-home/about-us-home';
import { Header } from '@components/header/header';
import { PopularHotels } from '@components/popular-hotels/popular-hotels';
import { WelcomeHome } from '@components/welcome-home/welcome-home';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';

import { SpecialOffers } from '@/components/special-offers/special-offers';
import { useStores } from '@/hooks/use-stores';

// TODO: уменьшить бандл (KNIP, формат ассетов в webp)
// TODO: карусель переиспользуется, вынести кнопки
// TODO:

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
    </>
  );
});

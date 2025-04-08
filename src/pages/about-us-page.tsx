import { Advantages } from '@components/advantages/advantages';
import { Footer } from '@components/footer/footer';
import { Header } from '@components/header/header';
import { Statistics } from '@components/statistics/statistics';
import { Testimonials } from '@components/testimonials/testimonials';
import { WelcomeAboutUs } from '@components/welcome-about-us/welcome-about-us';
import { useStores } from '@hooks/use-stores';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';

export const AboutUsPage = observer(() => {
  const {
    testimonialsStore: { getTestimonialsListAction },
  } = useStores();

  useEffect(() => {
    getTestimonialsListAction();
  }, [getTestimonialsListAction]);

  return (
    <>
      <Header variant="about" />
      <WelcomeAboutUs />
      <Statistics variant="about" />
      <Advantages />
      <Testimonials />
      <Footer />
    </>
  );
});

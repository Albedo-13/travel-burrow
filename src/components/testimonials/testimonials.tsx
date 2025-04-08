import blankProfilePicture from '@assets/icons/blank-profile-picture.webp';
import { Skeleton } from '@mui/material';
import clsx from 'clsx';
import { observer } from 'mobx-react-lite';
import { useRef } from 'react';
import Swiper from 'swiper';
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';

import { useStores } from '@/hooks/use-stores';

import styles from './testimonials.module.scss';

export const Testimonials = observer(() => {
  const swiperRef = useRef<Swiper | null>(null);

  const {
    testimonialsStore: { testimonialsList, isLoading },
  } = useStores();

  return (
    <section className={styles.testimonials}>
      <div className="container">
        <h2 className={styles.title}>Happy Customers Says</h2>
        <button
          className={clsx('buttonSecondary', styles.buttonPrev)}
          onClick={() => swiperRef.current?.slidePrev()}
        >
          {'<'}
        </button>
        <button
          className={clsx('buttonPrimary', styles.buttonNext)}
          onClick={() => swiperRef.current?.slideNext()}
        >
          {'>'}
        </button>
        {isLoading ? (
          <Skeleton variant="rectangular" width="100%" height={427} />
        ) : (
          <SwiperComponent
            loop={true}
            spaceBetween={30}
            slidesPerView={2}
            onSwiper={(swiper: Swiper) => {
              swiperRef.current = swiper;
            }}
            className={styles.swiperComponent}
          >
            {testimonialsList?.map((hotel) => (
              <SwiperSlide
                className={styles.swiperSlide}
                key={hotel.itineraryId}
              >
                <div className={styles.testimonial}>
                  <div className={styles.imageWrapper}>
                    <img
                      className={styles.image}
                      src={blankProfilePicture}
                      alt={'reviewer avatar'}
                    />
                  </div>
                  <p className={styles.name}>
                    {hotel.reviewer.name || 'Anonim'}
                  </p>
                  <p className={styles.description}>{hotel.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </SwiperComponent>
        )}
      </div>
    </section>
  );
});

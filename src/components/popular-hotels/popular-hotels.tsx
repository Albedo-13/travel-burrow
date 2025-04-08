import 'swiper/css';

import { useStores } from '@hooks/use-stores';
import { Skeleton } from '@mui/material';
import clsx from 'clsx';
import { observer } from 'mobx-react-lite';
import { useRef } from 'react';
import Swiper from 'swiper';
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';

import { HotelCard } from '../hotel-card/hotel-card';
import styles from './popular-hotels.module.scss';

export const PopularHotels = observer(() => {
  const swiperRef = useRef<Swiper | null>(null);

  const {
    hotelsStore: { sliced16HotelsList, isLoading },
  } = useStores();

  return (
    <section className={styles.popularHotels}>
      <div className="container">
        <h2 className={styles.title}>Popular Hotels</h2>
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
          <Skeleton variant="rectangular" width="100%" height={327} />
        ) : (
          <SwiperComponent
            loop={true}
            spaceBetween={30}
            slidesPerView={4}
            onSwiper={(swiper: Swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {sliced16HotelsList?.map((hotel) => (
              <SwiperSlide key={hotel.id}>
                <HotelCard hotel={hotel} />
              </SwiperSlide>
            ))}
          </SwiperComponent>
        )}
      </div>
    </section>
  );
});

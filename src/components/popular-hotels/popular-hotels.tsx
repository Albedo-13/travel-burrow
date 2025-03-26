import 'swiper/css';

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Rating } from '@mui/material';
import clsx from 'clsx';
import { observer } from 'mobx-react-lite';
import { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';

import { useStores } from '@/hooks/use-stores';

import styles from './popular-hotels.module.scss';

export const PopularHotels = observer(() => {
  const swiperRef = useRef<Swiper | null>(null);

  const {
    hotelsStore: { getHotelsListAction, sliced16HotelsList },
  } = useStores();

  useEffect(() => {
    getHotelsListAction();
  }, [getHotelsListAction]);

  return (
    <section className={styles.popularHotels}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>PopularHotels</h2>
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
        </div>
        <SwiperComponent
          loop={true}
          spaceBetween={30}
          slidesPerView={4}
          slidesPerGroup={2}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper: Swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {sliced16HotelsList?.map((hotel) => (
            <SwiperSlide key={hotel.id}>
              {/* TODO: <Link to={`/hotels/${hotel.id}`}> */}
              <div>
                <div className={styles.imageWrapper}>
                  <img
                    className={styles.image}
                    src={hotel.thumbnailUrl}
                    alt={hotel.name}
                  />
                </div>
                <p className={styles.name}>{hotel.name}</p>
                <div className={styles.price}>
                  min <span>{hotel.ratePlan.price.current}</span>
                </div>
                <div className={styles.calendar}>
                  <CalendarMonthIcon />
                  to be decided
                </div>
                <div className={styles.rating}>
                  <Rating
                    name="read-only"
                    value={hotel.guestReviews.unformattedRating / 2}
                    precision={0.5}
                    readOnly
                  />
                  {hotel.guestReviews.unformattedRating} / 10
                </div>
              </div>
            </SwiperSlide>
          ))}
        </SwiperComponent>
      </div>
    </section>
  );
});

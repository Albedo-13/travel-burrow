import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Rating } from '@mui/material';
import { Link } from 'react-router';

import { Hotel } from '@/types/hotel';

import styles from './hotel-card.module.scss';

type HotelCard = {
  hotel: Hotel;
};

export const HotelCard = ({ hotel }: HotelCard) => {
  return (
    <Link className={styles.card} to={`/tour-packages/${hotel.id}`}>
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
    </Link>
  );
};

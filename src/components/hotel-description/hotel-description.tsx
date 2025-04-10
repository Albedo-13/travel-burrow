import { Rating, Skeleton } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { useParams } from 'react-router';

import { useStores } from '@/hooks/use-stores';

import styles from './hotel-description.module.scss';

export const HotelDescription = observer(() => {
  const { id = '' } = useParams();

  const {
    hotelsStore: { selectedHotel, isLoading, getHotelByIdAction },
  } = useStores();

  useEffect(() => {
    getHotelByIdAction(+id);
  }, [getHotelByIdAction, id]);

  return (
    <section className={styles.hotelDescription}>
      <div className="container">
        {isLoading ? (
          <Skeleton variant="rectangular" width="100%" height={327} />
        ) : (
          <>
            <h1>{selectedHotel?.name}</h1>
            <div className={styles.hotelDetails}>
              <div className={styles.hotelImage}>
                <img
                  src={selectedHotel?.thumbnailUrl}
                  alt={selectedHotel?.name}
                />
              </div>
              <div className="hotel-info">
                <div className="hotel-content">
                  <div className="hotel-rating">
                    <div className={styles.rating}>
                      <Rating
                        name="read-only"
                        value={
                          (selectedHotel?.guestReviews?.unformattedRating ||
                            0) / 2
                        }
                        precision={0.5}
                        readOnly
                      />
                      {selectedHotel?.guestReviews?.unformattedRating} / 10
                    </div>
                  </div>
                  <div className={styles.descriptionRow}>
                    <h3>Address:</h3>
                    <p>
                      {selectedHotel?.address.countryName},{' '}
                      {selectedHotel?.address.region}{' '}
                      {selectedHotel?.address.streetAddress}
                    </p>
                  </div>
                  <div className={styles.descriptionRow}>
                    <h3>Neighbourhood:</h3>
                    <p>{selectedHotel?.neighbourhood}</p>
                  </div>
                  <div className={styles.descriptionRow}>
                    <h3>Price per night:</h3>
                    <p>
                      {selectedHotel?.ratePlan.price.current}{' '}
                      {selectedHotel?.ratePlan.price.additionalInfo &&
                        `(${selectedHotel?.ratePlan.price.additionalInfo})`}
                    </p>
                  </div>
                  <div className={styles.descriptionRow}>
                    <h3>Landmarks:</h3>
                    <ul>
                      {selectedHotel?.landmarks?.map((landmark, index) => (
                        <li key={index}>
                          - {landmark.label} ({landmark.distance})
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
});

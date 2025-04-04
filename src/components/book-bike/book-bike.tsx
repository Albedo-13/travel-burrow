import bike from '@assets/images/bike-booking.webp';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import styles from './book-bike.module.scss';

export const BookBike = () => {
  return (
    <section className={styles.bookBike}>
      <div className="container">
        <div className={styles.wrapper}>
          <div>
            <h2 className={styles.title}>Book Now Bike</h2>
            <form className={styles.underlay}>
              <div className={styles.input}>
                <label htmlFor="nameSurname">Name and Surname</label>
                <TextField
                  id="nameSurname"
                  placeholder="Enter your name and surname"
                />
              </div>
              <div className={styles.input}>
                <label htmlFor="email">Email Address</label>
                <TextField id="email" placeholder="Enter your email address" />
              </div>
              <div className={styles.input}>
                <label htmlFor="telephone">Telephone number</label>
                <TextField
                  id="telephone"
                  type="number"
                  placeholder="Enter your telephone number"
                />
              </div>
              <div className={styles.input}>
                <label htmlFor="serviceType">Service Type</label>
                <Autocomplete
                  id="serviceType"
                  options={[]}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      placeholder="Select the service types"
                    />
                  )}
                />
              </div>
              <div className={styles.input}>
                <label htmlFor="date">Date</label>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker label="Select the date" />
                </LocalizationProvider>
              </div>
              <div className={styles.input}>
                <label htmlFor="Time">Time</label>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimePicker label="Select the time" />
                </LocalizationProvider>
              </div>
              <button
                type="submit"
                className="buttonPrimary"
                onClick={(e) => e.preventDefault()}
              >
                Book Now
              </button>
            </form>
          </div>
          <img className={styles.image} src={bike} alt="rent a bike" />
        </div>
      </div>
    </section>
  );
};

import HotelIcon from '@mui/icons-material/Hotel';
import PersonIcon from '@mui/icons-material/Person';
import PublicIcon from '@mui/icons-material/Public';
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, Slider } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';

import { MAX_HOTEL_PRICE, MIN_HOTEL_PRICE } from '@/constants';
import { useStores } from '@/hooks/use-stores';

import styles from './welcome-home.module.scss';

export const WelcomeHome = observer(() => {
  const {
    hotelsStore: { hotelsList, currency, getHotelsListAction },
  } = useStores();

  useEffect(() => {
    getHotelsListAction();
  }, [getHotelsListAction]);

  return (
    <section className={styles.welcome}>
      <div className="container">
        <h1 className={styles.title}>Enjoy in the best way!</h1>
        <p className={styles.subtitle}>
          Enjoy our services for your trip anytime
        </p>
        <div className={styles.underlay}>
          <div className={styles.publicTours}>
            <PublicIcon color="primary" />
            Public Tours
          </div>
          <div className={styles.filtersGroup}>
            <TextField
              type="number"
              label="Number of people"
              placeholder="People"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon />
                    </InputAdornment>
                  ),
                },
              }}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker label="Date" />
              <TimePicker label="Time" />
            </LocalizationProvider>

            <div className={styles.priceRange}>
              Price range (in {currency.symbol})
              <Slider
                aria-label="Default"
                valueLabelDisplay="auto"
                defaultValue={[MIN_HOTEL_PRICE, MAX_HOTEL_PRICE]}
                step={10}
                min={MIN_HOTEL_PRICE}
                max={MAX_HOTEL_PRICE}
                marks={[
                  {
                    value: MIN_HOTEL_PRICE,
                    label: `${MIN_HOTEL_PRICE}${currency.symbol}`,
                  },
                  {
                    value: MAX_HOTEL_PRICE,
                    label: `${MAX_HOTEL_PRICE}${currency.symbol}`,
                  },
                ]}
              />
            </div>

            <Autocomplete
              options={hotelsList}
              getOptionLabel={(option) => option.name}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Hotel"
                  placeholder="Select Hotel"
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <HotelIcon />
                        </InputAdornment>
                      ),
                    },
                  }}
                />
              )}
            />

            <button className={styles.searchButton}>
              <SearchIcon color="info" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
});

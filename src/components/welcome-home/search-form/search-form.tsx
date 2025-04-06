import { useStores } from '@hooks/use-stores';
import HotelIcon from '@mui/icons-material/Hotel';
import PersonIcon from '@mui/icons-material/Person';
import PublicIcon from '@mui/icons-material/Public';
import SearchIcon from '@mui/icons-material/Search';
import Autocomplete from '@mui/material/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
import { TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { observer } from 'mobx-react-lite';

import { MAX_HOTEL_PRICE, MIN_HOTEL_PRICE } from '@/constants';

import styles from './search-form.module.scss';

export const SearchForm = observer(() => {
  const {
    hotelsStore: { hotelsList, currency },
  } = useStores();

  return (
    <>
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
          getOptionLabel={(option) => option?.name}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Hotel"
              placeholder="Select Hotel"
              slotProps={{
                input: {
                  ...params.InputProps,
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
    </>
  );
});

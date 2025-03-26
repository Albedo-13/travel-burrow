import { makeAutoObservable, runInAction } from 'mobx';

import { getHotelsList } from '@/api/get-hotels-list';
import { Currency } from '@/types/currency';
import { Hotel } from '@/types/hotel';

class HotelsStore {
  hotelsList: Hotel[] = [];
  currency: Currency = {
    code: '',
    format: '',
    separators: '',
    symbol: '?',
  };
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  get sliced16HotelsList() {
    return this.hotelsList.slice(0, 16);
  }
  
  getHotelByIdAction = (id: number) => {
    return this.hotelsList.find((hotel) => hotel.id === id);
  }

  // ! TODO: фильтрация. Если выбран отель - на страницу отеля. Иначе на страницу списка

  getHotelsListAction = async () => {
    try {
      this.isLoading = true;
      const res = await getHotelsList();

      runInAction(() => {
        this.hotelsList = res.data.body.searchResults.results;
        this.currency = res.data.body.pointOfSale.currency;
        this.isLoading = false;
      });
    } catch (error) {
      console.log(error);
      this.isLoading = false;
    }
  };
}

export const hotelsStore = new HotelsStore();

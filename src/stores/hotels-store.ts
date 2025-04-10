import { makeAutoObservable, runInAction } from 'mobx';

import { getHotelsList } from '@/api/get-hotels-list';
import { Currency } from '@/types/currency';
import { Hotel } from '@/types/hotel';

class HotelsStore {
  hotelsList: Hotel[] = [];
  selectedHotel: Hotel | null = null;
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

  getHotelByIdAction = async (id: number) => {
    await this.getHotelsListAction();

    this.selectedHotel =
      this.hotelsList.find((hotel) => hotel.id === id) ?? null;
  };

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

import { counterStore } from './counter-store';
import { hotelsStore } from './hotels-store';

class RootStore {
  counterStore = counterStore;
  hotelsStore = hotelsStore;
}

export const rootStore = new RootStore();

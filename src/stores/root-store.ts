import { counterStore } from './counter-store';

class RootStore {
  counterStore = counterStore;
}

export const rootStore = new RootStore();

import { hotelsStore } from './hotels-store';
import { testimonialsStore } from './testimonials-store';

class RootStore {
  hotelsStore = hotelsStore;
  testimonialsStore = testimonialsStore;
}

export const rootStore = new RootStore();

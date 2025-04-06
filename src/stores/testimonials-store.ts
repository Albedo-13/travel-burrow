import { makeAutoObservable, runInAction } from 'mobx';

import { getTestimonialsList } from '@/api/get-testimonials-list';
import { Testimonial } from '@/types/testimonial';

class TestimonialsStore {
  testimonialsList: Testimonial[] = [];
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  getTestimonialsListAction = async () => {
    try {
      this.isLoading = true;
      const res = await getTestimonialsList();

      runInAction(() => {
        const groups =
          res.data.reviews.body.reviewContent.reviews.hermes.groups;
        this.testimonialsList = [...groups[0].items, ...groups[1].items];
        this.isLoading = false;
      });
    } catch (error) {
      console.log(error);
      this.isLoading = false;
    }

    return this.testimonialsList;
  };
}

export const testimonialsStore = new TestimonialsStore();

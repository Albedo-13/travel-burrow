import { makeAutoObservable } from 'mobx';

class CounterStore {
  count = 0;

  get multiplyBy2() {
    return this.count * 2;
  }

  constructor() {
    makeAutoObservable(this);
  }

  increase = () => {
    this.count += 1;
  };

  reset = () => {
    this.count = 0;
  };
}

export const counterStore = new CounterStore();

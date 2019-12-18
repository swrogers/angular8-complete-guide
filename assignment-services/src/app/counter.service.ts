export class CounterService {
  activeToInactive = 0;
  inactiveToActive = 0;

  constructor() {
  }

  oneToInactive() {
    this.activeToInactive += 1;
  }

  oneToActive() {
    this.inactiveToActive += 1;
  }
}

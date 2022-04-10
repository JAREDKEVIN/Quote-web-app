import { TimerCounterPipe } from './timer-counter.pipe';

describe('TimerCounterPipe', () => {
  it('create an instance', () => {
    const pipe = new TimerCounterPipe();
    expect(pipe).toBeTruthy();
  });
});

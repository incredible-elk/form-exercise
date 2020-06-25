import { checkFive } from '../components/check5';

describe('checkFive', () => {
  const num = undefined;

  it('should check if num is smaller than 5', () => {
    expect(checkFive(num)).toBeLessThan(5);
  });

  it('should check if num is equal to 5', () => {
    expect(checkFive(num)).toBe(5);
  });

  it('should check if num is greater than 5', () => {
    expect(checkFive(num)).toBeGreaterThan(5);
  });

  it('should check if num is a number', () => {
    expect(checkFive(typeof num)).toBe('number');
  });
});

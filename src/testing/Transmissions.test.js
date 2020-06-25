import { Transmissions } from '../components/Transmissions';

describe('Transmissions', () => {
  const input = '1510::<932829840930053761>';

  it("should check if input includes '::' between id and number", () => {
    expect(Transmissions(input)).toMatch(/::/);
  });

  it('should check and if number is not enclosed by <>.', () => {
    expect(Transmissions(input)).toMatch(/<>/);
  });
});

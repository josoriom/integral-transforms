import { gaussian } from '../gaussian';
import { lorentzian } from '../lorentzian';
import { triangular } from '../triangular';

describe('Testing basis functions', () => {
  it('Triaungular', () => {
    expect(triangular(11)).toStrictEqual([
      0,
      0.19999999999999996,
      0.4,
      0.6,
      0.8,
      1,
      0.8,
      0.6000000000000001,
      0.3999999999999999,
      0.19999999999999996,
      0
    ]);
  });

  it('Gaussian', () => {
    expect(gaussian(11)).toStrictEqual([
      0,
      0.19999999999999996,
      0.4,
      0.6,
      0.8,
      1,
      0.8,
      0.6000000000000001,
      0.3999999999999999,
      0.19999999999999996,
      0
    ]);
  });

  it('Lorentzian', () => {
    expect(lorentzian(11)).toStrictEqual([
      0,
      0.19999999999999996,
      0.4,
      0.6,
      0.8,
      1,
      0.8,
      0.6000000000000001,
      0.3999999999999999,
      0.19999999999999996,
      0
    ]);
  });
});

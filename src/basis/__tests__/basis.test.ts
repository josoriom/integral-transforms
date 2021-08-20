import { toBeDeepCloseTo } from 'jest-matcher-deep-close-to';

import { gaussian } from '../gaussian';
import { lorentzian } from '../lorentzian';
import { triangular } from '../triangular';

expect.extend({ toBeDeepCloseTo });

describe('Testing basis functions', () => {
  it('Triaungular', () => {
    expect(triangular(11)).toBeDeepCloseTo(
      [0, 0.2, 0.4, 0.6, 0.8, 1, 0.8, 0.6, 0.4, 0.2, 0],
      1,
    );
  });

  it('Gaussian', () => {
    expect(gaussian(11)).toBeDeepCloseTo(
      [0, 0.2, 0.4, 0.6, 0.8, 1, 0.8, 0.6, 0.4, 0.2, 0],
      1,
    );
  });

  it('Lorentzian', () => {
    expect(lorentzian(11)).toBeDeepCloseTo(
      [0, 0.2, 0.4, 0.6, 0.8, 1, 0.8, 0.6, 0.4, 0.2, 0],
      1,
    );
  });
});

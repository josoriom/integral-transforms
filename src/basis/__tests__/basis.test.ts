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
      [0.47, 0.6, 0.73, 0.84, 0.91, 0.94, 0.91, 0.84, 0.73, 0.6, 0.47],
      2,
    );
  });

  it('Lorentzian', () => {
    expect(lorentzian(11)).toBeDeepCloseTo(
      [0.32, 0.39, 0.47, 0.55, 0.61, 0.64, 0.61, 0.55, 0.47, 0.39, 0.32],
      2,
    );
  });
});

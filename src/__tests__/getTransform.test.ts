import { toBeDeepCloseTo } from 'jest-matcher-deep-close-to';

import { getTransform } from '../getTransform';

expect.extend({ toBeDeepCloseTo });

describe('Testing basis functions', () => {
  it('Triaungular', () => {
    const input = [
      0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3,
      0.2, 0.1,
    ];
    const transform = getTransform(input);

    expect(transform).toBeDeepCloseTo(
      [
        0.14, 0.25, 0.37, 0.49, 0.62, 0.74, 0.86, 0.96, 1, 0.96, 0.86, 0.74,
        0.62, 0.49, 0.37, 0.25, 0.14,
      ],
      2,
    );
  });
});

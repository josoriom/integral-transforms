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
        0.136986301369863, 0.24657534246575336, 0.36986301369863017,
        0.4931506849315069, 0.6164383561643834, 0.7397260273972601,
        0.8630136986301368, 0.9589041095890409, 1, 0.9589041095890409,
        0.8630136986301368, 0.7397260273972601, 0.6164383561643834,
        0.4931506849315069, 0.36986301369862995, 0.24657534246575338,
        0.13698630136986292,
      ],
      2,
    );
  });
});

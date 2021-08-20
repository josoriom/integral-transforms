import { getTransform } from '../getTransform';

describe('Testing basis functions', () => {
  it('Triaungular', () => {
    const input = [
      0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3,
      0.2, 0.1,
    ];
    const transform = getTransform(input);
    expect(transform).toStrictEqual([
      0.5405405405405403,
      0.6756756756756757,
      0.7999999999999998,
      0.9027027027027026,
      0.9729729729729728,
      1,
      0.9729729729729729,
      0.9027027027027026,
      0.7999999999999999,
      0.6756756756756757,
      0.5405405405405405
    ]);
  });
});

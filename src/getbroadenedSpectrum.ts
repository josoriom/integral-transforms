import { BorderType, fftConvolution } from 'ml-convolution';

import { basis } from './utilities/basis';
import { yNorm } from './utilities/yNorm';

export function getbroadenedSpectrum(array: number[], options: Options = {}) {
  const {
    shape = 'triangular',
    kernelWidth = 7,
    normalized = false,
    shapeOptions = {
      width: 1,
      height: 1,
      center: 0,
    },
  } = options;
  const kernelBasis = basis[shape];
  const kernel = kernelBasis(kernelWidth, shapeOptions);
  const result = fftConvolution(array, kernel, 'CONSTANT' as BorderType);
  return normalized ? yNorm(result) : result;
}

interface Options {
  shape?: string;
  kernelWidth?: number;
  normalized?: boolean;
  shapeOptions?: {
    width: number;
    height: number;
    center: number;
  };
}

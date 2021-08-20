import { BorderType, fftConvolution } from 'ml-convolution';

import { basis } from './utilities/basis';
import { yNorm } from './utilities/yNorm';

export function getTransform(array: number[], options: Options = {}) {
  const {
    shape = 'triangular',
    kernelLength = 7,
    shapeOptions = {
      width: 1,
      height: 1,
      center: 0,
    },
  } = options;
  const kernelBasis = basis[shape];
  const kernel = kernelBasis(kernelLength, shapeOptions);
  const result = fftConvolution(array, kernel, 'CONSTANT' as BorderType);
  return yNorm(result);
}

interface Options {
  shape?: string;
  kernelLength?: number;
  nbPoints?: number;
  shapeOptions?: {
    width: number;
    height: number;
    center: number;
  };
}

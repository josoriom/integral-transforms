import { triangular } from '../basis/triangular';
import { Basis } from '../types/Basis';

export function getKernel(options: Options = {}) {
  const {
    nbPoints = 1024,
    maxValue = 10,
    shape = 'triangular',
    shapeOptions = {
      width: 0.1,
      height: 1,
      center: 2,
    },
  } = options;
  const result = [];
  const kernelBasis = basis[shape];
  for (let i = 0; i < nbPoints; i++) {
    const point = (i * maxValue) / nbPoints;
    result.push(kernelBasis(point, shapeOptions));
  }
  return result;
}

const basis: Basis = {
  triangular: triangular,
};

interface Options {
  nbPoints?: number;
  maxValue?: number;
  shape?: string;
  shapeOptions?: {
    width: number;
    height: number;
    center: number;
  };
}

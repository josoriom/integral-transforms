import { gaussian } from '../basis/gaussian';
import { lorentzian } from '../basis/lorentzian';
import { triangular } from '../basis/triangular';
import { Basis } from '../types/Basis';

export const basis: Basis = {
  triangular: triangular,
  gaussian: gaussian,
  lorentzian: lorentzian,
};

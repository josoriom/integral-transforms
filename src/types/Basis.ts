export interface Basis {
  [key: string]: (
    nbPoints: number,
    options?: {
      width: number;
      height: number;
      center: number;
    },
  ) => number[];
}

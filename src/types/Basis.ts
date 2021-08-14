export interface Basis {
  [key: string]: (
    point: number,
    options?: {
      width: number;
      height: number;
      center: number;
    },
  ) => number;
}

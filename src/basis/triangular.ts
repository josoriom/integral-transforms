export function triangular(x: number, options: Options = {}): number {
  const { center = 1, width = 0.1, height = 1 } = options;
  let result = 0;
  if (x >= center - 0.5 * width && x <= center) {
    result = (2 * height * (x - center)) / width + height;
  } else if (x > center && x <= center + 0.5 * width) {
    result = (-2 * height * (x - center)) / width + height;
  }
  return result;
}

interface Options {
  center?: number;
  width?: number;
  height?: number;
}

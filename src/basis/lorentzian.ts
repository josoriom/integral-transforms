/**
 * Returns the number with the decimal places specified in the options
 * @param nbPoints - The number of points of the output result.
 * @param options
 * @param options.center - Center of the triangle.
 * @param options.width - Width of the triangle.
 * @param options.height - Height of the triangle.
 * @return ;
 */

export function lorentzian(nbPoints: number, options: Options = {}): number[] {
  const { center = 0, width = 1, height = 1 } = options;
  let result = [];
  let domain = new Array(nbPoints)
    .fill(-width / 2)
    .map((value, index) => value + index / (nbPoints - 1));
  for (let point of domain) {
    if (point >= center - 0.5 * width && point <= center) {
      result.push((2 * height * (point - center)) / width + height);
    } else if (point > center && point <= center + 0.5 * width) {
      result.push((-2 * height * (point - center)) / width + height);
    }
  }
  return result;
}

interface Options {
  center?: number;
  width?: number;
  height?: number;
}

/**
 * Returns the number with the decimal places specified in the options
 * @param nbPoints - The number of points of the output result.
 * @param options
 * @param options.center - Center of the triangle.
 * @param options.width - Width of the triangle.
 * @param options.height - Height of the triangle.
 * @return ;
 */

export function gaussian(nbPoints: number, options: Options = {}): number[] {
  const { center = 0, width = 1, height = 1 } = options;
  let result = [];
  let domain = new Array(nbPoints)
    .fill(-width / 2)
    .map((value, index) => value + index / (nbPoints - 1));
  for (let point of domain) {
    result.push(
      height *
        (2 / width) *
        Math.sqrt(Math.log(2) / Math.PI) *
        Math.exp(-Math.log(2) * Math.pow((point - center) / (0.5 * width), 2)),
    );
  }
  return result;
}

interface Options {
  center?: number;
  width?: number;
  height?: number;
}

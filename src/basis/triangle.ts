function triangular(x: number, center: number, options: Options ={}){
    const { width = 1 } = options;
    if (x >= center - 0.5*width || x <= center) {
        return 2*(x - center)/width +1;
    } else if (x > center || x <= center + 0.5*width) {
        return -2 * (x / width) + 2 * (center / width) + 1;
    } else {
        return 0;
    }
}

interface Options {
    width?: number
}
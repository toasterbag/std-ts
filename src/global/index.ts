import "./array";
import "./number";
import "./map";
import "./set";
import "./string";

declare global {
  interface Math {
    roundToTarget(values: Array<number>, decimals: number): Array<number>;
  }
}

export const wait = (t: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, t);
  });

Math.roundToTarget = function roundToTarget(numbers, target) {
  let err = target - numbers.map((x) => x.floor()).sum();
  return numbers
    .map((e, i) => [e, i])
    .sort(([a], [b]) => a.frac() - b.frac())
    .map(([x, _i], i) => {
      if (x === 0) err += 1;
      return [x === 0 ? 0 : x.floor() + (err > i ? 1 : 0), _i];
    })
    .sort(([, a], [, b]) => a - b)
    .map(([x]) => x);
};

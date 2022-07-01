import { second } from "..";
import "./index";

describe("Map", () => {
  test("isEmpty", () => {
    const a = new Map([]).isEmpty();
    const b = new Map([["a", 1]]).isEmpty();

    expect(a).toBe(true);
    expect(b).toBe(false);
  });

  test("some", () => {
    const a = new Map([
      ["a", 1],
      ["b", 2],
      ["c", 3],
    ]).some((_, n) => n === 1);
    const b = new Map([
      ["a", 1],
      ["b", 2],
      ["c", 3],
    ]).some((_, n) => n > 5);

    expect(a).toBe(true);
    expect(b).toBe(false);
  });

  test("every", () => {
    const a = new Map([
      ["a", 1],
      ["b", 2],
      ["c", 3],
    ]).every((_, n) => n >= 1);
    const b = new Map([
      ["a", 1],
      ["b", 2],
      ["c", 3],
    ]).every((_, n) => n > 5);

    expect(a).toBe(true);
    expect(b).toBe(false);
  });

  test("map", () => {
    const test = new Map([
      ["a", 1],
      ["b", 2],
      ["c", 3],
    ])
      .map((_, n) => n + 1)
      .toArray()
      .map(second)
      .reduce((a, b) => a + b);

    expect(test).toEqual(9);
  });

  test("filter", () => {
    const test = new Map([
      ["a", 1],
      ["b", 2],
      ["c", 3],
    ])
      .filter((_, n) => n === 1)
      .toArray();

    expect(test).toEqual([["a", 1]]);
  });
});

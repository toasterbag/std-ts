import "./index";

describe("Set", () => {
  test("differance", () => {
    const a = new Set([1, 2, 3]);
    const b = new Set([3, 4, 5]);

    const test = a.differance(b).toArray();
    const expected = [1, 2];
    expect(test).toEqual(expected);
  });

  test("symmetric differance", () => {
    const a = new Set([1, 2, 3]);
    const b = new Set([3, 4, 5]);

    const test = a.symmetricDifferance(b).toArray();
    const expected = [1, 2, 4, 5];
    expect(test).toEqual(expected);
  });

  test("intersection", () => {
    const a = new Set([1, 2, 3]);
    const b = new Set([3, 4, 5]);

    const test = a.intersection(b).toArray();
    const expected = [3];
    expect(test).toEqual(expected);
  });

  test("union", () => {
    const a = new Set([1, 2, 3]);
    const b = new Set([3, 4, 5]);

    const test = a.union(b).toArray();
    const expected = [1, 2, 3, 4, 5];
    expect(test).toEqual(expected);
  });

  test("isEmpty", () => {
    const a = new Set([]).isEmpty();
    const b = new Set([3, 4, 5]).isEmpty();

    expect(a).toEqual(true);
    expect(b).toEqual(false);
  });

  test("isSubSet", () => {
    const a = new Set([1, 2, 3]);
    const b = new Set([1, 2]);
    const c = new Set([1, 2, 4]);

    expect(b.isSubSet(a)).toEqual(true);
    expect(c.isSubSet(a)).toEqual(false);
  });

  test("isSuperSet", () => {
    const a = new Set([1, 2, 3]);
    const b = new Set([1, 2, 3, 4]);
    const c = new Set([1, 2, 4]);

    expect(b.isSuperSet(a)).toEqual(true);
    expect(c.isSuperSet(a)).toEqual(false);
  });

  test("isDisjoint", () => {
    const a = new Set([1, 2, 3]);
    const b = new Set([4, 5, 6]);
    const c = new Set([1, 2, 4]);

    expect(b.isDisjoint(a)).toEqual(true);
    expect(c.isDisjoint(a)).toEqual(false);
  });

  test("map", () => {
    const test = new Set([1, 2, 3]).map((e) => e + 1);
    const expected = new Set([2, 3, 4]);

    expect(test).toEqual(expected);
  });

  test("filter", () => {
    const test = new Set([1, 2, 3]).filter((n) => n <= 2);
    const expected = [1, 2];
    expect(test.toArray()).toEqual(expected);
  });

  test("reduce", () => {
    const testWithoutInit = new Set([1, 2, 3]).reduce((a, b) => a + b);
    const testWithInit = new Set([1, 2, 3]).reduce((a, b) => a + b, 0);
    const expected = 6;
    expect(testWithInit).toEqual(expected);
    expect(testWithoutInit).toEqual(expected);
  });

  test("some", () => {
    const success = new Set([1, 2, 3]).some((e) => e === 1);
    const fail = new Set([1, 2, 3]).some((e) => e === 5);
    expect(success).toBe(true);
    expect(fail).toBe(false);
  });

  test("every", () => {
    const success = new Set([1, 2, 3]).every((e) => e < 5);
    const fail = new Set([1, 2, 3]).every((e) => e > 2);
    expect(success).toBe(true);
    expect(fail).toBe(false);
  });
});

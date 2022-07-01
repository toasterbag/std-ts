declare global {
  interface Map<K, V> {
    isEmpty(): boolean;

    intersection<I>(other: Map<K, I>): Map<K, [V, I]>;

    map<O>(fn: (key: K, val: V) => O): Map<K, O>;
    filter(fn: (key: K, val: V) => boolean): Map<K, V>;
    some(fn: (key: K, val: V) => boolean): boolean;
    every(fn: (key: K, val: V) => boolean): boolean;

    toArray(): Array<[K, V]>;
  }
}
export {};

Map.prototype.isEmpty = function isEmpty() {
  return this.size === 0;
};

Map.prototype.intersection = function intersection(other) {
  const keys = Array.from(this.keys()).toSet();
  const keys2 = Array.from(other.keys()).toSet();
  return new Map(
    keys
      .intersection(keys2)
      .map((key) => [key, [this.get(key), other.get(key)]]),
  ) as any;
};

Map.prototype.map = function map(fn) {
  return new Map(Array.from(this.entries()).map(([k, v]) => [k, fn(k, v)]));
};

Map.prototype.filter = function filter(fn) {
  return new Map(this.toArray().filter(([k, v]) => fn(k, v)));
};

Map.prototype.some = function some(fn) {
  for (const [key, value] of this.entries()) {
    if (fn(key, value)) return true;
  }
  return false;
};

Map.prototype.every = function every(fn) {
  for (const [key, value] of this.entries()) {
    if (!fn(key, value)) return false;
  }
  return true;
};

Map.prototype.toArray = function toArray() {
  return Array.from(this);
};

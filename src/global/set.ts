declare global {
  interface Set<T> {
    differance(other: Set<T>): Set<T>;
    symmetricDifferance(other: Set<T>): Set<T>;
    union(other: Set<T>): Set<T>;
    intersection(other: Set<T>): Set<T>;

    isEmpty(): boolean;
    isSubSet(other: Set<T>): boolean;
    isSuperSet(other: Set<T>): boolean;
    isDisjoint(other: Set<T>): boolean;

    map<O>(fn: (val: T) => O): Set<O>;
    filter(fn: (val: T) => boolean): Set<T>;
    reduce(fn: (acc: T, val: T) => T, init?: T): T;
    some(fn: (val: T) => boolean): boolean;
    every(fn: (val: T) => boolean): boolean;

    toArray(): Array<T>;
  }
}
export {};

Set.prototype.differance = function differance(other) {
  return this.filter((e) => !other.has(e));
};

Set.prototype.symmetricDifferance = function symmetricDifferance(other) {
  return this.union(other).filter((e) => !(this.has(e) && other.has(e)));
};

Set.prototype.intersection = function intersection(other) {
  return this.filter((e) => other.has(e));
};

Set.prototype.union = function union(other) {
  return Array.from(this).concat(Array.from(other)).toSet();
};

Set.prototype.isEmpty = function isEmpty(): boolean {
  return this.size === 0;
};

Set.prototype.isSubSet = function isSubSet<T>(other: Set<T>): boolean {
  return this.toArray().every((x) => other.has(x));
};

Set.prototype.isSuperSet = function isSuperSet<T>(other: Set<T>): boolean {
  return other.isSubSet(this);
};

Set.prototype.isDisjoint = function isDisjoint<T>(other: Set<T>): boolean {
  return !this.some((x) => other.has(x));
};

Set.prototype.map = function map(fn) {
  return this.toArray()
    .map((v) => fn(v))
    .toSet();
};

Set.prototype.filter = function filter(fn) {
  return this.toArray().filter(fn).toSet();
};

Set.prototype.reduce = function reduce(fn, init) {
  if (init) {
    return this.toArray().reduce(fn, init);
  }
  return this.toArray().reduce(fn);
};

Set.prototype.some = function filter(fn) {
  for (const x of this.values()) {
    if (fn(x)) return true;
  }
  return false;
};

Set.prototype.every = function filter(fn) {
  for (const x of this.values()) {
    if (!fn(x)) return false;
  }
  return true;
};

Set.prototype.toArray = function toArray() {
  return Array.from(this.values());
};

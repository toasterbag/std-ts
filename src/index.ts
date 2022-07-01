export { range } from "./range";

export const first = <T>(vals: [T, ...any]): T => vals[0];
export const second = <T>(vals: [unknown, T, ...any]): T => vals[1];

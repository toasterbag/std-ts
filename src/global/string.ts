declare global {
  interface String {
    capitalize(): string;
  }
}
export {};

String.prototype.capitalize = function capitalize() {
  const head = this.slice(0, 1);
  const tail = this.slice(1);
  return head.toLocaleUpperCase() + tail;
};

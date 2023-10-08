export default class PilaGenerica<T> {
  private static readonly N: number = 3;
  private top: number;
  private sarray: T[];

  constructor(n: number = PilaGenerica.N) {
    this.top = 0;
    this.sarray = new Array<T>(n);
  }

  imprimir(): void {
    console.log(this.sarray);
  }

  empty(): boolean {
    return this.top <= 0;
  }

  private full(): boolean {
    return this.top >= this.sarray.length;
  }

  pop(): T {
    if (this.empty()) {
      throw new Error("Stack is empty");
    }
    this.top--;
    return this.sarray[this.top];
  }

  push(item: T): void {
    if (this.full()) {
      throw new Error("Stack is full");
    }
    this.sarray[this.top] = item;
    this.top++;
  }

  len(): number {
    return this.top;
  }
}
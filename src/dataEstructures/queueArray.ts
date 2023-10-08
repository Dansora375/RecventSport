export default class ColaGenerica<T> {
  private N: number = 5;
  private static readonly N1: number = 5;
  private front: number;
  private rear: number;
  private count: number;
  private qarray: T[];

  constructor(n: number = ColaGenerica.N1) {
    this.N = n;
    this.front = 0;
    this.rear = 0;
    this.count = 0;
    this.qarray = new Array<T>(n);
  }

  dequeue(): T | null {
    let item: T | null = null;
    if (this.empty()) {
      console.log("Queue is empty: item not dequeued");
    } else {
      item = this.qarray[this.front];
      this.front = (this.front + 1) % this.N;
      this.count--;
    }
    return item;
  }

  enqueue(item: T): void {
    if (this.full()) {
      console.log("Queue is full: item not enqueued");
    } else {
      this.qarray[this.rear] = item;
      this.rear = (this.rear + 1) % this.N;
      this.count++;
    }
  }

  empty(): boolean {
    return this.count <= 0;
  }

  full(): boolean {
    return this.count >= this.N;
  }

  getCount(): number {
    return this.count;
  }

  imprimir_N(): number {
    return this.N;
  }

  imprimir(): void {
    console.log(this.qarray);
  }

  peek(): T | null {
    let item: T | null = null;
    if (this.empty()) {
      console.log("Queue is empty: cannot peek");
    } else {
      item = this.qarray[this.front];
    }
    return item;
  }
}

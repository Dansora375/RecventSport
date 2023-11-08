export default class MaxHeap {
  private Heap: number[];
  private size: number;
  private maxsize: number;

  constructor(maxsize: number) {
    this.maxsize = maxsize;
    this.size = 0;
    this.Heap = new Array(this.maxsize);
  }

  private parent(pos: number): number {
    return Math.floor((pos - 1) / 2);
  }

  private leftChild(pos: number): number {
    return 2 * pos + 1;
  }

  private rightChild(pos: number): number {
    return 2 * pos + 2;
  }

  private isLeaf(pos: number): boolean {
    return pos > this.size / 2 && pos <= this.size;
  }

  private swap(fpos: number, spos: number): void {
    const tmp = this.Heap[fpos];
    this.Heap[fpos] = this.Heap[spos];
    this.Heap[spos] = tmp;
  }

  private maxHeapify(pos: number): void {
    if (this.isLeaf(pos)) return;

    if (
      this.Heap[pos] < this.Heap[this.leftChild(pos)] ||
      this.Heap[pos] < this.Heap[this.rightChild(pos)]
    ) {
      if (this.Heap[this.leftChild(pos)] > this.Heap[this.rightChild(pos)]) {
        this.swap(pos, this.leftChild(pos));
        this.maxHeapify(this.leftChild(pos));
      } else {
        this.swap(pos, this.rightChild(pos));
        this.maxHeapify(this.rightChild(pos));
      }
    }
  }

  public insert(element: number): void {
    this.Heap[this.size] = element;

    let current = this.size;
    while (this.Heap[current] > this.Heap[this.parent(current)]) {
      this.swap(current, this.parent(current));
      current = this.parent(current);
    }
    this.size++;
  }

  public print(): void {
    for (let i = 0; i < Math.floor(this.size / 2); i++) {
      console.log("Parent Node : " + this.Heap[i]);

      if (this.leftChild(i) < this.size) {
        console.log(" Left Child Node: " + this.Heap[this.leftChild(i)]);
      }

      if (this.rightChild(i) < this.size) {
        console.log(" Right Child Node: " + this.Heap[this.rightChild(i)]);
      }
    }
  }

  public extractMax(): number {
    const popped = this.Heap[0];
    this.Heap[0] = this.Heap[--this.size];
    this.maxHeapify(0);
    return popped;
  }
}

// console.log("The Max Heap is ");
// const maxHeap = new MaxHeap(15);

// maxHeap.insert(5);
// maxHeap.insert(3);
// maxHeap.insert(17);
// maxHeap.insert(10);
// maxHeap.insert(84);
// maxHeap.insert(19);
// maxHeap.insert(6);
// maxHeap.insert(22);
// maxHeap.insert(9);

// maxHeap.print();

// console.log("The max val is " + maxHeap.extractMax());

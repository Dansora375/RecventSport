export interface IPost {
    _id?: string;
    title: string;
    image_url: string;
    cat: number; // 1, 2,3,4
    description: string;
    date: Date;
    city: number; // 1: Bogota 2:Medellin
    level: number; // 1,2,3
    num_members: number;
    members: string[];
    author: string;
    authorPFP: string;
    authorName: string;
  }
  
  export default class MaxHeap {
    private Heap: IPost[];
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
      if (this.isLeaf(pos) || this.Heap[pos] === undefined) return;
  
      const currentnum_members = this.Heap[pos]?.num_members || 0;
      const leftChild = this.leftChild(pos);
      const rightChild = this.rightChild(pos);
  
      if (
        (leftChild < this.size && currentnum_members < this.Heap[leftChild]?.num_members) ||
        (rightChild < this.size && currentnum_members < this.Heap[rightChild]?.num_members)
      ) {
        if (
          rightChild < this.size &&
          this.Heap[leftChild]?.num_members < this.Heap[rightChild]?.num_members
        ) {
          this.swap(pos, rightChild);
          this.maxHeapify(rightChild);
        } else {
          this.swap(pos, leftChild);
          this.maxHeapify(leftChild);
        }
      }
    }
  
    public insert(element: IPost): void {
      if (this.size === this.maxsize) {
        console.error("Heap is full. Cannot insert more elements.");
        return;
      }
  
      this.Heap[this.size] = element;
  
      let current = this.size;
      while (current > 0 && this.Heap[current].num_members > this.Heap[this.parent(current)].num_members) {
        this.swap(current, this.parent(current));
        current = this.parent(current);
      }
  
      this.size++;
    }
  
    public print(): void {
      for (let i = 0; i < Math.floor(this.size / 2); i++) {
        console.log("Parent Node : " + JSON.stringify(this.Heap[i]));
  
        const leftChild = this.leftChild(i);
        const rightChild = this.rightChild(i);
  
        if (leftChild < this.size) {
          console.log(" Left Child Node: " + JSON.stringify(this.Heap[leftChild]));
        }
  
        if (rightChild < this.size) {
          console.log(" Right Child Node: " + JSON.stringify(this.Heap[rightChild]));
        }
      }
    }
  
    public extractMax(): IPost | undefined {
      if (this.size === 0) {
        console.error("Heap is empty. Cannot extract max element.");
        return undefined;
      }
  
      const popped = this.Heap[0];
      this.Heap[0] = this.Heap[--this.size];
      this.maxHeapify(0);
  
      return popped;
    }
  }
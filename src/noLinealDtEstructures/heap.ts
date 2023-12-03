// interface Evento {
//   id:number;
//   nombre:string;
//   description: string;
//   deporte: string;
//   fechaHora : Date;
//   ubicacion:string;
//   capacidaMax:number;
//   ranting:number;
//   costo?: number;
//   integrantes: number
// }

export interface IPost{
  _id?: string;
  title: string;
  image_url: string;
  cat: number;        // 1, 2,3,4
  description: string;
  date: Date;     ///
  city: number;  /// 1: Bogota 2:Medellin
  level: number;   /// 1,2,3
  num_members: number;
  members: string[];
  author: string,
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
  
    if (
      currentnum_members < (this.Heap[this.leftChild(pos)]?.num_members || 0) ||
      currentnum_members < (this.Heap[this.rightChild(pos)]?.num_members || 0)
    ) {
      if ((this.Heap[this.leftChild(pos)]?.num_members || 0) > (this.Heap[this.rightChild(pos)]?.num_members || 0)) {
        this.swap(pos, this.leftChild(pos));
        this.maxHeapify(this.leftChild(pos));
      } else {
        this.swap(pos, this.rightChild(pos));
        this.maxHeapify(this.rightChild(pos));
      }
    }
  }
  public insert(element: IPost): void {
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
      console.log("Parent Node : " + this.Heap[i]);

      if (this.leftChild(i) < this.size) {
        console.log(" Left Child Node: " + this.Heap[this.leftChild(i)]);
      }

      if (this.rightChild(i) < this.size) {
        console.log(" Right Child Node: " + this.Heap[this.rightChild(i)]);
      }
    }
  }

  public extractMax(): IPost {
    const popped = this.Heap[0];
    this.Heap[0] = this.Heap[--this.size];
    this.maxHeapify(0);
    return popped;
  }
}


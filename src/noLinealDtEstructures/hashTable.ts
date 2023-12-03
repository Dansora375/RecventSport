
import { faker } from '@faker-js/faker';

class HashNode<K, V> {
  key: K;
  value: V;
  hashCode: number;
  next: HashNode<K, V> | null;

  constructor(key: K, value: V, hashCode: number) {
    this.key = key;
    this.value = value;
    this.hashCode = hashCode;
    this.next = null;
  }
}

class Mapgene<K, V> {
  private bucketArray: Array<HashNode<K, V> | null>;
  private numBuckets: number;
  private size: number;

  constructor() {
    this.bucketArray = new Array<HashNode<K, V> | null>(10).fill(null);
    this.numBuckets = 10;
    this.size = 0;
  }

  size1(): number {
    return this.size;
  }

  isEmpty(): boolean {
    return this.size === 0;
  }
   murmurhash2(str: string, seed: number = 0): number {
    const m = 0x5bd1e995;
    const r = 24;
  
    let h = seed ^ str.length;
  
    for (let i = 0; i < str.length; i++) {
      let k = str.charCodeAt(i);
      k *= m;
      k ^= k >>> r;
      k *= m;
  
      h *= m;
      h ^= k;
    }
  
    h ^= h >>> 13;
    h *= m;
    h ^= h >>> 15;
  
    return h >>> 0; // Garantiza un valor no negativo
  }
  
  private hashCode(key: K): number {
    if (typeof key === 'string') {
      return this.murmurhash2(key);
    } else {
      throw new Error('La clave debe ser de tipo string.');
    }
  }

  private getBucketIndex(key: K): number {
    const hashCode = this.hashCode(key);
    let index = hashCode % this.numBuckets;
    index = index < 0 ? index * -1 : index;
    return index;
  }

  remove(key: K): V | null {
    const bucketIndex = this.getBucketIndex(key);
    const hashCode = this.hashCode(key);
    let head = this.bucketArray[bucketIndex];

    let prev: HashNode<K, V> | null = null;
    while (head !== null) {
      if (head.key === key && head.hashCode === hashCode) {
        break;
      }

      prev = head;
      head = head.next;
    }

    if (head === null) {
      return null;
    }

    this.size--;

    if (prev !== null) {
      prev.next = head.next;
    } else {
      this.bucketArray[bucketIndex] = head.next;
    }

    return head.value;
  }

  get(key: K): V | null {
    const bucketIndex = this.getBucketIndex(key);
    const hashCode = this.hashCode(key);
    let head = this.bucketArray[bucketIndex];

    while (head !== null) {
      if (head.key === key && head.hashCode === hashCode) {
        return head.value;
      }
      head = head.next;
    }

    return null;
  }

  add(key: K, value: V): void {
    const bucketIndex = this.getBucketIndex(key);
    const hashCode = this.hashCode(key);
    let head = this.bucketArray[bucketIndex];

    while (head !== null) {
      if (head.key === key && head.hashCode === hashCode) {
        head.value = value;
        return;
      }
      head = head.next;
    }

    this.size++;
    head = this.bucketArray[bucketIndex];
    const newNode = new HashNode(key, value, hashCode);
    newNode.next = head;
    this.bucketArray[bucketIndex] = newNode;

    if (1.0 * this.size / this.numBuckets >= 0.7) {
      const temp = this.bucketArray;
      this.bucketArray = new Array<HashNode<K, V> | null>(2 * this.numBuckets).fill(null);
      this.numBuckets = 2 * this.numBuckets;
      this.size = 0;

      for (let headNode of temp) {
        while (headNode !== null) {
          this.add(headNode.key, headNode.value);
          headNode = headNode.next;
        }
      }
    }
  }
}

export interface IPost{
  _id: string;
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

// Driver method to test Map class
const map = new Mapgene<string, IPost>();
// export function pruebHashT (){
  
//   map.add("this", 1);
//   map.add("coder", 2);
//   map.add("this", 4);
//   map.add("hi", 5);
//   console.log(map.size1());
//   console.log(map.remove("this"));
//   console.log(map.remove("this"));
//   console.log(map.size1());
//   console.log(map.isEmpty());
    
// }

const numPruebas=15;


function crearDatosFaker(){
  const insertEvent: string[] = [];

  faker.seed(42)
  // const numPruebas=10;
  
  for (let i =0; i<numPruebas;i++){

    const event: IPost= {
   
    _id: faker.lorem.lines({ min: 1, max: 1 }),
      title: faker.word.noun(),
      image_url: faker.image.url(),
      cat: faker.number.int({ min: 10, max: 100 }),        // 1, 2,3,4
      description: faker.lorem.lines({ min: 1, max: 2 }),
      date: faker.date.anytime(),     ///
      city: faker.number.int({ min: 1, max: 50 }),  /// 1: Bogota 2:Medellin
      level: faker.number.int({ min: 1, max: 50 }),   /// 1,2,3
      num_members: faker.number.int({ min: 1, max: 50 }),
      members: [faker.person.fullName(),faker.person.fullName()],
      author: faker.person.fullName(),
      authorPFP: faker.person.fullName(),
      authorName: faker.person.fullName()
    }

    
    map.add(event._id, event)
    if (i%2==0){

      insertEvent.push(event._id)
    }

  }
  // for(const element of insertEvent){
  //   if (){

  //   }
  // }
}

// export function insertEvent(){

//   crearDatosFaker()
//   for(const element of insertEvent){

//   }

// }

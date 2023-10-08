import LinkedList from "./linkedList"
export default class cola <T> extends LinkedList <T> {
  enqueue (key: T ): void{
    this.pushBack(key)
  }
  dequeue():void{
    this.topFront()
    this.popFront()
  }
  peek():void{
    this.topFront()
  }
  emptyqueue(): void {
    this.empty()
  }
}
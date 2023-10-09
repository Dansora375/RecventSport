import LinkedList from "./linkedList";


export default class pila <T> extends LinkedList<T> {
  push(value: T):void{
    this.pushFront(value)

  }
  pop():void{
    this.topFront()
    this.popFront()
  }

  keyTop():T|null {
    return this.topFront()
  }
  emptyStack():void{
    this.empty()
  }
  


}
import LinkedList from "./linkedList";


export default class pila <T> extends LinkedList<T> {
  push(value: T):void{
    this.pushFront(value)

  }
  pop(): T | null{
    const pop :T | null= this.topFront()
    this.popFront()
    return pop
  }

  keyTop(): T | null{
    return this.topFront()
  }
  emptyStack():void{
    this.empty()
  }
  


}
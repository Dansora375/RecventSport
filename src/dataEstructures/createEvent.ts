import { faker } from '@faker-js/faker';
import cola from './queue';
import pila from './stack';
import ColaGenerica from './queueArray';
import PilaGenerica from './stackArray';

interface evento {
  id?:number,
  nombre:string;
  description: string;
  deporte: string;
  fechaHora : Date;
  ubicacion:string;
  capacidaMax:number;
  costo?: number;
}
const eventsNumeber=1000
const queue = new cola <evento>()
const queueArray = new ColaGenerica <evento>(eventsNumeber)
const stackArray = new PilaGenerica <evento>(eventsNumeber)
const stack = new pila <evento>()
const datosArray: evento[]=new Array(eventsNumeber+7);
const arr: evento[] = new Array(eventsNumeber + 7);


for (let i =0; i<eventsNumeber;i++){
  faker.seed(42)

  const event: evento= {
    id: i,
    nombre:faker.person.firstName(),
    description:faker.lorem.lines({ min: 1, max: 3 }),
    deporte: faker.word.adjective(),
    fechaHora :faker.date.anytime(),
    ubicacion:faker.location.street(),
    capacidaMax:faker.number.int({ min: 10, max: 100 }),
    costo:faker.number.int({ min: 1000, max: 10000 })
    }
    
    datosArray.push(event)
    // console.log(event)
}


export  function pruebaAddInQueue():void{
  
  
  console.time("tiempo pruebaAddInQueue")
  for (let i =0; i<eventsNumeber;i++){

      queue.enqueue(datosArray[i])
      // console.log(event)
  }
  console.timeEnd("tiempo pruebaAddInQueue")
}


export  function pruebaAddInQueueArray():void{
  
  console.time("tiempo pruebaAddInQueueArray")
  for (let i =0; i<eventsNumeber;i++){

      
      queueArray.enqueue(datosArray[i])
      // console.log(event)
  }
  console.timeEnd("tiempo pruebaAddInQueueArray")

}



export   function pruebaEliminarInQueue(): void{
  console.time("tiempo pruebaEliminarInQueue")
  for (let i =0; i<eventsNumeber;i++){
    queue.dequeue()
    
  }
  console.timeEnd("tiempo pruebaEliminarInQueue")
}

export   function pruebaEliminarInQueueArray(): void{
  console.time("tiempo pruebaEliminarInQueueArray")
  for (let i =0; i<eventsNumeber;i++){
    queueArray.dequeue()
    
  }
  console.timeEnd("tiempo pruebaEliminarInQueueArray")
}


export  function pruebaAddInStack():void{
  console.time("tiempo pruebaAddInStack")
  
  for (let i =0; i<eventsNumeber;i++){

    
      
      stack.push(datosArray[i])
      // console.log(event)
  }
  console.timeEnd("tiempo pruebaAddInStack")
}


export  function pruebaAddInStackArray():void{
  console.time("tiempo pruebaAddInStackArray")
  
  for (let i =0; i<eventsNumeber;i++){


      stackArray.push(datosArray[i])
      // console.log(event)
  }
  console.timeEnd("tiempo pruebaAddInStackArray")

}


export   function pruebaEliminarInStack(): void{
  console.time("tiempo pruebaEliminarInStack")
  for (let i =0; i<eventsNumeber;i++){
    stack.pop()
    
  }
  console.timeEnd("tiempo pruebaEliminarInStack")
}

export   function pruebaEliminarInStackArray(): void{

  console.time("tiempo pruebaEliminarInStackArray")
  for (let i =0; i<eventsNumeber;i++){
    stackArray.pop()
    
  }
  console.timeEnd("tiempo pruebaEliminarInStackArray")
}

export  function pruebaAddInArray():void{

  console.time("tiempo3")
  for (let i =0; i<eventsNumeber;i++){  
      arr[i] = datosArray[i];
  }
  console.timeEnd("tiempo3")

}


export  function pruebaSearchInArray():void{

  const targetId: number = 12;


  console.time("tiempo3")
  arr.find((evento1) => evento1.id == targetId);
  console.timeEnd("tiempo3")

}

// ejecucion

// pruebaAddInQueue()

// pruebaEliminarInQueue() 

// pruebaAddInQueueArray()

// pruebaEliminarInQueueArray()


// pruebaAddInStack()


// pruebaEliminarInStack()

// pruebaAddInStackArray()

// pruebaEliminarInStackArray()


// ------
pruebaAddInArray()
pruebaSearchInArray()


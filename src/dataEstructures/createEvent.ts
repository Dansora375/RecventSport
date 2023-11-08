import { faker } from '@faker-js/faker';
import cola from './queue';
import pila from './stack';
import ColaGenerica from './queueArray';
import PilaGenerica from './stackArray';

interface evento {
  id:number;
  nombre:string;
  description: string;
  deporte: string;
  fechaHora : Date;
  ubicacion:string;
  capacidaMax:number;
  costo?: number;
}


// const aray1={
//   id:1,
//   nombre:'camilo',
//   description: 'lore estrein',
//   deporte: 'natacion',
//   fechaHora : 'Sat Aug 24 2024 03:11:35 GMT-0500',
//   ubicacion:'"Abagail Dam"',
//   capacidaMax:123,
// }
// const aray2={
//   id:2,
//   nombre:'camilo',
//   description: 'lore estrein',
//   deporte: 'natacion',
//   fechaHora : 'Sat Aug 24 2024 03:11:35 GMT-0500',
//   ubicacion:'"Abagail Dam"',
//   capacidaMax:123,
// }
// const aray3={
//   id:3,
//   nombre:'camilo',
//   description: 'lore estrein',
//   deporte: 'natacion',
//   fechaHora : 'Sat Aug 24 2024 03:11:35 GMT-0500',
//   ubicacion:'"Abagail Dam"',
//   capacidaMax:123,
// }
// const aray4={
//   id:4,
//   nombre:'camilo',
//   description: 'lore estrein',
//   deporte: 'natacion',
//   fechaHora : 'Sat Aug 24 2024 03:11:35 GMT-0500',
//   ubicacion:'"Abagail Dam"',
//   capacidaMax:123,
// }
// const aray5={
//   id:5,
//   nombre:'camilo',
//   description: 'lore estrein',
//   deporte: 'natacion',
//   fechaHora : 'Sat Aug 24 2024 03:11:35 GMT-0500',
//   ubicacion:'"Abagail Dam"',
//   capacidaMax:123,
// }


const eventsNumeber= 5
const queue = new cola <evento>()
const queueint = new cola <number>()
const queueArray = new ColaGenerica <evento>(eventsNumeber)
const queueArrayint = new ColaGenerica <number>(eventsNumeber)
const stackArray = new PilaGenerica <evento>(eventsNumeber)
const stackArray1 = new PilaGenerica <evento>(eventsNumeber)
const stackArrayint = new PilaGenerica <number>(eventsNumeber)
const stack = new pila <evento | null>()
const stackint = new pila <number>()

const datosArray: evento[]=new Array(eventsNumeber+7);

const arr: evento[] = new Array(eventsNumeber + 7);
const arrint: number[] = new Array(eventsNumeber + 7);

console.log("numero de eventos: " + eventsNumeber);

console.time("create data");

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
    datosArray[i] = event
    
    // console.log(event)
}
console.timeEnd("create data")


export  function pruebaAddInQueue():void{
  
  
  console.time("tiempo pruebaAddInQueue")
  for (let i =0; i<eventsNumeber;i++){

      queue.enqueue(datosArray[i])
      // console.log(event)
  }
  console.timeEnd("tiempo pruebaAddInQueue")
}

//Función con enteros ---------------------------------------------------------------------------------------------------
export  function pruebaAddInQueueEnteros():void{
  
  console.time("tiempo pruebaAddInQueueEnteros")
  for (let i =0; i<eventsNumeber;i++){

      queueint.enqueue(i)
      // console.log(event)
  }
  console.timeEnd("tiempo pruebaAddInQueueEnteros")
}


export  function pruebaAddInQueueArray():void{
  
  console.time("tiempo pruebaAddInQueueArray")
  for (let i =0; i<eventsNumeber;i++){

      
      queueArray.enqueue(datosArray[i])
      // console.log(event)
  }
  console.timeEnd("tiempo pruebaAddInQueueArray")

}

//Función con enteros ---------------------------------------------------------------------------------------------------
export  function pruebaAddInQueueArrayEnteros():void{
  
  console.time("tiempo pruebaAddInQueueArrayEnteros")
  for (let i =0; i<eventsNumeber;i++){

      
      queueArrayint.enqueue(i)
      // console.log(event)
  }
  console.timeEnd("tiempo pruebaAddInQueueArrayEnteros")

}


export   function pruebaEliminarInQueue(): void{
  console.time("tiempo pruebaEliminarInQueue")
  for (let i =0; i<eventsNumeber;i++){
    queue.dequeue()
    
  }
  console.timeEnd("tiempo pruebaEliminarInQueue")
}

//Función con enteros ---------------------------------------------------------------------------------------------------
export   function pruebaEliminarInQueueEnteros(): void{
  console.time("tiempo pruebaEliminarInQueueEnteros")
  for (let i =0; i<eventsNumeber;i++){
    queueint.dequeue()
    
  }
  console.timeEnd("tiempo pruebaEliminarInQueueEnteros")
}


export   function pruebaEliminarInQueueArray(): void{
  console.time("tiempo pruebaEliminarInQueueArray")
  for (let i =0; i<eventsNumeber;i++){
    queueArray.dequeue()
    
  }
  console.timeEnd("tiempo pruebaEliminarInQueueArray")
}



//Función con enteros ---------------------------------------------------------------------------------------------------
export   function pruebaEliminarInQueueArrayEnteros(): void{
  console.time("tiempo pruebaEliminarInQueueArrayEnteros")
  for (let i =0; i<eventsNumeber;i++){
    queueArrayint.dequeue()
    
  }
  console.timeEnd("tiempo pruebaEliminarInQueueArrayEnteros")
}


export  function pruebaAddInStack():void{
  console.time("tiempo pruebaAddInStack")
  
  for (let i =0; i<eventsNumeber;i++){
      stack.push(datosArray[i])
      // console.log(event)
  }
  console.timeEnd("tiempo pruebaAddInStack")
  console.log(stack)
}

//Función con enteros ---------------------------------------------------------------------------------------------------
export  function pruebaAddInStackEnteros():void{
  console.time("tiempo pruebaAddInStackEnteros")
  
  for (let i =0; i<eventsNumeber;i++){
      stackint.push(i)
      // console.log(event)
  }
  console.timeEnd("tiempo pruebaAddInStackEnteros")
}


export  function pruebaAddInStackArray():void{
  console.time("tiempo pruebaAddInStackArray")
  
  for (let i =0; i<eventsNumeber;i++){


      stackArray.push(datosArray[i])
      // console.log(event)
  }
  console.timeEnd("tiempo pruebaAddInStackArray")
  console.log(stackArray)

}

export  function pruebaAddInStackArray2():void{
  // console.time("tiempo pruebaAddInStackArray")
  // for (let i =0; i<eventsNumeber;i++){
  //   stackArray.pop()
  // }

  for (let i =0; i<eventsNumeber;i++){

    if (i==2){
      continue
    }else{
      stackArray1.push(datosArray[i])

    }
      // console.log(event)
  }
  // console.timeEnd("tiempo pruebaAddInStackArray")
  console.log(stackArray1)

}

//Función con enteros ---------------------------------------------------------------------------------------------------
export  function pruebaAddInStackArrayEnteros():void{
  console.time("tiempo pruebaAddInStackArrayEnteros")
  
  for (let i =0; i<eventsNumeber;i++){


      stackArrayint.push(i)
      // console.log(event)
  }
  console.timeEnd("tiempo pruebaAddInStackArrayEnteros")

}


export   function pruebaEliminarInStack(): void{
  console.time("tiempo pruebaEliminarInStack")
  for (let i =0; i<eventsNumeber;i++){
    stack.pop()
    
  }
  console.timeEnd("tiempo pruebaEliminarInStack")
}

//Función con enteros ---------------------------------------------------------------------------------------------------
export   function pruebaEliminarInStackEnteros(): void{
  console.time("tiempo pruebaEliminarInStackEnteros")
  for (let i =0; i<eventsNumeber;i++){
    stackint.pop()
    
  }
  console.timeEnd("tiempo pruebaEliminarInStackEnteros")
}

export   function pruebaEliminarInStackArray(): void{

  console.time("tiempo pruebaEliminarInStackArray")
  for (let i =0; i<eventsNumeber;i++){
    stackArray.pop()
    
  }
  console.timeEnd("tiempo pruebaEliminarInStackArray")
}



export   function pruebaSearchInStackArray(): void{
  //Llamamos despues de haber eliminado, por lo tanto tenemos que llenar el queue de nuevo
  pruebaAddInStackArray()
  const targetId: number = 2;
  console.time("tiempo pruebaSearchInStackArray")
  for (let index = 0; index < eventsNumeber; index++) {
    const temp: evento | null = stackArray.pop();
    if(temp != null && temp.id==targetId){
      break;
    } 
  }
  console.timeEnd("tiempo pruebaSearchInStackArray")
}
//Función con enteros ---------------------------------------------------------------------------------------------------
export   function pruebaEliminarInStackArrayEnteros(): void{

  console.time("tiempo pruebaEliminarInStackArrayEnteros")
  for (let i =0; i<eventsNumeber;i++){
    stackArrayint.pop()
    
  }
  console.timeEnd("tiempo pruebaEliminarInStackArrayEnteros")
}


export  function pruebaAddInArray():void{

  console.time("tiempo insercion array")
  for (let i =0; i<eventsNumeber;i++){  
      arr[i] = datosArray[i];
  }
  console.timeEnd("tiempo insercion array")

}

//Función con enteros ---------------------------------------------------------------------------------------------------
export  function pruebaAddInArrayEnteros():void{

  console.time("tiempo insercion array enteros")
  for (let i =0; i<eventsNumeber;i++){  
      arrint[i] = i;
  }
  console.timeEnd("tiempo insercion array enteros")

}

export function pruebaSearchInArray():void{
  const targetId: number = eventsNumeber-5;
  console.time("tiempo busqueda en array")
  for (let index = 0; index < eventsNumeber; index++) {
    if(datosArray[index].id=== targetId){
      //console.log(index)
      break;
    } 
  }
  console.timeEnd("tiempo busqueda en array")
}

//Función con enteros ---------------------------------------------------------------------------------------------------
export function pruebaSearchInArrayEnteros():void{
  const targetId: number = eventsNumeber-5;
  console.time("tiempo busqueda en array enteros")
  for (let index = 0; index < eventsNumeber; index++) {
    if(arrint[index]=== targetId){
      //console.log(index)
      break;
    } 
  }
  console.timeEnd("tiempo busqueda en array enteros")
}


export   function pruebaSearchInQueue(): void{
  //Llamamos despues de haber eliminado, por lo tanto tenemos que llenar el queue de nuevo
  pruebaAddInQueue()
  const targetId: number = eventsNumeber-5;
  console.time("tiempo pruebaSearchInQueue")
  for (let index = 0; index < eventsNumeber; index++) {
    const temp: evento | null = queue.peek();
    if(temp != null && temp.id==targetId){
      break;
    } 
  }
  console.timeEnd("tiempo pruebaSearchInQueue")
}

//Función con enteros ---------------------------------------------------------------------------------------------------
export   function pruebaSearchInQueueEnteros(): void{
  //Llamamos despues de haber eliminado, por lo tanto tenemos que llenar el queue de nuevo
  pruebaAddInQueueEnteros()
  const targetId: number = eventsNumeber-5;
  console.time("tiempo pruebaSearchInQueueEnteros")
  for (let index = 0; index < eventsNumeber; index++) {
    const temp: number | null = queueint.peek();
    if(temp != null && temp==targetId){
      break;
    } 
  }
  console.timeEnd("tiempo pruebaSearchInQueueEnteros")
}


export   function pruebaSearchInQueueArray(): void{
  //Llamamos despues de haber eliminado, por lo tanto tenemos que llenar el queue de nuevo

  pruebaAddInQueueArray();
  const targetId: number = eventsNumeber-5;
  console.time("tiempo pruebaSearchInQueueArray")
  for (let index = 0; index < eventsNumeber; index++) {
    const temp: evento | null = queueArray.peek();
    if(temp != null && temp.id==targetId){
      break;
    } 
  }
  console.timeEnd("tiempo pruebaEliminarInQueueArray")
}

//Función con enteros ---------------------------------------------------------------------------------------------------
export   function pruebaSearchInQueueArrayEnteros(): void{
  //Llamamos despues de haber eliminado, por lo tanto tenemos que llenar el queue de nuevo

  pruebaAddInQueueArrayEnteros();
  const targetId: number = eventsNumeber-5;
  console.time("tiempo pruebaSearchInQueueArrayEnteros")
  for (let index = 0; index < eventsNumeber; index++) {
    const temp: number | null = queueArrayint.peek();
    if(temp != null && temp==targetId){
      break;
    } 
  }
  console.timeEnd("tiempo pruebaSearchInQueueArrayEnteros")
}


export   function pruebaSearchInStack(): void{
  //Llamamos despues de haber eliminado, por lo tanto tenemos que llenar el queue de nuevo
  pruebaAddInStack()
  const targetId: number = 2;
  console.time("tiempo pruebaSearchInStack")
  for (let index = 0; index < eventsNumeber; index++) {
    const temp: evento | null = stack.keyTop();
    if(temp != null && temp.id==targetId){
      break;
    } 
  }
  console.timeEnd("tiempo pruebaSearchInQueue")
}

//Función con enteros ---------------------------------------------------------------------------------------------------
export   function pruebaSearchInStackEnteros(): void{
  //Llamamos despues de haber eliminado, por lo tanto tenemos que llenar el queue de nuevo
  pruebaAddInStackEnteros()
  const targetId: number = 2;
  console.time("tiempo pruebaSearchInStackEnteros")
  for (let index = 0; index < eventsNumeber; index++) {
    const temp: number | null = stackint.keyTop();
    if(temp != null && temp==targetId){
      break;
    } 
  }
  console.timeEnd("tiempo pruebaSearchInStackEnteros")
}


//Función con enteros ---------------------------------------------------------------------------------------------------
export   function pruebaSearchInStackArrayEnteros(): void{
  //Llamamos despues de haber eliminado, por lo tanto tenemos que llenar el queue de nuevo
  pruebaAddInStackArrayEnteros()
  const targetId: number = 2;
  console.time("tiempo pruebaSearchInStackArrayEnteros")
  for (let index = 0; index < eventsNumeber; index++) {
    const temp: number | null = stackArrayint.pop();
    if(temp != null && temp==targetId){
      break;
    } 
  }
  console.timeEnd("tiempo pruebaSearchInStackArrayEnteros")
}

// -----------------------------------------------------------------------


export function AddInStack():void{ 
  const event: evento= {
    id: faker.number.int({ min: 1000, max: 10000 }),
    nombre:faker.person.firstName(),
    description:faker.lorem.lines({ min: 1, max: 3 }),
    deporte: faker.word.adjective(),
    fechaHora :faker.date.anytime(),
    ubicacion:faker.location.street(),
    capacidaMax:faker.number.int({ min: 10, max: 100 }),
    costo:faker.number.int({ min: 1000, max: 10000 })
    }
  stack.push(event)
  console.log(stack)
}

// const backStack= new PilaGenerica <evento>(10)
// export function craetStack():void{ 
  
//   // pruebaAddInStackArray2()
//   // console.log(pruebaAddInStackArray2)
//   console.log(aray1)
//   console.log(aray2)
//   console.log(aray3)
//   console.log(aray4)
//   console.log(aray5)
  
// } 

// export function deleteInStack():void{ 
  
//   // pruebaAddInStackArray2()
//   // console.log(pruebaAddInStackArray2)
//   console.log(aray1)
//   console.log(aray3)
//   console.log(aray4)
//   console.log(aray5)
  
// } 
// craetStack()
// ejecucion

// pruebaAddInStackArray()


// pruebaAddInQueueEnteros()

// pruebaEliminarInQueueEnteros() 

// pruebaSearchInQueue()

// pruebaAddInQueueArray()

// pruebaEliminarInQueueArrayEnteros()

// pruebaSearchInQueueArray()

// pruebaAddInStackEnteros()

// pruebaEliminarInStack()
// pruebaSearchInStack()

// pruebaAddInStackArrayEnteros()

// pruebaEliminarInStackArray()
// pruebaSearchInStackArray()

// pruebaAddInArray()
// pruebaSearchInArray()


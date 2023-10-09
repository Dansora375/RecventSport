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


const eventsNumeber= 100000000
const queue = new cola <evento>()
const queueint = new cola <number>()
const queueArray = new ColaGenerica <evento>(eventsNumeber)
const queueArrayint = new ColaGenerica <number>(eventsNumeber)
const stackArray = new PilaGenerica <evento>(eventsNumeber)
const stackArrayint = new PilaGenerica <number>(eventsNumeber)
const stack = new pila <evento>()
const stackint = new pila <number>()

const datosArray: evento[]=new Array(eventsNumeber+7);

const arr: evento[] = new Array(eventsNumeber + 7);
const arrint: number[] = new Array(eventsNumeber + 7);

console.log("numero de eventos: " + eventsNumeber);

// console.time("create data");

// for (let i =0; i<eventsNumeber;i++){
//   faker.seed(42)

//   const event: evento= {
//     id: i,
//     nombre:faker.person.firstName(),
//     description:faker.lorem.lines({ min: 1, max: 3 }),
//     deporte: faker.word.adjective(),
//     fechaHora :faker.date.anytime(),
//     ubicacion:faker.location.street(),
//     capacidaMax:faker.number.int({ min: 10, max: 100 }),
//     costo:faker.number.int({ min: 1000, max: 10000 })
//     }
//     datosArray[i] = event
    
//     // console.log(event)
// }
// console.timeEnd("create data")


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



export   function pruebaSearchInStackArray(): void{
  //Llamamos despues de haber eliminado, por lo tanto tenemos que llenar el queue de nuevo
  pruebaAddInStackArray()
  const targetId: number = 2;
  console.time("tiempo pruebaSearchInQueueArray")
  for (let index = 0; index < eventsNumeber; index++) {
    const temp: evento | null = stackArray.pop();
    if(temp != null && temp.id==targetId){
      break;
    } 
  }
  console.timeEnd("tiempo pruebaSearchInQueueArray")
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

// ejecucion

pruebaAddInQueueEnteros()

pruebaEliminarInQueueEnteros() 

pruebaAddInQueueArrayEnteros()

pruebaEliminarInQueueArrayEnteros()


pruebaAddInStackEnteros()


pruebaEliminarInStackEnteros()

pruebaAddInStackArrayEnteros()

pruebaEliminarInStackArrayEnteros()

pruebaSearchInQueueEnteros()

pruebaSearchInQueueArrayEnteros()
//-------------------------------------------------

pruebaSearchInStackEnteros()

pruebaSearchInStackArrayEnteros()

pruebaAddInArrayEnteros()

pruebaSearchInArrayEnteros()


// ------
// pruebaAddInArray()
// pruebaSearchInArray()


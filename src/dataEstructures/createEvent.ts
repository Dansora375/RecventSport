import { faker } from '@faker-js/faker';
import cola from './queue';
import pila from './stack';

interface evento {
  nombre:string;
  description: string;
  deporte: string;
  fechaHora : Date;
  ubicacion:string;
  capacidaMax:number;
  costo?: number;
}
const eventsNumeber=10
const queue = new cola <evento>()
const stack = new pila <evento>()


export default function pruebaAddInQueue():void{
  
  faker.seed(42)
  console.time("tiempo")
  for (let i =0; i<eventsNumeber;i++){

    const event: evento= {
      nombre:faker.person.firstName(),
      description:faker.lorem.lines({ min: 1, max: 3 }),
      deporte: faker.word.adjective(),
      fechaHora :faker.date.anytime(),
      ubicacion:faker.location.street(),
      capacidaMax:faker.number.int({ min: 10, max: 100 }),
      costo:faker.number.int({ min: 1000, max: 10000 })
      }
      
      queue.enqueue(event)
      // console.log(event)
  }
  console.timeEnd("tiempo")
}

export  function pruebaEliminarInQueue(): void{
  console.time("tiempo eliminar")
  for (let i =0; i<eventsNumeber;i++){
    queue.dequeue()
    
  }
  console.timeEnd("tiempo eliminar")
}

export  function pruebaAddInStack():void{
  console.time("tiempo")
  faker.seed(42)
  for (let i =0; i<eventsNumeber;i++){

    const event: evento= {
      nombre:faker.person.firstName(),
      description:faker.lorem.lines({ min: 1, max: 3 }),
      deporte: faker.word.adjective(),
      fechaHora :faker.date.anytime(),
      ubicacion:faker.location.street(),
      capacidaMax:faker.number.int({ min: 10, max: 100 }),
      costo:faker.number.int({ min: 1000, max: 10000 })
      }
      
      stack.push(event)
      // console.log(event)
  }
  console.timeEnd("tiempo")
}
export   function pruebaEliminarInStack(): void{
  console.time("tiempo eliminar")
  for (let i =0; i<eventsNumeber;i++){
    stack.pop()
    
  }
  console.timeEnd("tiempo eliminar")
}



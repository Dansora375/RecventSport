import { faker } from '@faker-js/faker';
import cola from './queue';

interface evento {
  nombre:string;
  description: string;
  deporte: string;
  fechaHora : Date;
  ubicacion:string;
  capacidaMax:number;
  costo?: number;
}

// const faker = require('faker');
export default function prueba():void{
  const queue = new cola <evento>()

  faker.seed(42)
  for (let i =0; i<2;i++){

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
}

function createEvent():void{

}
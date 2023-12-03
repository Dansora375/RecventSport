import PilaGenerica from './stackArray';
import { faker } from '@faker-js/faker';

interface notificacion {
  id:number;
  tipo:string,
  titulo:string;
  description: string;
  from: string;
  fechaHora : Date;
  to:string;
}
const numPruebas=10;
const pilaGen = new PilaGenerica<notificacion> (numPruebas);


function crearDatosFaker(){
  faker.seed(30)
  // const numPruebas=10;
  
  for (let i =0; i<numPruebas;i++){

    const notifi: notificacion= {
    id: i,
    tipo:faker.word.adjective(),
    titulo:faker.word.preposition(),
    description: faker.lorem.lines({ min: 1, max: 3 }),
    from: faker.person.firstName(),
    fechaHora : faker.date.anytime(),
    to:faker.person.firstName()
    }
    pilaGen.push(notifi)
    // datosArray[i]=event;
    
  }
}

export function insertNoti(){
  crearDatosFaker()
  pilaGen.imprimir()
}

export function showNotis(){
  for (let i =0; i<numPruebas;i++){
    console.log(    pilaGen.pop())

    
  }
}
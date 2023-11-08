import { faker } from '@faker-js/faker';
import MaxHeap from './heap';

interface Evento {
  id:number;
  nombre:string;
  description: string;
  deporte: string;
  fechaHora : Date;
  ubicacion:string;
  capacidaMax:number;
  ranking:number;
  costo?: number;
  integrantes: number
}

const numPruebas=500000;
const datosArray: Evento[]=new Array(numPruebas+7);
const maxHeap= new MaxHeap(numPruebas); 



function crearDatosFaker(){
  faker.seed(42)
  // const numPruebas=10;
  
  for (let i =0; i<numPruebas;i++){

    const event: Evento= {
    id: i,
    nombre:faker.person.firstName(),
    description:faker.lorem.lines({ min: 1, max: 3 }),
    deporte: faker.word.adjective(),
    fechaHora :faker.date.anytime(),
    ubicacion:faker.location.street(),
    ranking:faker.number.int({ min: 0, max: 100 }),
    capacidaMax:faker.number.int({ min: 10, max: 100 }),
    costo:faker.number.int({ min: 1000, max: 10000 }),
    integrantes: faker.number.int({ min:1, max:30})
    }

    datosArray[i]=event;
  }
}
export function insertMaxHeap(){
  crearDatosFaker()
  console.time("insertMaxHeap")
  for(let j=0; j<numPruebas; j++){
    maxHeap.insert(datosArray[j].ranking)
  }
  console.timeEnd("insertMaxHeap")
}


export  function MaxRanking( ):void{
  
  
  console.time("tiempo gerMaxRanking")
  for (let k =0; k<numPruebas;k++){

      maxHeap.extractMax()
     
  }
  console.timeEnd("tiempo gerMaxRanking")
}
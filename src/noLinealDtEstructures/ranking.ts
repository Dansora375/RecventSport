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
  ranting:number;
  costo?: number;
  integrantes: number
}

export interface IPost{
  _id?: string;
  title: string;
  image_url: string;
  cat: number;        // 1, 2,3,4
  description: string;
  date: Date;     ///
  city: number;  /// 1: Bogota 2:Medellin
  level: number;   /// 1,2,3
  num_members: number;
  members: string[];
  author: string,
  authorPFP: string;
  authorName: string;

}

const numPruebas=5;
const datosArray: Evento[]=new Array(numPruebas+7);
const maxHeap= new MaxHeap(numPruebas); 



function crearDatosFaker(){
  faker.seed(30)
  // const numPruebas=10;
  
  for (let i =0; i<numPruebas;i++){

    const event: Evento= {
    id: i,
    nombre:faker.person.firstName(),
    description:faker.lorem.lines({ min: 1, max: 3 }),
    deporte: faker.word.adjective(),
    fechaHora :faker.date.anytime(),
    ubicacion:faker.location.street(),
    ranting:faker.number.int({ min: 0, max: 100 }),
    capacidaMax:faker.number.int({ min: 10, max: 100 }),
    costo:faker.number.int({ min: 1000, max: 10000 }),
    integrantes: faker.number.int({ min:1, max:30})
    }

    // datosArray[i]=event;
    // maxHeap.insert(event)
  }
}


export function insertMaxHeap(){
  crearDatosFaker()
  maxHeap.print()

  for (let i =0; i<numPruebas; i++){
    console.log(maxHeap.extractMax())
    
  }
  // console.time("insertMaxHeap")
  // for(let j=0; j<numPruebas; j++){
  //   maxHeap.insert(datosArray[j])
  // }
  // console.timeEnd("insertMaxHeap")
}


export  function MaxRanking( ):void{
  
  
  console.time("tiempo gerMaxRanking")
  for (let k =0; k<numPruebas;k++){

      maxHeap.extractMax()
     
  }
  console.timeEnd("tiempo gerMaxRanking")
}
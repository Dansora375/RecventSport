import { faker } from '@faker-js/faker';
interface Evento {
  id: number;
  nombre: string;
  description: string;
  deporte: string;
  fechaHora: Date;
  ubicacion: string;
  capacidaMax: number;
  costo?: number;
  integrantes: number;
}
class DisjointSet {
  private parent: number[]; // Array para mantener los padres de los elementos
  private rank: number[]; // Array para mantener la altura de los conjuntos

  constructor(size: number) {
    this.parent = new Array(size);
    this.rank = new Array(size);
    for (let i = 0; i < size; i++) {
      this.parent[i] = i; // Inicialmente, cada elemento es su propio padre
      this.rank[i] = 0; // La altura inicial de cada conjunto es 0
    }
  }

  // Encuentra el conjunto al que pertenece un elemento (con compresión de camino)
  find(x: number): number {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]); // Comprimir el camino
    }
    return this.parent[x];
  }

  // Une dos conjuntos (con unión por rango)
  union(x: number, y: number): void {
    const rootX = this.find(x);
    const rootY = this.find(y);

    if (rootX !== rootY) {
      if (this.rank[rootX] < this.rank[rootY]) {
        this.parent[rootX] = rootY;
      } else if (this.rank[rootX] > this.rank[rootY]) {
        this.parent[rootY] = rootX;
      } else {
        this.parent[rootY] = rootX;
        this.rank[rootX]++;
      }
    }
  }

  // Encuentra el conjunto al que pertenece un evento (por su id)
  findEventSet(event: Evento): number {
    const eventId = event.id;

    if (eventId >= 0 && eventId < this.parent.length) {
      return this.find(eventId);
    } else {
      throw new Error("ID de evento fuera de rango");
    }
  }

  // Une dos conjuntos de eventos (por sus ids)
  // aplicar union event dada una condicion, por ejemplo 
  // if event1.deporte= event2.deporte:
  //   unionEvents()  
  unionEvents(event1: Evento, event2: Evento): void {
    const eventId1 = event1.id;
    const eventId2 = event2.id;

    if (eventId1 >= 0 && eventId1 < this.parent.length && eventId2 >= 0 && eventId2 < this.parent.length) {
      this.union(eventId1, eventId2);
    } else {
      throw new Error("ID de evento fuera de rango");
    }
  }
}




const numPruebas=250000;
const datosArray: Evento[]=new Array(numPruebas+7);
const disjointSet = new DisjointSet(numPruebas);


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
    capacidaMax:faker.number.int({ min: 10, max: 100 }),
    costo:faker.number.int({ min: 1000, max: 10000 }),
    integrantes: faker.number.int({ min:1, max:30})
    }

    datosArray[i]=event;
  }
}


export function InserUnionEvents(){
  crearDatosFaker()
  console.time("InserUnionEvents")
  for (let j=0; j< numPruebas-1;j++){
    if (datosArray[j].deporte== datosArray[j+1].deporte){
      disjointSet.unionEvents(datosArray[j],datosArray[j+1])
    }
  }
  console.timeEnd("InserUnionEvents")
}

export function findEvents(){
  // crearDatosFaker()

  const buscaId=50;


  
  console.time("findEvents")
  const foundEvent = disjointSet.findEventSet(datosArray[buscaId]);
  console.log(foundEvent)
  console.timeEnd("findEvents")
}



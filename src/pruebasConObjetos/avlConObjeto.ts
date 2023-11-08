
import { faker } from '@faker-js/faker';
interface Evento {
  id: number;
  nombre: string;
  descripcion: string;
  deporte: string;
  fechaHora: Date;
  ubicacion: string;
  capacidadMax: number;
  costo?: number;
  integrantes: number;
}

class TreeNode {
  value: Evento;
  left: TreeNode | null;
  right: TreeNode | null;
  height: number;
  count: number;

  constructor(value: Evento) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.height = 1;
    this.count = 1;
  }
}

class AVLTree {
  root: TreeNode | null;

  constructor() {
    this.root = null;
  }

  getHeight(node: TreeNode | null): number {
    if (node === null) {
      return 0;
    }
    return node.height;
  }

  updateHeight(node: TreeNode): void {
    node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
  }

  getBalanceFactor(node: TreeNode): number {
    if (node === null) {
      return 0;
    }
    return this.getHeight(node.left) - this.getHeight(node.right);
  }

  rotateRight(y: TreeNode): TreeNode {
    const x = y.left as TreeNode;
    const temp = x.right;

    x.right = y;
    y.left = temp;

    this.updateHeight(y);
    this.updateHeight(x);

    return x;
  }

  rotateLeft(x: TreeNode): TreeNode {
    const y = x.right as TreeNode;
    const temp = y.left;

    y.left = x;
    x.right = temp;

    this.updateHeight(x);
    this.updateHeight(y);

    return y;
  }

  insert(evento: Evento, node: TreeNode | null = this.root): TreeNode {
    if (node === null) {
      return new TreeNode(evento);
    }

    if (evento.id < node.value.id) {
      node.left = this.insert(evento, node.left);
    } else if (evento.id > node.value.id) {
      node.right = this.insert(evento, node.right);
    } else {
      // Valor duplicado, simplemente incrementa el contador
      node.count++;
    }

    this.updateHeight(node);

    const balance = this.getBalanceFactor(node);

    if (balance > 1) {
      // Resto del código de rotación...
    }

    if (balance < -1) {
      // Resto del código de rotación...
    }

    return node;
  }

  search(id: number, node: TreeNode | null = this.root): TreeNode | null {
    if (node === null) {
      return null;
    }

    if (id === node.value.id) {
      return node;
    } else if (id < node.value.id) {
      return this.search(id, node.left);
    } else {
      return this.search(id, node.right);
    }
  }

  searchAll(id: number, node: TreeNode | null = this.root, result: TreeNode[] = []): TreeNode[] {
    if (node === null) {
      return result;
    }

    if (id === node.value.id) {
      result.push(node);
      this.searchAll(id, node.left, result);
      this.searchAll(id, node.right, result);
    } else if (id < node.value.id) {
      this.searchAll(id, node.left, result);
    } else {
      this.searchAll(id, node.right, result);
    }

    return result;
  }
}





const avlTree = new AVLTree();




export function printLevelOrder(root: TreeNode | null): void {
  if (root === null) return;

  const queue: TreeNode[] = [];
  queue.push(root);

  while (queue.length > 0) {
    const node = queue.shift() as TreeNode;
    console.log(node.value);

    if (node.left !== null) {
      queue.push(node.left);
    }

    if (node.right !== null) {
      queue.push(node.right);
    }
  }
}




// export function pruebaAvlConObjetos(){
//   //  Crear un árbol AVL y realizar inserciones

//   avlTree.root =avlTree.insert({
//     id: 1,
//     nombre: "Evento 1",
//     descripcion: "Descripción del Evento 1",
//     deporte: "Deporte 1",
//     fechaHora: new Date(),
//     ubicacion: "Ubicación 1",
//     capacidadMax: 100,
//     costo: 10,
//     integrantes: 5,
//   });


//   avlTree.root =avlTree.insert({
//   id: 2,
//   nombre: "Evento 2",
//   descripcion: "Descripción del Evento 2",
//   deporte: "Deporte 2",
//   fechaHora: new Date(),
//   ubicacion: "Ubicación 2",
//   capacidadMax: 50,
//   integrantes: 3,
// });

// avlTree.root =avlTree.insert({
//   id: 3,
//   nombre: "Evento 3",
//   descripcion: "Descripción del Evento 3",
//   deporte: "Deporte 3",
//   fechaHora: new Date(),
//   ubicacion: "Ubicación 3",
//   capacidadMax: 200,
//   costo: 20,
//   integrantes: 10,
// });
// // printLevelOrder(avlTree.root);
// // Realizar búsquedas en el árbol
// const foundEvent = avlTree.search(3);
// console.log(foundEvent)
// console.log("Evento encontrado:", foundEvent ? foundEvent.value : "No encontrado");



// }



const numPruebas=250000;
const datosArray: Evento[]=new Array(numPruebas+7);


function crearDatosFaker(){
  faker.seed(42)
  // const numPruebas=10;
  
  for (let i =0; i<numPruebas;i++){

    const event: Evento= {
    id: faker.number.int({ min: 0, max: numPruebas }),
    nombre:faker.person.firstName(),
    descripcion:faker.lorem.lines({ min: 1, max: 3 }),
    deporte: faker.word.adjective(),
    fechaHora :faker.date.anytime(),
    ubicacion:faker.location.street(),
    capacidadMax:faker.number.int({ min: 10, max: 100 }),
    costo:faker.number.int({ min: 1000, max: 10000 }),
    integrantes: faker.number.int({ min:1, max:30})
    }

    datosArray[i]=event;
  }
}

export function insertAvlObj(){
  crearDatosFaker()
  console.time("insertAvlObj")
  for(let j=0; j<numPruebas; j++){
    avlTree.root =avlTree.insert(datosArray[j])
  }
  console.timeEnd("insertAvlObj")
}

export function searchtAvlObj(){
  const buscaId=faker.number.int({ min: 0, max: numPruebas });
  const buscaId2=faker.number.int({ min: 0, max: numPruebas });
  const buscaId3=faker.number.int({ min: 0, max: numPruebas });
  


  console.time("searchtAvlObj")
  const foundEvent = avlTree.search(buscaId);
  console.log("Evento encontrado:", foundEvent ? foundEvent.value : "No encontrado");
  console.log(foundEvent)
  console.timeEnd("searchtAvlObj")

  console.time("searchtAvlObj2")
  const foundEvent2 = avlTree.search(buscaId2);
  console.log("Evento encontrado:", foundEvent ? foundEvent.value : "No encontrado");
  console.log(foundEvent2)
  console.timeEnd("searchtAvlObj2")

  console.time("searchtAvlObj3")
  const foundEvent3 = avlTree.search(buscaId3);
  console.log("Evento encontrado:", foundEvent ? foundEvent.value : "No encontrado");
  console.log(foundEvent3)
  console.timeEnd("searchtAvlObj3")
}

// Llamamos a la función con el nodo raíz del árbol AVL

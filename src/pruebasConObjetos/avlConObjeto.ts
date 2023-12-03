
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
      if (evento.id < (node.left as TreeNode).value.id) {
        // Caso de rotación izquierda-izquierda
        return this.rotateRight(node);
      } else {
        // Caso de rotación izquierda-derecha
        node.left = this.rotateLeft(node.left as TreeNode);
        return this.rotateRight(node);
      }
    }

    if (balance < -1) {
      if (evento.id > (node.right as TreeNode).value.id) {
        // Caso de rotación derecha-derecha
        return this.rotateLeft(node);
      } else {
        // Caso de rotación derecha-izquierda
        node.right = this.rotateRight(node.right as TreeNode);
        return this.rotateLeft(node);
      }
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

  rangeSearch(start: number, end: number, node: TreeNode | null = this.root, result: TreeNode[] = []): TreeNode[] {
    if (node === null) {
      return result;
    }

    if (node.value.id >= start && node.value.id <= end) {
      // Si el nodo actual está en el rango, lo agregamos a los resultados
      result.push(node);
    }

    if (node.value.id > start) {
      // Si el nodo actual es mayor que el valor de inicio, buscamos en el subárbol izquierdo
      this.rangeSearch(start, end, node.left, result);
    }

    if (node.value.id < end) {
      // Si el nodo actual es menor que el valor final, buscamos en el subárbol derecho
      this.rangeSearch(start, end, node.right, result);
    }

    return result;
  }

  findRoot(node: TreeNode| null): TreeNode | null{
    let current = node;

    while (current !== null && current !== this.root) {
      current = this.getParent(current) as TreeNode;
    }

    return current;
  }


  rangeSearch2(x: number, y: number, node: TreeNode | null = this.root, result: TreeNode[] = []): TreeNode[] {
    // const root1=this.findRoot(node)
    let currentNode = this.find(x, node);

    while (currentNode !== null && currentNode.value.id <= y) {
      if (currentNode.value.id >= x) {
        result.push(currentNode);
      }
      currentNode = this.next(currentNode);
    }

    return result;
  }

  find(key: number, node: TreeNode | null): TreeNode | null {
    // Implementa la lógica para encontrar el nodo con el valor 'key'
    // Puedes usar una variante de tu método 'search' existente
    // Aquí se proporciona una implementación básica:
    if (node === null) {
      return null;
    }

    if (key === node.value.id) {
      return node;
    } else if (key < node.value.id) {
      return this.find(key, node.left);
    } else {
      return this.find(key, node.right);
    }
  }

  next(node: TreeNode | null): TreeNode | null {
    // Implementa la lógica para encontrar el siguiente nodo en orden
    // Puedes usar una variante de tu método 'search' existente
    // Aquí se proporciona una implementación básica:
    if (node === null) {
      return null;
    }

    if (node.right !== null) {
      // Si hay un subárbol derecho, el siguiente nodo es el nodo más a la izquierda en ese subárbol
      return this.findMin(node.right);
    } else {
      // Si no hay subárbol derecho, el siguiente nodo es el primer ancestro que no ha sido visitado
      let current = node;
      let parent = this.getParent(current);

      while (parent !== null && current === parent.right) {
        current = parent;
        parent = this.getParent(current);
      }

      return parent;
    }
  }

  findMin(node: TreeNode): TreeNode {
    // Encuentra el nodo con el valor mínimo en el subárbol
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }


  getParent(node: TreeNode): TreeNode | null {
    // Encuentra el nodo padre de un nodo dado
    if (this.root === node) {
      return null; // El nodo raíz no tiene un padre
    }

    let parent = null;
    let current = this.root;

    while (current !== null && current !== node) {
      parent = current;
      if (node.value.id < current.value.id) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return parent;
  }




  printInOrder(node: TreeNode | null = this.root): void {
    if (node !== null) {
      this.printInOrder(node.left);
      console.log(node.value);
      this.printInOrder(node.right);
    }
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







// }



const numPruebas=10;
const datosArray: Evento[]=new Array(numPruebas+7);


function crearDatosFaker(){
  faker.seed(40)
  // const numPruebas=10;
  
  for (let i =0; i<numPruebas;i++){

    const event: Evento= {
    id: i,
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
  // avlTree.printInOrder()

  console.log(avlTree.rangeSearch(2,6))
  // console.log(avlTree.rangeSearch2(2,6))
  
  // printLevelOrder(avlTree.findRoot(avlTree.root))
  // console.time("searchtAvlObj2")
  // const foundEvent2 = avlTree.search(buscaId2);
  // console.log("Evento encontrado:", foundEvent ? foundEvent.value : "No encontrado");
  // console.log(foundEvent2)
  // console.timeEnd("searchtAvlObj2")

  // console.time("searchtAvlObj3")
  // const foundEvent3 = avlTree.search(buscaId3);
  // console.log("Evento encontrado:", foundEvent ? foundEvent.value : "No encontrado");
  // console.log(foundEvent3)
  // console.timeEnd("searchtAvlObj3")
}

// Llamamos a la función con el nodo raíz del árbol AVL

class TreeNode {
  value: string;
  left: TreeNode | null;
  right: TreeNode | null;
  height: number;
  count: number;

  constructor(value: string) {
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

  // Resto del código de la implementación AVL anterior...

  insert(value: string, node: TreeNode | null = this.root): TreeNode {
    if (node === null) {
      return new TreeNode(value);
    }

    if (value < node.value) {
      node.left = this.insert(value, node.left);
    } else if (value > node.value) {
      node.right = this.insert(value, node.right);
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

  search(value: string, node: TreeNode | null = this.root): TreeNode | null {
    if (node === null) {
      return null;
    }

    if (value === node.value) {
      return node;
    } else if (value < node.value) {
      return this.search(value, node.left);
    } else {
      return this.search(value, node.right);
    }
  }

  searchAll(value: string, node: TreeNode | null = this.root, result: TreeNode[] = []): TreeNode[] {
    if (node === null) {
      return result;
    }

    if (value === node.value) {
      result.push(node);
      this.searchAll(value, node.left, result);
      this.searchAll(value, node.right, result);
    } else if (value < node.value) {
      this.searchAll(value, node.left, result);
    } else {
      this.searchAll(value, node.right, result);
    }

    return result;
  }
}

// function printLevelOrder(root: TreeNode | null): void {
//   if (root === null) return;

//   const queue: TreeNode[] = [];
//   queue.push(root);

//   while (queue.length > 0) {
//     const node = queue.shift() as TreeNode;
//     console.log(node.value);

//     if (node.left !== null) {
//       queue.push(node.left);
//     }

//     if (node.right !== null) {
//       queue.push(node.right);
//     }
//   }
// }

export function pruebaAvl(){
  
// Ejemplo de uso
const avlTree = new AVLTree();
avlTree.root = avlTree.insert("futbol");
avlTree.root = avlTree.insert("voleibol");
avlTree.root = avlTree.insert("natacion");
avlTree.root = avlTree.insert("futbol");
avlTree.root = avlTree.insert("voleibol");
avlTree.root = avlTree.insert("natacion");
avlTree.root = avlTree.insert("futbol");
avlTree.root = avlTree.insert("voleibol");
avlTree.root = avlTree.insert("natacion");
avlTree.root = avlTree.insert("baloncesto");
avlTree.root = avlTree.insert("futbol"); // Valor duplicado

// Búsqueda de un deporte específico
const sport = "futbol";
const result = avlTree.search(sport);
console.log(result)
if (result) {
  console.log(`Deporte: ${result.value}, Cantidad: ${result.count}`);
} else {
  console.log(`Deporte ${sport} no encontrado.`);
}

// // Búsqueda de todos los deportes duplicados
// const allSports = avlTree.searchAll(sport);
// if (allSports.length > 0) {
//   console.log(`Deportes duplicados de ${sport}:`);
//   allSports.forEach((node) => {
//     console.log(`Deporte: ${node.value}, Cantidad: ${node.count}`);
//   });
// } else {
//   console.log(`Deporte ${sport} no encontrado.`);
// }

  
}

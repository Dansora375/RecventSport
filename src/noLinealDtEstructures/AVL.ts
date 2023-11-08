// class TreeNode {
//   value: number;
//   left: TreeNode | null;
//   right: TreeNode | null;
//   height: number;

//   constructor(value: number) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//     this.height = 1;
//   }
// }

// class AVLTree {
//   root: TreeNode | null;

//   constructor() {
//     this.root = null;
//   }

//   getHeight(node: TreeNode | null): number {
//     if (node === null) {
//       return 0;
//     }
//     return node.height;
//   }

//   updateHeight(node: TreeNode): void {
//     node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
//   }

//   getBalanceFactor(node: TreeNode): number {
//     if (node === null) {
//       return 0;
//     }
//     return this.getHeight(node.left) - this.getHeight(node.right);
//   }

//   rotateRight(y: TreeNode): TreeNode {
//     const x = y.left as TreeNode;
//     const temp = x.right;

//     x.right = y;
//     y.left = temp;

//     this.updateHeight(y);
//     this.updateHeight(x);

//     return x;
//   }

//   rotateLeft(x: TreeNode): TreeNode {
//     const y = x.right as TreeNode;
//     const temp = y.left;

//     y.left = x;
//     x.right = temp;

//     this.updateHeight(x);
//     this.updateHeight(y);

//     return y;
//   }

//   insert(value: number, node: TreeNode | null = this.root): TreeNode {
//     if (node === null) {
//       return new TreeNode(value);
//     }

//     if (value < node.value) {
//       node.left = this.insert(value, node.left);
//     } else if (value > node.value) {
//       node.right = this.insert(value, node.right);
//     } else {
//       return node; // No duplicate values allowed
//     }

//     this.updateHeight(node);

//     const balance = this.getBalanceFactor(node);

//     if (balance > 1) {
//       if (value < (node.left as TreeNode).value) {
//         return this.rotateRight(node);
//       } else {
//         node.left = this.rotateLeft(node.left as TreeNode);
//         return this.rotateRight(node);
//       }
//     }

//     if (balance < -1) {
//       if (value > (node.right as TreeNode).value) {
//         return this.rotateLeft(node);
//       } else {
//         node.right = this.rotateRight(node.right as TreeNode);
//         return this.rotateLeft(node);
//       }
//     }

//     return node;
//   }

//   // Otras operaciones como eliminar, buscar, recorrer (inorden, preorden, postorden) se pueden implementar de manera similar.
// }

// // Ejemplo de uso
// const avlTree = new AVLTree();
// avlTree.root = avlTree.insert(10);
// avlTree.root = avlTree.insert(20);
// avlTree.root = avlTree.insert(30);

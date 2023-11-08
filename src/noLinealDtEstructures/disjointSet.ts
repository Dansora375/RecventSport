// class DisjointSet {
//   private parent: number[]; // Array para mantener los padres de los elementos
//   private rank: number[]; // Array para mantener la altura de los conjuntos

//   constructor(size: number) {
//     this.parent = new Array(size);
//     this.rank = new Array(size);
//     for (let i = 0; i < size; i++) {
//       this.parent[i] = i; // Inicialmente, cada elemento es su propio padre
//       this.rank[i] = 0; // La altura inicial de cada conjunto es 0
//     }
//   }

//   // Encuentra el conjunto al que pertenece un elemento (con compresión de camino)
//   find(x: number): number {
//     if (this.parent[x] !== x) {
//       this.parent[x] = this.find(this.parent[x]); // Comprimir el camino
//     }
//     return this.parent[x];
//   }

//   // Une dos conjuntos (con unión por rango)
//   union(x: number, y: number): void {
//     const rootX = this.find(x);
//     const rootY = this.find(y);

//     if (rootX !== rootY) {
//       if (this.rank[rootX] < this.rank[rootY]) {
//         this.parent[rootX] = rootY;
//       } else if (this.rank[rootX] > this.rank[rootY]) {
//         this.parent[rootY] = rootX;
//       } else {
//         this.parent[rootY] = rootX;
//         this.rank[rootX]++;
//       }
//     }
//   }
// }



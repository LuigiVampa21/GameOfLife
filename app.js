"use strict";

// // const gameOfLife = document.querySelector('.gameOfLife');
// // let cellsArray = [[], [], [], [], [], [], [], [], [], []];
// // for (let i = 0; i < cellsArray.length; i++) {
// //   // cellsArray[i].push(i);
// //   for (let j = 0; j < cellsArray.length; j++) {
// //     // cellsArray[i].push(cellsArray[j]);
// //     cellsArray[i].push(j);
// //     // cellsArray[i].push(j);
// //     // cellsArray[i].push('-')
// //     let cell = document.createElement('div');
// //     gameOfLife.appendChild(cell);
// //     cell.style.width = '35px';
// //     cell.style.height = '35px';
// //     cell.style.background = 'black';
// //     cell.style.border = '1px solid white';
// //   }
// // }

// const gameOfLife = document.querySelector('.gameOfLife');
// let cellsArray = [[], [], [], [], [], [], [], [], [], []];
// for (let i = 0; i < cellsArray.length; i++) {
//   // cellsArray[i].push(i);
//   for (let j = 0; j < cellsArray.length; j++) {
//     // cellsArray[i].push(cellsArray[j]);
//     cellsArray[i].push(i);
//     // cellsArray[i].push(j);
//     // cellsArray[i].push('-')
//     let cell = document.createElement('div');
//     gameOfLife.appendChild(cell);
//     cell.style.width = '35px';
//     cell.style.height = '35px';
//     cell.style.background = 'black';
//     cell.style.border = '1px solid white';
//   }
// }

// // console.log(cellsArray.length);

// const cell1 = document.querySelector('.gameOfLife div:nth-child(1)');
// const cell10 = document.querySelector('.gameOfLife div:nth-child(10)');
// const cell11 = document.querySelector('.gameOfLife div:nth-child(11)');
// const cell12 = document.querySelector('.gameOfLife div:nth-child(12)');
// const cell20 = document.querySelector('.gameOfLife div:nth-child(20)');
// const cell21 = document.querySelector('.gameOfLife div:nth-child(21)');
// const cell22 = document.querySelector('.gameOfLife div:nth-child(22)');
// const cell55 = document.querySelector('.gameOfLife div:nth-child(55)');
// const cell56 = document.querySelector('.gameOfLife div:nth-child(56)');

// let birthArray = [cell10,cell12,cell20,cell21,cell22,cell55,cell56]

// function giveBirth(cell) {
//   cell.style.background = "white";
// }

// function giveDeath(cell) {
//   cell.style.background = "black";
// }

// for(let b = 0; b < birthArray.length; b++){
//   giveBirth(birthArray[b])
// }

// function isMyCellWhite(cell){
//   if(cell.style.background == 'white') return true;
//   else return false;
//   }

// console.log(isMyCellWhite(cell1));

// gameOfLife.addEventListener('click', (e) => {
//   if (e.target.style.background === 'black') {
//     giveBirth(e.target);
//   } else {
//     giveDeath(e.target);
//   }
// });

// let tabArray = [
//   [-1, 0],
//   [-1, 1],
//   [0, 1],
//   [1, 1],
//   [1, 0],
//   [1, -1],
//   [0, -1],
//   [-1, -1],
// ];

// console.log(cellsArray);

// let cellsAround = [];
// // for (let x = 0; x < cellsArray.length; x++) {
// for (let i = 0; i < 1; i++) {
//   // for (let y = 0; y < cellsArray[x].length; y++) {
//   for (let j = 0; j < 1; j++) {
//     for (let z = 0; z < tabArray.length; z++) {
//       // console.log(i, j);
//       // console.log(tabArray[z][0], tabArray[z][1]);
//       // console.log(i+tabArray[z][0], j+tabArray[z][1]);
//       let valueRow = i + tabArray[z][0];
//       let valueCol = j + tabArray[z][1];
//       // console.log(valueRow, valueCol);
//       // il faut maintenant donner la valeur dans le array;
//       // console.log(cellsArray[i]);
//       if(cellsArray[valueRow] !== undefined && cellsArray[valueRow][valueCol] !== undefined ){
//         cellsAround.push(cellsArray[valueRow][valueCol]);
//         console.log(cellsArray[valueRow][valueCol]);
//         // cellIsWhite(cellsArray[i][j],[valueRow][valueCol]);
//         // console.log(isMyCellWhite(cellsArray[valueRow][valueCol]));
//       }
//       // console.log(cellsArray[valueRow][valueCol]);
//     }
//   }
// }
// console.log(cellsAround);
// // --------------------------------------------------------------------------------------------------------

// function cellIsWhite(cellIJ,cellRC){
//   if(cellRC.style.background == 'white'){
//     cellIJ.style.background = 'white';
//   }
// }

// let array = [
//   [0, 0, 1],
//   [0, 1, 0],
//   [1, 0, 0],
// ];

// let arrayCheck = [];

// for (let i = 0; i < array.length; i++) {
// for (let i = 0; i < 1; i++) {
// for (let j = 0; j < array[i].length; j++) {
// for (let j = 0; j < 1; j++) {
// console.log(array[i][j]);
// console.log(array[i]);
// console.log(array[i][j]);
// pour chaque element rencontré (array[i][j]) je veux savoir si il
// y a un 1 dans les elements autour de lui.
//       let tabArray = [
//         [-1, 0],
//         [-1, 1],
//         [0, 1],
//         [1, 1],
//         [1, 0],
//         [1, -1],
//         [0, -1],
//         [-1, -1],
//       ];
//       for (let t = 0; t < tabArray.length; t++){
//         let indexRow = tabArray[t][0];
//         let indexCol = tabArray[t][1];
//         let valueRow = indexRow + i;
//         let valueCol = indexCol + j;
//         if(array[valueRow] !== undefined && array[valueCol] !== undefined && array[valueRow][valueCol] == 1){
//         console.log(array[valueRow]);
//         console.log(array[valueCol]);
//         console.log(array[valueRow][valueCol]);
//         arrayCheck.push(array[valueRow][valueCol])
//         console.log(arrayCheck);
//         }
//       }
//     };
// };

// function getValuesAround(i,j){
//   let tabArray = [
//   [-1, 0],
//   [-1, 1],
//   [0, 1],
//   [1, 1],
//   [1, 0],
//   [1, -1],
//   [0, -1],
//   [-1, -1],

// ];
// }

// -------------------------------------------------------------------------------------------------

const gameOfLife = document.querySelector(".gameOfLife");

// let arrayCells = [[], [], [], [], [], [], [], [], [], []];
// let x = 0;
// for (let i = 0; i < arrayCells.length; i++) {
//   x += 1;
//   for (let j = 0; j < arrayCells.length; j++) {
//     const cell = document.createElement("div");
//     gameOfLife.appendChild(cell);
//     cell.style.width = "35px";
//     cell.style.height = "35px";
//     cell.style.border = "1px solid blue";
//     if (j == 1 || j == 7) {
//       arrayCells[i].push(1);
//     } else if (j == 4 && (x == 5 || x == 4)) {
//       arrayCells[i].push(1);
//     } else {
//       arrayCells[i].push(0);
//     }
//   }
// }

let arrayCells = [[], [], [], [], [], [], [], [], [], []];
let x = 0;
for (let i = 0; i < arrayCells.length; i++) {
  x += 1;
  for (let j = 0; j < arrayCells.length; j++) {
    const cell = document.createElement("div");
    gameOfLife.appendChild(cell);
    cell.style.width = "35px";
    cell.style.height = "35px";
    cell.style.border = "1px solid blue";

    // ----------------------------------------------------------------------------------
    // if (j == 1 || j == 7) {
    //   arrayCells[i].push(1);
    // } else if (j == 4 && (x == 5 || x == 4)) {
    //   arrayCells[i].push(1);
    // } else {
    arrayCells[i].push(0);
    // ----------------------------------------------------------------------------
  }
}
// }

// for (let i = 0; i < arrayCells.length; i++){
//   for (let j = 0; arrayCells[i].length; j++){

//   }
// }
// il faut pouvoir clicker sur un element du dom et que ca change sa valeur dans le tableau

let cells = document.querySelectorAll("div");
let c = 0;
for (let i = 0; i < arrayCells.length; i++) {
  for (let j = 0; j < arrayCells[i].length; j++) {
    if (arrayCells[i][j] === 1) {
      cells[c].style.background = "white";
    } else {
      cells[c].style.background = "black";
    }
    c++;
    cells[c].addEventListener("click", () => {
      arrayCells[i][j] === 1;
    });
    console.log(arrayCells);
  }
}

cells[10].style.background = "red";
// arrayCells[3][1] = 1;

// ----------------------------------------------------------------RealColorFunction-----------------------------------------------------------------

// function colors() {
//   const cells = document.querySelectorAll("div");
//   let c = 0;
//   for (let i = 0; i < arrayCells.length; i++) {
//     for (let j = 0; j < arrayCells[i].length; j++) {
//       if (arrayCells[i][j] === 1) {
//         cells[c].style.background = "white";
//       } else {
//         cells[c].style.background = "black";
//       }
//       c++;
//     }
//   }
// }

// colors();

//----------------------------------------------------------- assigner coordonnées aux cells --------------------------------------------------------

// j'itere à travers le premier tableau et j'assigne une valeure a chaque élements de chaques rangées

console.log(arrayCells);

let tabArray = [
  [-1, 0],
  [-1, 1],
  [0, 1],
  [1, 1],
  // -------------------------------------
  [1, 0],
  [1, -1], // VISIBLE
  [0, -1],
  // -------------------------------------
  [-1, -1],
];

// -------------------------------------------------Jeu fonctionnel -------------------------------------------------------------------------

// function gameLauncher() {
//   let cellsThatWillLive = [];

//   // let cellsThatWontChange = [];

//   let cellsthatWillDie = [];

//   // On itère à travers les rangées du tableau principal
//   for (let i = 0; i < arrayCells.length; i++) {
//     // On itère à travers chaque élément de chaques rangées
//     // for (let i = 0; i < 1; i++) {
//     for (let j = 0; j < arrayCells.length; j++) {
//       let cells1Around = 0;
//       // On itère à travers les 8 cellues voisines de notre élément
//       // for (let j = 0; j < 1; j++) {
//       for (let t = 0; t < tabArray.length; t++) {
//         // pour chaque itération à travers les voisins on définit le changement sur i et le changement sur j
//         let indexRow = tabArray[t][0];
//         let indexCol = tabArray[t][1];
//         // console.log(indexRow, indexCol);
//         // console.log(arrayCells[i][j]);
//         // On soustrait a i et a j les valeures de t[0] et de t[1], pour trouver leur valeures a chaque itération dans le tabArray;
//         let valueRow = i + indexRow;
//         // console.log(valueRow);
//         let valueCol = j + indexCol;
//         // console.log(valueCol);
//         // on élimine les cases qui n'existent pas et les cases voisines qui ne seront pas égales a 1
//         if (
//           arrayCells[valueRow] != undefined &&
//           arrayCells[valueRow][valueCol] == 1
//         ) {
//           // on place dans un tableau toutes les cases voisines de notre case qui sont égales a 1;
//           cells1Around++;
//           // console.log(cells1Around);
//         }
//       }

//       if (arrayCells[i][j] === 0 && cells1Around === 3) {
//         cellsThatWillLive.push([i, j]);
//       } else if (
//         arrayCells[i][j] === 1 &&
//         (cells1Around < 2 || cells1Around > 3)
//       ) {
//         cellsthatWillDie.push([i, j]);
//       }
//       // // si la longueur du tableau est égale à 3 alors la case que l'on étudie sera placée dans le tableau qui vivra au prochain tour
//       // if (cells1Around.length === 3) {
//       //   cellsThatWillLive.push([i, j]);
//       //   // si la longueure du tableau est inférieur à 2 ou supérieure à 3 alors la case que l'on étudie sera placée dans le tableau qui mourra au prochain tour
//       // } else if (cells1Around.length === 2) {
//       //   cellsThatWontChange.push([i, j]);
//       //   // si la longueure du tableau est égale à 2 alors la case que l'on étudie sera placée dans le tableau qui mourra au prochain tour
//       // } else if (cells1Around.length < 2 || cells1Around.length > 3) {
//       //   cellsthatWillDie.push([i, j]);
//       // }
//       // // on change les nombre de toutes les cases dans le tableau cellsThatWillLive
//     }
//   }

//   // console.log(arrayCells);
//   for (let w = 0; w < cellsThatWillLive.length; w++) {
//     var rowLives = cellsThatWillLive[w][0];
//     var colLives = cellsThatWillLive[w][1];
//     arrayCells[rowLives][colLives] = 1;
//   }
//   for (let d = 0; d < cellsthatWillDie.length; d++) {
//     var rowDead = cellsthatWillDie[d][0];
//     var colDead = cellsthatWillDie[d][1];
//     arrayCells[rowDead][colDead] = 0;
//   }

//   console.log(arrayCells);
//   colors();
// }

// setInterval(gameLauncher, 1000);
// console.log(arrayCells);

// console.log("live", cellsThatWillLive);
// console.log("wontchang", cellsThatWontChange);
// console.log("dead", cellsthatWillDie);

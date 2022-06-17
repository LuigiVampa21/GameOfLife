"use strict";
// -------------------------------------------------------------------------------------------------
const starter = document.querySelector(".start");
const restart = document.querySelector(".reset");
const gameOfLife = document.querySelector(".gameOfLife");

var stillPlaying;

starter.addEventListener("click", () => {
  stillPlaying = true;
  setInterval(gameLauncher, 1000);
});

restart.addEventListener("click", () => {
  reset();
    setTimeout(() => {
      stillPlaying = false;
    }, 1000);  
});

let arrayCells = [[], [], [], [], [], [], [], [], [], []];
let x = 0;
let cellIndex = 0;
for (let i = 0; i < arrayCells.length; i++) {
  x += 1;
  for (let j = 0; j < arrayCells.length; j++) {
    const cell = document.createElement("div");
    gameOfLife.appendChild(cell);
    cell.style.width = "35px";
    cell.style.height = "35px";
    cell.style.border = "1px solid blue";
    cell.id = cellIndex;
    cellIndex++;
    // console.log(cell.id);
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
// il faut assigner a chaque valeure du tableau la valeure correspondante de la case dans le dom, puis un eventListenerqui cahngera la valeure de cette case dans le tableau;

// créer une boucle ou on fait correspondre chaque cells[c] à chaque arrayCells[i][j];

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
  }
}

gameOfLife.addEventListener("click", e => {
  toggle(e.target);
});

let r = 0;
function reset() {
  for (let i = 0; i < arrayCells.length; i++) {
    for (let j = 0; j < arrayCells[i].length; j++) {
      arrayCells[i][j] = 0;
      cells[r].style.background = "black";
    }
  }
}

function toggle(cell) {
  let i;
  let j;
  i = Math.floor(cell.id / arrayCells.length);
  j = cell.id - i * arrayCells.length;
  if (arrayCells[i][j] === 1) {
    arrayCells[i][j] = 0;
    cell.style.background = "black";
  } else {
    arrayCells[i][j] = 1;
    cell.style.background = "white";
  }
  // console.log(arrayCells[i][j], cell.style.background);
}

// ----------------------------------------------------------------RealColorFunction-----------------------------------------------------------------

function colors() {
  const cells = document.querySelectorAll("div");
  let c = 0;
  for (let i = 0; i < arrayCells.length; i++) {
    for (let j = 0; j < arrayCells[i].length; j++) {
      if (arrayCells[i][j] === 1) {
        cells[c].style.background = "white";
      } else {
        cells[c].style.background = "black";
      }
      c++;
    }
  }
}

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

function gameLauncher() {
  if (stillPlaying) {
    let cellsThatWillLive = [];

    // let cellsThatWontChange = [];

    let cellsthatWillDie = [];

    // On itère à travers les rangées du tableau principal
    for (let i = 0; i < arrayCells.length; i++) {
      // On itère à travers chaque élément de chaques rangées
      // for (let i = 0; i < 1; i++) {
      for (let j = 0; j < arrayCells.length; j++) {
        let cells1Around = 0;
        // On itère à travers les 8 cellues voisines de notre élément
        // for (let j = 0; j < 1; j++) {
        for (let t = 0; t < tabArray.length; t++) {
          // pour chaque itération à travers les voisins on définit le changement sur i et le changement sur j
          let indexRow = tabArray[t][0];
          let indexCol = tabArray[t][1];
          // console.log(indexRow, indexCol);
          // console.log(arrayCells[i][j]);
          // On soustrait a i et a j les valeures de t[0] et de t[1], pour trouver leur valeures a chaque itération dans le tabArray;
          let valueRow = i + indexRow;
          // console.log(valueRow);
          let valueCol = j + indexCol;
          // console.log(valueCol);
          // on élimine les cases qui n'existent pas et les cases voisines qui ne seront pas égales a 1
          if (
            arrayCells[valueRow] != undefined &&
            arrayCells[valueRow][valueCol] == 1
          ) {
            // on place dans un tableau toutes les cases voisines de notre case qui sont égales a 1;
            cells1Around++;
            // console.log(cells1Around);
          }
        }

        if (arrayCells[i][j] === 0 && cells1Around === 3) {
          cellsThatWillLive.push([i, j]);
        } else if (
          arrayCells[i][j] === 1 &&
          (cells1Around < 2 || cells1Around > 3)
        ) {
          cellsthatWillDie.push([i, j]);
        }
        // // si la longueur du tableau est égale à 3 alors la case que l'on étudie sera placée dans le tableau qui vivra au prochain tour
        // if (cells1Around.length === 3) {
        //   cellsThatWillLive.push([i, j]);
        //   // si la longueure du tableau est inférieur à 2 ou supérieure à 3 alors la case que l'on étudie sera placée dans le tableau qui mourra au prochain tour
        // } else if (cells1Around.length === 2) {
        //   cellsThatWontChange.push([i, j]);
        //   // si la longueure du tableau est égale à 2 alors la case que l'on étudie sera placée dans le tableau qui mourra au prochain tour
        // } else if (cells1Around.length < 2 || cells1Around.length > 3) {
        //   cellsthatWillDie.push([i, j]);
        // }
        // // on change les nombre de toutes les cases dans le tableau cellsThatWillLive
      }
    }

    // console.log(arrayCells);
    for (let w = 0; w < cellsThatWillLive.length; w++) {
      var rowLives = cellsThatWillLive[w][0];
      var colLives = cellsThatWillLive[w][1];
      arrayCells[rowLives][colLives] = 1;
    }
    for (let d = 0; d < cellsthatWillDie.length; d++) {
      var rowDead = cellsthatWillDie[d][0];
      var colDead = cellsthatWillDie[d][1];
      arrayCells[rowDead][colDead] = 0;
    }

    console.log(arrayCells);
    colors();
  }
}
// setInterval(gameLauncher, 1000);
// console.log(arrayCells);

// console.log("live", cellsThatWillLive);
// console.log("wontchang", cellsThatWontChange);
// console.log("dead", cellsthatWillDie);

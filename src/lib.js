// Create nXn grid
const createGrid = function(size){
  let grid = new Array();
  let counter = 0;
  while(counter < size){
    let gridRow = new Array(size).fill(0);
    grid.push(gridRow);
    counter++;
  }
  return grid;
}

const generatePrintableGrid = function(grid){
  let printableGrid = new Array();
  for(let row = 0; row < grid.length; row ++){
    let line = '|'+grid[row].join("|")+'|';
    printableGrid.push(line);
  }
  return printableGrid;
}

const createWorld = function(aliveCells, size){
  let world = createGrid(size);
  for(let aliveCell of aliveCells){
    world[aliveCell.row][aliveCell.col] = 1;
  }
  return world;
}

exports.createGrid = createGrid;
exports.createWorld = createWorld;
exports.generatePrintableGrid = generatePrintableGrid;

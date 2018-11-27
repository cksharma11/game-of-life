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

const findNeighbours = function(row, col, grid){
  let neighbours = new Array();
  neighbours.push({row, col : col + 1});
  neighbours.push({row : row + 1, col : col + 1});
  neighbours.push({row : row + 1, col});
  neighbours.push({row : row + 1, col : col - 1});
  neighbours.push({row, col : col - 1});
  neighbours.push({row : row - 1, col : col - 1});
  neighbours.push({row : row -1 , col});
  neighbours.push({row : row - 1, col : col + 1});

  return neighbours.filter((cell) => {
    return grid[cell.row] != undefined && grid[cell.row][cell.col] != undefined ;
  });
}

exports.createGrid = createGrid;
exports.createWorld = createWorld;
exports.generatePrintableGrid = generatePrintableGrid;
exports.findNeighbours = findNeighbours;

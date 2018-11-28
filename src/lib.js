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

const countAliveNeighbours = function(row, col, grid){
  let neighbours = findNeighbours(row, col, grid);
  let aliveNeighboursCount = 0;
  for(let neighbour of neighbours){
  //  console.log(neighbour);
    if(grid[neighbour.row][neighbour.col] == 1){
      aliveNeighboursCount++;
    } 
  }
  return aliveNeighboursCount;
} 

const getCellRules = function(cell){
  const aliveCellRules = [0,0,1,1,0,0,0,0,0];
  const deadCellRules = [0,0,0,1,0,0,0,0,0];
  const allCellRules = [deadCellRules, aliveCellRules];
  return allCellRules[cell];
}

const evaluateNextGeneration = function(grid){
  let nextGenWorld = createGrid(grid.length);
  for(let row=0; row<grid.length; row++){
    for(let col=0; col<grid.length; col++){
      let cell = grid[row][col];
      let cellRules = getCellRules(cell);
      let aliveNeighboursCount = countAliveNeighbours(row, col, grid);
      nextGenWorld[row][col] = cellRules[aliveNeighboursCount];
    }
  }
  return nextGenWorld;
}

exports.createGrid = createGrid;
exports.createWorld = createWorld;
exports.generatePrintableGrid = generatePrintableGrid;
exports.findNeighbours = findNeighbours;
exports.countAliveNeighbours = countAliveNeighbours;
exports.evaluateNextGeneration = evaluateNextGeneration;

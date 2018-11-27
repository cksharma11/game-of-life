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

exports.createGrid = createGrid;
exports.generatePrintableGrid = generatePrintableGrid;

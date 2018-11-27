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

exports.createGrid = createGrid;

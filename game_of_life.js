const readline = require('readline-sync');
const {parseInputs} = require('./src/game_util.js');
const {
  createGrid, 
  createWorld, 
  evaluateNthGeneration, 
  generatePrintableGrid
} = require('./src/lib.js');

const main = function(){
  let sizeOfWorld = readline.questionInt("Enter size of the world : ");
  let world = createGrid(sizeOfWorld);
  console.log(generatePrintableGrid(world).join("\n"));

  let aliveCells = readline.question("Enter coordinates of alive cells :");
  aliveCells = parseInputs(aliveCells); 
  world = createWorld(aliveCells, sizeOfWorld);
  console.log(generatePrintableGrid(world).join("\n"));

  let numOfiterations = readline.questionInt("Enter the generation you want to see : ");
  let nthGeneration = evaluateNthGeneration(world, numOfiterations);
  console.log(generatePrintableGrid(nthGeneration).join("\n"));
}

main();

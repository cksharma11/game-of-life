const readline = require('readline-sync');
const {parseInputs, generatePrintableGrid} = require('./src/game_io.js');
const {
  createWorld, 
  evaluateNthGeneration 
} = require('./src/lib.js');

const main = function(){
  let aliveCells = [];
  let sizeOfWorld = readline.questionInt("Enter size of the world : ");
  let world = createWorld(aliveCells,sizeOfWorld);
  console.log(generatePrintableGrid(world).join("\n"));

  aliveCells = readline.question("Enter coordinates of alive cells :");
  aliveCells = parseInputs(aliveCells); 
  world = createWorld(aliveCells, sizeOfWorld);
  console.log(generatePrintableGrid(world).join("\n"));

  let numOfiterations = readline.questionInt("Enter the generation you want to see : ");
  let nthGeneration = evaluateNthGeneration(world, numOfiterations);
  console.log(generatePrintableGrid(nthGeneration).join("\n"));
}

main();

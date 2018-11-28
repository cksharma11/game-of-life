const parseInputs = function(userInputs){
  userInputs = "[" + userInputs + "]";
  userInputs = JSON.parse(userInputs);
  let parsedUserInputs = userInputs.map(userInput => {
    return {row: userInput[0], col: userInput[1]};
  });
  return parsedUserInputs;
}

const generatePrintableGrid = function(grid){
  let printableGrid = new Array();
  for(let row = 0; row < grid.length; row ++){
    let line = '|'+grid[row].join("|")+'|';
    printableGrid.push(line);
  }
  return printableGrid;
}

exports.parseInputs = parseInputs;
exports.generatePrintableGrid = generatePrintableGrid;

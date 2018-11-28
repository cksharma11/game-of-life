const parseInputs = function(userInputs){
  userInputs = "[" + userInputs + "]";
  userInputs = JSON.parse(userInputs);
  let parsedUserInputs = new Array();
  for(let input of userInputs){
    let parsedUserInput = {row: input[0], col: input[1]};
    parsedUserInputs.push(parsedUserInput);
  }
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

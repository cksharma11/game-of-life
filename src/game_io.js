const parseInputs = function(userInputs){
  userInputs = "[" + userInputs + "]";
  userInputs = JSON.parse(userInputs);
  let parsedUserInputs = userInputs.map(userInput => {
    return {row: userInput[0], col: userInput[1]};
  });
  return parsedUserInputs;
}

const generatePrintableGrid = function(grid){
  return grid.map(row => '|' + row.join("|") + '|');
}

exports.parseInputs = parseInputs;
exports.generatePrintableGrid = generatePrintableGrid;

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

exports.parseInputs = parseInputs;

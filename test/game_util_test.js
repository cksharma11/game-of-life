const {equal, deepEqual} = require('assert');
const {parseInputs} = require('../src/game_util.js')

describe("parseInputs", function(){
  it("should return empty array for no user inputs", function(){
    deepEqual(parseInputs(""),[]); 
  });
  it("should return parsed user inputs", function(){
    deepEqual(parseInputs("[1,0],[0,1],[0,0]"),[{row:1,col:0},{row:0,col:1},{row:0,col:0}]); 
  });
});

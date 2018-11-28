const {equal, deepEqual} = require('assert');
const {parseInputs, generatePrintableGrid} = require('../src/game_io.js')
const {createGrid} = require('../src/lib.js')

describe("parseInputs", function(){
  it("should return empty array for no user inputs", function(){
    deepEqual(parseInputs(""),[]); 
  });
  it("should return parsed user inputs", function(){
    deepEqual(parseInputs("[1,0],[0,1],[0,0]"),[{row:1,col:0},{row:0,col:1},{row:0,col:0}]); 
  });
});

describe("generatePrintableGrid", function(){
  it("should return printable form of board in array for n>0 size grid", function(){
    deepEqual(generatePrintableGrid(createGrid(2)), ["|0|0|","|0|0|"]);
  });
  it("should return empty array for 0 size grid", function(){
    deepEqual(generatePrintableGrid(createGrid(0)), []);
  });
});

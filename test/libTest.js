const {equal, deepEqual} = require("assert");
const {
  createGrid,
  generatePrintableGrid,
  createWorld
} = require("../src/lib.js");

describe("createGrid", function(){
  it("should return empty array for input 0", function(){
    deepEqual(createGrid(0), []);
  });
  it("should return 1x1 2D array for input 1 containing all 0's", function(){
    deepEqual(createGrid(1),[[0]]);
  });
  it("should return 3x3 2D array for input 3 containing all 0's", function(){
    deepEqual(createGrid(3),[[0,0,0],[0,0,0],[0,0,0]]);
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

describe("createWorld", function(){
  it("should return 2D array containing all 0's for empty input array", function(){
    deepEqual(createWorld([], 1), [[0]]);
  });
  it("should return 2D array containing all 1's for input array containing positions for alive cells", function(){
    deepEqual(createWorld([{row: 0, col:0}], 1), [[1]]);
  });
  it("should return 2D array containing 1's for input array containing positions for alive cells", function(){
    deepEqual(createWorld([{row: 0, col:0}], 2), [[1,0],[0,0]]);
  });
});


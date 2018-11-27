const {equal, deepEqual} = require("assert");
const {
  createGrid,
  generatePrintableGrid
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


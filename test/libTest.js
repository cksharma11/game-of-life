const {equal, deepEqual} = require("assert");
const {createGrid} = require("../src/lib.js");

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


const { prodExcSelf } = require("../prodExcSelf");

describe("An array of numbers.", () => {
   let inputs: number[][];
   let outputs: number[][];

   beforeAll(() => {
	  inputs = [
		 [1, 2, 3, 4],
		 [-1, 1, 0, -3, 3]
	  ];
	  outputs = [
		 [24, 12, 8, 6],
		 [0, 0, 9, 0, 0]
	  ];

   });
   test.todo("Should contain as elements products of other elements.");
   test.todo("Should contain as elements products of other elements, computed in place.");
});

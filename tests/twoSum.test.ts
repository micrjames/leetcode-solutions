const { twoSum } = require("../twoSum");

describe("An array.", () => {
   let inputs: number[][];
   let targets: number[];
   let outputs: number[][];

   beforeAll(() => {
	  inputs = [
		 [2, 7, 11, 15],
		 [3,2,4],
		 [3,3]
	  ];
	  targets = [9, 6, 6];
	  outputs = [
		 [0,1],
		 [1,2],
		 [0,1]
	  ];
   });
   test("Should add up to the target by brute force.", () => {
	  for(let i = 0; i < inputs.length; i++)
		 expect(twoSum.BF(inputs[i], targets[i])).toEqual(outputs[i]);
   });
   test("Should add up to the target by difference from Map.", () => {
	  for(let i = 0; i < inputs.length; i++)
		 expect(twoSum.MapDiff(inputs[i], targets[i])).toEqual(outputs[i]);
   });
});

import { prodExcSelf } from "../arrays&hashing/prodExcSelf";

describe("An array of numbers.", () => {
   let inputs: Array<Array<number>>;
   let outputs: Array<Array<number>>;
   let answers: Array<Array<number>>;

   beforeAll(() => {
	  inputs = [
		 [1, 2, 3, 4],
		 [-1, 1, 0, -3, 3]
	  ];
	  outputs = [
		 [24, 12, 8, 6],
		 [0, 0, 9, 0, 0]
	  ];

	  answers = [
		 prodExcSelf.Cmp(inputs[0]),
	     prodExcSelf.Cmp(inputs[1])
	  ];
	  console.log(outputs[1], answers[0]);
	  console.log(outputs[1], answers[1]);
   });
   test("Should contain ${inputs[0]} elements", () => {});
});

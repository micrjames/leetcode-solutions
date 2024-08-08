import { groupAnagrams } from "../arrays&hashing/groupAnagrams";
import { Range } from "../../range/range";

describe("An array of strings.", () => {
   let inputs: string[][];
   let outputs: string[][][];
   let inputRange: number[];

   beforeAll(() => {
	  inputs = [
		 ["eat", "tea", "tan", "ate", "nat", "bat"],
		 // ["eat", "tea", "tan", "ate", "nat"],
		 // 5 + 4 + 3 + 2 + 1 = 15.
		 [""],
		 ["a"],
		 []
	  ];
	  outputs = [
		 [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]],
		 [[""]],
		 [["a"]],
		 []
	  ];

	  inputRange = [...new Range(inputs.length)];
   });
   describe("Grouping Anagrams by sorting and comparing", () => {
	  test("Should have the correct output.", () => {
		 for(const it of inputRange)
			expect(groupAnagrams.SortCmp(inputs[it])).toEqual(outputs[it]);
	  });
   });
   describe("Should group anagrams by comparing map properties.", () => {
	  test.todo("Should have the correct output.");
   });
});

import { groupAnagrams } from "../arrays&hashing/groupAnagrams";
import { Range } from "../range/range";

describe("An array of strings.", () => {
   let inputs: string[][];
   let outputs: string[][][];
   let inputRange: number[];

   describe("Grouping Anagrams by sorting and comparing", () => {
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
	  test("Should have the correct output.", () => {
		 for(const it of inputRange)
			expect(groupAnagrams.SortCmp(inputs[it])).toEqual(outputs[it]);
	  });
   });
   describe("Should group anagrams by comparing map properties.", () => {
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
			[["ate", "tea", "eat"], ["nat", "tan"], ["bat"]],
			[[""]],
			[["a"]],
			[]
		 ];

		 inputRange = [...new Range(inputs.length)];
   });
	  test("Should have the correct output.", () => {
		 for(const it of inputRange)
			expect(groupAnagrams.MapCmp(inputs[it])).toEqual(outputs[it]);
	  });
   });
});

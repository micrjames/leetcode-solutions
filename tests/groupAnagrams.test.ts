import { groupAnagrams } from "../arrays&hashing/groupAnagrams";

describe("An array of strings.", () => {
   let inputs: string[][];
   let outputs: string[][][];

   beforeAll(() => {
	  inputs = [
		 // ["eat", "tea", "tan", "ate", "nat", "bat"],
		 ["eat", "tea", "tan", "ate", "nat"],
		 // 5 + 4 + 3 + 2 + 1 = 15.
		 [""],
		 ["a"]
	  ];
	  outputs = [
		 // [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]],
		 [["eat", "tea", "ate"], ["tan", "nat"]],
		 [[""]],
		 [["a"]]
	  ];
	  console.log(groupAnagrams.SortCmp(inputs[0]));
   });
   test("Should group anagrams by sorting and comparing.", () => {
	  expect(groupAnagrams.SortCmp(inputs[0])).toEqual(outputs[0]);
   });
   test.todo("Should group anagrams by comparing map properties.");
		 // groupAnagrams.MapCmp(str[i]);
});

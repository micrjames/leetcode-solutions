const { groupAnagrams } = require("../arrays&hashing/groupAnagrams");

describe("An array of strings.", () => {
   let inputs: string[][];
   let outputs: string[][][];

   beforeAll(() => {
	  inputs = [
		 ["eat", "tea", "tan", "ate", "nat", "bat"],
		 [""],
		 ["a"]
	  ];
	  outputs = [
		 [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]],
		 [[""]],
		 [["a"]]
	  ];
   });
   test.todo("Should group anagrams by sorting and comparing.");
		 // groupAnagrams.SortCmp(str[i]);
   test.todo("Should group anagrams by comparing map properties.");
		 // groupAnagrams.MapCmp(str[i]);
});

const { validAnagram } = require("../validAnagram");

describe("Two strings.", () => {
   let s: string[];
   let t: string[];
   let outputs: boolean[];

   beforeAll(() => {
	  s = [
		"anagram",
		"rat"
	  ];
	  t = [
		 "nagaram",
		 "car"
	  ];
	  outputs = [
		 true,
		 false
	  ];
   });
   test.todo("Should be anagrams, s and t.");
});

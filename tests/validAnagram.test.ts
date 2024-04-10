const { validAnagram } = require("../arrays&hashing/validAnagram");

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
   test("Should be anagrams, s and t by sorting and comparing.", () => {
	  for(let i = 0; i < s.length; i++) {
		 const cmp = validAnagram.SortCmp(s[i], t[i]);
		 expect(cmp).toBe(outputs[i]);
	  }
   });
   test("Should be anagrams, s and t by comparing map properties.", () => {
	  for(let i = 0; i < s.length; i++) {
		 const cmp = validAnagram.MapCmp(s[i], t[i]);
		 expect(cmp).toBe(outputs[i]);
	  }
   });
});

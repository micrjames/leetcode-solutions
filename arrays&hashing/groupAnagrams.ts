import { utils } from "../utils/utils";

// 49. Group Anagrams
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// a. Sort & Compare  -- O(m * nlogn)
const SortCmp = (strs: string[]): string[][] => {
   console.log(strs);
   const array: string[][] = [];
   array[0] = [];
   array[1] = [];
   const patterns: string[] = [];
   for(let right = 0; right < strs.length; right++) {
	  for(let left = 0; left < right; left++) {
		  /*
		  ["a", "b", "c", "d"]
		  3 + 2 + 1 = 6.

		  right		left	left < right
		  0			0		false				❌
		  1			0		true				"a" -> "b"
		  1			1       false				❌
		  2			0		true				"a" -> "c"
		  2			1		true				"b" -> "c"
		  2			2		false				❌
		  3			0		true				"a" -> "d"
		  3			1		true				"b" -> "d"
		  3			2		true				"c" -> "d"
		  3			3		false				❌
		  */
		  if(utils.sortStr(strs[left]) == utils.sortStr(strs[right])) {
			 if(patterns.includes(utils.sortStr(strs[left]))) {
				if(!array[patterns.indexOf(utils.sortStr(strs[left]))].includes(strs[left]))
				   array[patterns.indexOf(utils.sortStr(strs[left]))].push(strs[left]);
			    else if(!array[patterns.indexOf(utils.sortStr(strs[left]))].includes(strs[right]))
				   array[patterns.indexOf(utils.sortStr(strs[left]))].push(strs[right]);
			 } else {
				patterns.push(utils.sortStr(strs[left]));
				array[patterns.indexOf(utils.sortStr(strs[left]))].push(strs[left]);
				array[patterns.indexOf(utils.sortStr(strs[left]))].push(strs[right]);
			 }
		  }
	  }
   }
   console.log(array);

   return array;
};

// b. Map 
const MapCmp = (strs: string[]): string[][] => {
   return Array<Array<string>>();
};

export const groupAnagrams = { SortCmp, MapCmp };

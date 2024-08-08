import { utils } from "../utils/utils";

// 49. Group Anagrams
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// a. Sort & Compare  -- O(m * nlogn)
const SortCmp = (strs: string[]): string[][] => {
   const array: string[][] = [];
   const patterns: string[] = [];
   for(let right = 0; right < strs.length; right++) {
	  for(let left = 0; left < right; left++) {
		  if(utils.sortStr(strs[left]) == utils.sortStr(strs[right])) {
			 if(patterns.includes(utils.sortStr(strs[left]))) {
				if(!array[patterns.indexOf(utils.sortStr(strs[left]))])
				   array[patterns.indexOf(utils.sortStr(strs[left]))] = [];
				if(!array[patterns.indexOf(utils.sortStr(strs[left]))].includes(strs[left]))
				   array[patterns.indexOf(utils.sortStr(strs[left]))].push(strs[left]);
			    else if(!array[patterns.indexOf(utils.sortStr(strs[left]))].includes(strs[right]))
				   array[patterns.indexOf(utils.sortStr(strs[left]))].push(strs[right]);
			 } else {
				patterns.push(utils.sortStr(strs[left]));
				if(!array[patterns.indexOf(utils.sortStr(strs[left]))])
				   array[patterns.indexOf(utils.sortStr(strs[left]))] = [];
				array[patterns.indexOf(utils.sortStr(strs[left]))].push(strs[left]);
				array[patterns.indexOf(utils.sortStr(strs[left]))].push(strs[right]);
			 }
		  }
	  }
   }
   const strDiffPattern = strs.filter(str => !patterns.includes(utils.sortStr(str)));
   const mappedStrIntPattern = strDiffPattern.map(str => [str]);

   return array.concat(mappedStrIntPattern);
};

// b. Map 
const MapCmp = (strs: string[]): string[][] => {
   return Array<Array<string>>();
};

export const groupAnagrams = { SortCmp, MapCmp };

import { utils } from "../utils/utils";
import { Range } from "../range/range";
import { YAMap } from "../../YAMap/YAMap";

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
   // HashMap       key: [eat tea]
   //								      1e, 1a, 1t

   const anaGroup = new YAMap();
   for(const str of strs) {
	  const count = Array.from({length: 26}, _ => 0);

	  for(const idx of [...new Range(str.length)])
		 count[str.charCodeAt(idx) - "a".charCodeAt(0)] += 1;
	  if(!anaGroup.has(count))
		 anaGroup.set(count, [str]);
	  else anaGroup.set(count, [str, ...anaGroup.get(count)]);
   }
   return [...anaGroup.values];
};

export const groupAnagrams = { SortCmp, MapCmp };

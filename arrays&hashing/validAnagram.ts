import { utils } from "../utils/utils";

// 242. Valid Anagram
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// a. sort & compare
const SortCmp = (s: string, t: string): boolean  => {
   const sSorted = utils.sortStrtoArr(s);
   const tSorted = utils.sortStrtoArr(t);
   return sSorted == tSorted;
};

// b. map & compare
import { YAMap } from "../../YAMap/YAMap";
const mapChars = (str: string, map: YAMap) => {
   for(const c of str) {
	  if(map.has(c)) {
		 map.set(c, 1 + map.get(c));
	  } else {
		 map.set(c, 1);
	  }
   }
};
const MapCmp = (s: string, t: string): boolean  => {
   const sMap = new YAMap();
   const tMap = new YAMap();

   if(s.length != t.length) return false;

   mapChars(s, sMap);
   mapChars(t, tMap);

   return [...sMap.keys].every(key => {
	  return sMap.get(key) == tMap.get(key);
   });
};

export const validAnagram = { SortCmp, MapCmp };

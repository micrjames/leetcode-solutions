// 242. Valid Anagram
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// a. sort & compare
const SortCmp = (s: string, t: string): boolean  => {
   const sSorted = s.split("").sort().join();
   const tSorted = t.split("").sort().join();
   return sSorted == tSorted;
};

// b. map & compare
const { YAMap } = require("../../YAMap/YAMap");
const mapChars = (str: string, map: typeof YAMap) => {
   for(const c of str) {
	  if(map.has(c)) {
		 map.set(c, 1 + map.get(c));
	  }
	  else {
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

exports.validAnagram = { SortCmp, MapCmp };

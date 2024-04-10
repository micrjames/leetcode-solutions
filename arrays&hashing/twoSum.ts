// 1. Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.


// a. brute force
const BF = (nums: number[], target: number): number[] => {
   for(let right = 0; right < nums.length; right++) {
      for(let left = 0; left < right; left++) {
         if(nums[left] + nums[right] == target)
			return [left, right];
	  }
   }
};

// b. store in Map and compute difference
const { YAMap } = require("../../YAMap/YAMap");
const MapDiff = (nums: number[], target: number): number[] => {
   const map = new YAMap();
   let difference: number;
   const ret = nums.flatMap((num, i) => {
	  difference = target - num;
	  if(map.has(difference))
		 return [map.get(difference), i]
	  map.set(num, i);
   });
   return ret.filter(num => num != undefined);
};
exports.twoSum = { BF, MapDiff};

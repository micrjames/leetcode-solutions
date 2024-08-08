import { utils } from "../utils/utils";

// 217. Contains Duplicate
// Given an intger array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
// a. Brute Force

const BF = (nums: number[]): boolean => {
   for(let right = 0; right < nums.length; right++) {
      for(let left = 0; left < right; left++) {
	     const isDuplicate = nums[left] === nums[right];
		 if(isDuplicate) return true;
	  }
   }
   return false;
};

//	b. Sort & compare

const SortCmp = (nums: number[]): boolean => {
   nums = utils.sortNums(nums);

   for(let curr = 0; curr < (nums.length-1); curr++) {
	   const isDuplicate = nums[curr] === nums[curr+1];
	   if(isDuplicate) return true;
   }

   return false;
};
//	c. HashSet &compare
import { YASet } from "../../YASet/YASet";

const SetCmp = (nums: number[]): boolean => {
   const numsSet = new YASet();
   /*
   nums.forEach(num => {
	  numsSet.add(num);
   });
   return numsSet.size !== nums.length;
   */
   for(const num of nums) {
	  if(numsSet.has(num)) return true;

	  numsSet.add(num);
   }
   return false;
};

export const containsDuplicate = { BF, SortCmp, SetCmp };

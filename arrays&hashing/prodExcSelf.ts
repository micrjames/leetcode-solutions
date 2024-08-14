import { utils } from "../utils/utils";

// 238. Product Except Self
// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// Must run in O(n) time and without using the division operation.

// a. Compare 

const Cmp = (nums: number[]): number[] => {
   let answer: Array<number> = utils.populateArray(nums.length, 0);
   let prefix: Array<number> = utils.populateArray(1, 1);
   let postfix: Array<number> = utils.populateArray(1, 1);

   for(const num of nums)
	  prefix = [...prefix, num * prefix[prefix.length-1]];

   for(const num of nums.reverse())
	  postfix = [...postfix, num * postfix[postfix.length-1]];
   postfix.reverse();

   for(let it = 0; it < answer.length; it++)
	  answer[it] = prefix[it] * postfix[it+1];

   return answer;
};

//	b. Compare in Place

const CmpInPlace = (nums: number[]): number[] => {
   let answer: Array<number> = [];
   let range: Array<number> = utils.range(nums.length);

   let prefix = 1;
   for(const it of range) {
	  answer[it] = prefix;
	  prefix *= nums[it];
   }

   let postfix = 1;
   const revRange = range.reverse();
   for(const it of revRange) {
	  answer[it] *= postfix;
	  postfix *= nums[it];
   }

   return answer;
};

export const prodExcSelf = { Cmp, CmpInPlace };

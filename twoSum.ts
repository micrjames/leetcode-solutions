// 1. Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.


// a. brute force
const BF = (nums: number[], target: number): number[] => {
	return Array(4).fill(0);
};

// b. store in Map and compute difference
const MapDiff = (nums: number[], target: number): number[] => {
	return Array(4).fill(0);
};
exports.twoSum = { BF, MapDiff};

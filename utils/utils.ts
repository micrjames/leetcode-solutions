const sortStr = (str: string, delimeter: string = ""): string => {
	return str.split("").sort().join(delimeter);
};

const sortStrtoArr = (str: string): string => {
   return sortStr(str, ",");
};

const sortNums = (nums: number[], reverse: boolean): number[] => {
   if(reverse) return nums.sort((a, b) => b - a);
   return nums.sort((a, b) => a - b);
};

export const utils = { sortStrtoArr, sortStr, sortNums };

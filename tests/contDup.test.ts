const { containsDuplicate } = require("../arrays&hashing/containsDuplicate");
const { Range } = require("../../Range/Range");

describe("An array.", () => {
   const arr = [...new Range(5)];
   arr[2] = 1;
   test("Should contain a duplicate value by brute force comparison.", () => {
	   expect(containsDuplicate.BF(arr)).toBeTruthy();
   });
   test("Should contain a duplicate value by sorting values and comparing.", () => {
	   expect(containsDuplicate.SortCmp(arr)).toBeTruthy();
   });
   test("Should contain a duplicate value by comparing to set values.", () => {
	   expect(containsDuplicate.SetCmp(arr)).toBeTruthy();
   });
});

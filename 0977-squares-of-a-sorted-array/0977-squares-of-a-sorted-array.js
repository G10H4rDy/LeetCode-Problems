/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
   return nums.map(el => el * el).sort((a,b) => a - b)
};
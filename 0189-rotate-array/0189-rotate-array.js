/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {

  const nums1 = [];

  if (k >= nums.length) {
    k = k % nums.length;
    if (k === 0) {
      return nums;
    }
  }

  for (let i = 0; i < k; i++) {
    nums1.push(nums.pop());
  }

  for (let i = 0; i < nums1.length; i++) {
    nums.unshift(nums1[i]);
  }

};
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    if (k === 0 || nums.length === 1) return;

    if (k >= nums.length){
    k = k % nums.length
}

    // NOT ACCEPTED BY LEETCODE
    // remove last elements from index K
    // let startPosition = nums.length - k
    // const removed = nums.splice(startPosition,k)
    // nums = removed.concat(nums)

    let numsArr = nums.splice(nums.length - k)
    for(let i = k -1 ; i >=0; i--)
    {
       nums.unshift(numsArr[i])
    }
};
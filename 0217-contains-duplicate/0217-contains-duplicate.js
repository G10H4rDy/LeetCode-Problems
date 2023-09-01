/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const nums2 = []
    for(let i = 0; i < nums.length; i++){
        if (nums2.includes(nums[i])) return true
        else nums2.push(nums[i])
    }
    return false
};
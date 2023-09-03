/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const nums1 = {}
    
    for (let num of nums){
        if (nums1[num] >=0) return true
        else nums1[num] = nums.indexOf(num)
    }
    return false
};
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const nums1 = []
    
    for (let num of nums){
        if (nums1.includes(num)) return true
        else nums1.push(num)
    }
    return false
};
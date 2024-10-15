/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    
    const nums1 = {}
    
    for (let num of nums){
        if (nums1[num] == true) return true
        else nums1[num] = true;
    }
    
    return false

};
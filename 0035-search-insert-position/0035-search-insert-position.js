/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if(nums.indexOf(target) > -1){
        return nums.indexOf(target)
    }else if(target < nums[0]){
        return 0
    }else if (target > nums[nums.length -1]){
        return nums.length
    }else{
        for (let i = 0, j = 1; i < nums.length - 1, j < nums.length; i++, j++){
            if (target > nums[i] && target < nums[j]){
                return j
            }
        }
    }
};
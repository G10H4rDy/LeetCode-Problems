/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let left = 0;
    let pointer = 0;

    while (pointer < nums.length){
        if(nums[pointer] != 0){
            if (pointer != left){
                let temp = nums[left]
                nums[left] = nums[pointer]
                nums[pointer] = temp
            }
            left++
        }
        pointer++
    }
};
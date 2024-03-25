/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let zeroCounter = 0;
    let originalLength = nums.length
    for (let i = 0; i < originalLength; i++){
        if ( nums[i] === 0 )
        {
            nums.splice(i,1)
            zeroCounter++
            i--
        }
    }

    while(zeroCounter > 0){
        nums.push(0)
        zeroCounter--
    }

    return nums
};
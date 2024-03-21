/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let numsObj = {};

    if(nums.length === 1) return nums[0];

    for(let i = 0; i < nums.length; i++)
    {
        if (!numsObj[nums[i]])
        {
            numsObj[nums[i]] = 1
            continue
        }

        numsObj[nums[i]]++;
        if (numsObj[nums[i]] > nums.length/2)
        {
            return nums[i]
        }
        
    }
};
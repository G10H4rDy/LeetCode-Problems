/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let biggestSum = -10000000;
    let curSum = 0;

    for (let i = 0 ; i < nums.length; i++)
    {
        curSum += nums[i];

        if (curSum > biggestSum) biggestSum = curSum;

        if (curSum < 0) curSum = 0;
    }

    return biggestSum;
}
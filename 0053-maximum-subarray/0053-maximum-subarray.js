/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {

    if (nums.length === 1){
        return nums[0];
    }
    
    // check if every elent in array is negative; if so, return the biggest element of them
    const x = checkIfAllNegative(nums)
    if (x) return x

    let curSum = 0
    let biggestSum = 0

    for (let i = 0; i < nums.length; i++)
    {

        // Update current sum 
        curSum += nums[i]

        // if current sum is 0, all past elements and start counting from 0
        if(curSum < 0 ) {
            curSum = 0;
            continue
        }

        // Keep track of biggest sum
        if (curSum > biggestSum) biggestSum = curSum;


    }
    
    return biggestSum;
};


const checkIfAllNegative = (nums) =>{
    let biggestNegative = -10000;
    for (const num of nums){
        if (num >= 0) return false
        else if(num > biggestNegative) biggestNegative = num
    }

    return biggestNegative
}
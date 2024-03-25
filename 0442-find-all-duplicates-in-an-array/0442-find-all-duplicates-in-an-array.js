/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let numsObj = {}
    let repeatedNums = []
    for(let i = 0; i < nums.length; i++ )
    {
        // If it's first occurence store it into object
        if(!numsObj[nums[i]] && numsObj[nums[i]] !== 0)
        {
            numsObj[nums[i]] = 0
            continue
        }

        // If it's second or more occurence, store it into array
        repeatedNums.push(nums[i])

    }

    return repeatedNums
};
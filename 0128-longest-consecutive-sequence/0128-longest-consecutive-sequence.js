/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {

    if(nums.length <= 1) return nums.length;
    nums.sort((a,b) => a-b)
    let biggestSequence = 0;
    let sequence = 0;
    for(let i = 0, j = i + 1; j < nums.length; i++, j++){
        if(nums[j] - nums[i] === 1){
            sequence++;
            if (sequence > biggestSequence) biggestSequence = sequence;
        }else if (nums[j] === nums[i]){
            continue;
        }else sequence = 0;
    
    }

    return biggestSequence + 1;
};

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let valCounter = 0;
    newArr = []
    for (let i = 0; i < nums.length; i++){
        if( nums[i]!== val){
            newArr.push(nums[i])
        }
    }

    let k = newArr.length

    for(let i = 0; i < k; i++){
        nums[i] = newArr[i]
    }

    return k
};
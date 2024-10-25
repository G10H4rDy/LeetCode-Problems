/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {

    if(nums.length <= 1) return nums.length;

    nums = mergeSort(nums)
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
function mergeSort(arr) {
  // Base case
  if (arr.length <= 1) return arr
  let mid = Math.floor(arr.length / 2)
  // Recursive calls
  let left = mergeSort(arr.slice(0, mid))
  let right = mergeSort(arr.slice(mid))
  return merge(left, right)
}

function merge(left, right) {
  let sortedArr = [] // the sorted items will go here
  while (left.length && right.length) {
    // Insert the smallest item into sortedArr
    if (left[0] < right[0]) {
      sortedArr.push(left.shift())
    } else {
      sortedArr.push(right.shift())
    }
  }
  // Use spread operators to create a new array, combining the three arrays
  return [...sortedArr, ...left, ...right]
}

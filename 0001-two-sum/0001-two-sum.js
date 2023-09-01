var twoSum = function(nums, target) {
  const nums2 = [];

for (let i = 0; i < nums.length; i++){
  if (nums2.includes(nums[i])){
      return [nums2.indexOf(nums[i]), i]
    }else{
      nums2.push(target - nums[i])
    }
}


  // for(element of nums){
  //   if (nums2.includes(element)){
  //     return [nums.indexOf(target - element), nums.indexOf(element)]
  //   }else{
  //     nums2.push(target - element)
  //   }
  // }
}   
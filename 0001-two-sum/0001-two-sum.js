var twoSum = function(nums, target) {
  
   let obj ={};
   for (let i = 0; i < nums.length; i++){
       if(obj[target - nums[i]] >= 0){
           return [obj[target - nums[i]],i];
       }
       obj[nums[i]] = i;
   }
};
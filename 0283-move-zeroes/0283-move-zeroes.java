class Solution {
    public void moveZeroes(int[] nums) {
      // Start with two pointers 
      int left = 0;
      int pointer = 0;
      while(pointer <= nums.length- 1){
      if (nums[pointer] != 0){
        int copy = nums[left];
        nums[left] = nums[pointer];
        nums[pointer] = copy;
        left++;
      }
      pointer++;

      }
    }
}
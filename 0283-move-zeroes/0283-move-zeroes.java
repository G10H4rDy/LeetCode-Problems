class Solution {
    public void moveZeroes(int[] nums) {
      // Start with two pointers 
      int left = 0;
      int pointer = 0;

    //  Go through array
      while(pointer <= nums.length- 1){
        // If you encounter non-zero value
      if (nums[pointer] != 0){
        if (left != pointer){
        int copy = nums[left];
        nums[left] = nums[pointer];
        nums[pointer] = copy;
        }
        left++;
      }
      pointer++;

      }
    }
}
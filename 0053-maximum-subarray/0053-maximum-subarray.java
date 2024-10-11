class Solution {
    public int maxSubArray(int[] nums) {
        int biggestSum = -10000000;
        int curSum = 0;
        if (nums.length == 1) return nums[0];
     

        for (int i = 0; i < nums.length; i++){
            
            curSum += nums[i];

            if (curSum > biggestSum){
                biggestSum = curSum;
            }

            if (curSum < 0){
                curSum = 0;
                continue;
            }


            
            
        }
        return biggestSum;

    }
}
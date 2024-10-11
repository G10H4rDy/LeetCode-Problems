class Solution {
    public int maxSubArray(int[] nums) {
        int biggestSum = 0;
        int curSum = 0;
        if (nums.length == 1) return nums[0];
        int biggestNegative = biggestNegative(nums);
        if (biggestNegative != 0) return biggestNegative;

        for (int i = 0; i < nums.length; i++){
            curSum += nums[i];

            if (curSum < 0){
                curSum = 0;
                continue;
            }

            if (curSum > biggestSum){
                biggestSum = curSum;
            }
        }
        return biggestSum;

    }

    static int biggestNegative(int[] nums){
        int biggestNeg = -1000000;
        for(int i = 0; i < nums.length; i++){
            if (nums[i] >= 0) return 0;
            else if ( nums[i] > biggestNeg) biggestNeg = nums[i]; 
        }

        return biggestNeg;
    }
}
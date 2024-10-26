class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        biggestSum = -10000000
        curSum = 0

        for num in nums:
            curSum += num
            if curSum > biggestSum:
                biggestSum = curSum
            
            if curSum < 0:
                curSum = 0

        return biggestSum
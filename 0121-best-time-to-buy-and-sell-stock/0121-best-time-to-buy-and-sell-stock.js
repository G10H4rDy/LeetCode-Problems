/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

  let leftPointer = prices[0]
  let currentProfit = 0;
  let maxProfit = 0

  for(let i = 1 ; i < prices.length; i++)
  {
    if(prices[i] - leftPointer <= 0)
    {
        leftPointer = prices[i]
    }else{
        currentProfit = prices[i] - leftPointer
        if (currentProfit > maxProfit) maxProfit = currentProfit;
    }
  }
   
   return maxProfit;
};
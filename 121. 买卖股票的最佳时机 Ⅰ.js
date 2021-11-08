/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function (prices) {
  // let buy = prices[0] //买入
  // let maxprofit = 0 //最大利润
  // for (let price of prices) {
  //   buy = Math.min(buy, price)
  //   maxprofit = Math.max(maxprofit, price - buy)
  // }
  // // for (let i = 0; i < prices.length; i++) {
  // //   for (let j = i + 1; j < prices.length; j++) {
  // //     let profit = prices[j] - prices[i]
  // //     if (profit > maxprofit) {
  // //       maxprofit = profit
  // //     }
  // //   }
  // // }
  // return maxprofit
  const dp = [prices[0], 0]

  for (let i = 0; i < prices.length; i++) {
    dp[0] = Math.min(dp[0], prices[i])
    dp[1] = Math.max(dp[1], prices[i] - dp[0])
  }
  return dp[1]
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]))

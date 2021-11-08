/*
 * @lc app=leetcode.cn id=674 lang=javascript
 *
 * [674] 最长连续递增序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  if (nums.length == 0) return 0
  // 数组不是空情况下最少是1
  let count = 1
  let temp = 1
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i + 1] > nums[i]) {
      temp++
    } else {
      temp = 1
    }
    // 当前连续的超过累计值则累计值更新
    if (temp > count) {
      count = temp
    }
  }
  return count
}
// @lc code=end

console.log(findLengthOfLCIS([1, 3, 5, 4, 2, 3, 4, 5]))

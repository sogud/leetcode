/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let arr = [],
    max = 0

  for (let i = 0; i < s.length; i++) {
    const index = arr.indexOf(s[i])
    if (index !== -1) {
      arr.splice(0, index + 1)
    } else {
      arr.push(s[i])
    }
    max = Math.max(arr.length, max)
  }
  return max
}

console.log(lengthOfLongestSubstring("pwwkew"))
// @lc code=end

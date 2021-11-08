/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const romanMap = new Map()
  romanMap.set("I", 1)
  romanMap.set("V", 5)
  romanMap.set("X", 10)
  romanMap.set("L", 50)
  romanMap.set("C", 100)
  romanMap.set("D", 500)
  romanMap.set("M", 1000)
  let number = 0
  for (let i = 0; i < s.length; i++) {
    const cur = romanMap.get(s[i])
    const next = romanMap.get(s[i + 1])
    if (next && cur < next) {
      number -= cur
    } else {
      number += cur
    }
  }
  return number
}

// @lc code=end

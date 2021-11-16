/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 === 1) return false

  const stack = []

  const map = new Map()
  map.set("(", ")")
  map.set("[", "]")
  map.set("{", "}")
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      stack.push(s[i])
    } else {
      if (stack.length === 0) {
        return false
      }
      const last = stack.pop()
      if (map.get(last) !== s[i]) {
        return false
      }
    }
  }
  return stack.length === 0
}
// @lc code=end

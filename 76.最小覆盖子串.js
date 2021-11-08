/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  // 双指针 滑动窗口
  let l = 0
  let r = 0
  const need = new Map()
  for (const c of t) {
    need.set(c, (need.get(c) || 0) + 1)
  }

  let needLength = need.size

  let res = ""

  while (r < s.length) {
    const c = s[r]
    if (need.has(c)) {
      need.set(c, need.get(c) - 1)
      if (need.get(c) === 0) needLength -= 1
    }
    // 当s字符串包含t字符串所有字符时，缩小范围
    while (needLength === 0) {
      // 更新最小结果
      const newRes = s.substring(l, r + 1)
      if (res === "" || newRes.length < res.length) {
        res = newRes
      }
      // 左指针向右移动来查找新的窗口，并且包含t字符串的字符
      const c2 = s[l]
      if (need.has(c2)) {
        need.set(c2, need.get(c2) + 1)
        if (need.get(c2) > 0) needLength += 1
      }
      l += 1
    }
    // 如果当前范围内s字符内不包含t，右指针向右移动
    r += 1
  }

  return res
}

console.log(minWindow("ADOBECODEBANC", "ABC"))
// @lc code=end

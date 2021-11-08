/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  // 当前行
  let row = [1]
  if (rowIndex === 0) return row
  // 如果rowIndex等于5那么结果应该是第6行6位数字

  for (let i = 1; i <= rowIndex; i++) {
    //杨辉三角的每一行都上一行多一位数，默认加个0
    row.push(0)
    // 只要不是第一位也就是下标0
    // 当前行的当前位置都等于上一行的当前位置加上前一位
    for (let j = i; j > 0; j--) {
      row[j] = row[j] + row[j - 1]
    }
  }
  return row
}
// @lc code=end
console.log(getRow(3))

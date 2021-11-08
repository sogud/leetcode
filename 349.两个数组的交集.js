/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  return nums1
    .filter(item => nums2.includes(item))
    .reduce((acc, cur) => {
      if (!acc.includes(cur)) {
        acc.push(cur)
      }
      return acc
    }, [])
}
console.log(intersection([1, 2, 2, 1], [2, 2]))

// @lc code=end
// @lc code=end

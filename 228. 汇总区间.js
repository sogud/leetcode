// 给定一个无重复元素的有序整数数组 nums 。

// 返回 恰好覆盖数组中所有数字 的 最小有序 区间范围列表。也就是说，nums 的每个元素都恰好被某个区间范围所覆盖，并且不存在属于某个范围但不属于 nums 的数字 x 。

// 列表中的每个区间范围 [a,b] 应该按如下格式输出：

// "a->b" ，如果 a != b
// "a" ，如果 a == b

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  let summary = []
  for (let i = 0, j = 0; j < nums.length; ++j) {
    if (j + 1 < nums.length && nums[j + 1] == nums[j] + 1) {
      continue
    }
    if (i == j) {
      summary.push(nums[i] + "")
    } else {
      summary.push(nums[i] + "->" + nums[j])
    }
    i = j + 1
  }

  return summary
}

console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]))

// 给定一个整数数组和一个整数 k，判断数组中是否存在两个不同的索引 i 和 j，使得 nums [i] = nums [j]，并且 i 和 j 的差的 绝对值 至多为 k。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const set = new Set()
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      return true
    }
    set.add(nums[i])
    if (set.size > k) {
      set.delete(nums[i - k])
    }
  }
  return false
}

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3))

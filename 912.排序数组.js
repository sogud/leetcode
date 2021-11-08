/*
 * @lc app=leetcode.cn id=912 lang=typescript
 *
 * [912] 排序数组
 */

// @lc code=start
function sortArray(nums) {
  const quickSort = (nums, left, right) => {
    if (left >= right) return
    const pivot = nums[left]
    let i = left
    let j = right
    while (i < j) {
      while (i < j && nums[j] >= pivot) j--
      nums[i] = nums[j]
      while (i < j && nums[i] <= pivot) i++
      nums[j] = nums[i]
    }
    nums[i] = pivot
    quickSort(nums, left, i - 1)
    quickSort(nums, i + 1, right)
  }
  const buddleSort = nums => {
    let i = 0
    let j = nums.length - 1
    while (i < j) {
      if (nums[i] > nums[j]) {
        ;[nums[i], nums[j]] = [nums[j], nums[i]]
      }
      i++
      j--
    }
  }
  // return nums.sort((a, b) => a - b);
  quickSort(nums, 0, nums.length - 1)

  return nums
}
// @lc code=end

console.log(sortArray([5, 2, 3, 1]))

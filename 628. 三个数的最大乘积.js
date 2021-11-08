// 给定一个整型数组，在数组中找出由三个数组成的最大乘积，并输出这个乘积。

// 示例 1:

// 输入: [1,2,3]
// 输出: 6
// 示例 2:

// 输入: [1,2,3,4]
// 输出: 24

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  nums = nums.sort((a, b) => b - a)

  return Math.max(
    nums[nums.length - 1] * nums[nums.length - 2] * nums[0],
    nums[0] * nums[1] * nums[2]
  )
}

console.log(maximumProduct([-100, 2, 3, 4]))

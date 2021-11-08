/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let start = 0
  let end = nums.length - 1

  while (start <= end) {
    const mid = Math.floor((end - start) / 2) + start
    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] > target) {
      end = mid - 1
    } else {
      start = mid + 1
    }
  }
  return -1
}

console.log(search((nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), (target = 7)))

/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 *
 * https://leetcode.cn/problems/sliding-window-maximum/description/
 *
 * algorithms
 * Hard (49.94%)
 * Likes:    1831
 * Dislikes: 0
 * Total Accepted:    350.2K
 * Total Submissions: 700.1K
 * Testcase Example:  '[1,3,-1,-3,5,3,6,7]\n3'
 *
 * 给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k
 * 个数字。滑动窗口每次只向右移动一位。
 *
 * 返回 滑动窗口中的最大值 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [1,3,-1,-3,5,3,6,7], k = 3
 * 输出：[3,3,5,5,6,7]
 * 解释：
 * 滑动窗口的位置                最大值
 * ---------------               -----
 * [1  3  -1] -3  5  3  6  7       3
 * ⁠1 [3  -1  -3] 5  3  6  7       3
 * ⁠1  3 [-1  -3  5] 3  6  7       5
 * ⁠1  3  -1 [-3  5  3] 6  7       5
 * ⁠1  3  -1  -3 [5  3  6] 7       6
 * ⁠1  3  -1  -3  5 [3  6  7]      7
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [1], k = 1
 * 输出：[1]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= nums.length <= 10^5
 * -10^4 <= nums[i] <= 10^4
 * 1 <= k <= nums.length
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  // 单调下降的队列，最大值就是对头元素
  const ans = [] //保存答案
  let indexQueue = [] //要维护的队列,队列中存的数组下标，不是数组元素
  for (let i = 0; i < nums.length; i++) {
    while (indexQueue.length && indexQueue[0] <= i - k) indexQueue.shift() //超出了k的窗口长度，弹出对头元素
    //进来的元素>=队尾元素，就将从队中元素弹出，他因为他永远不可能是答案
    while (indexQueue.length && nums[indexQueue[indexQueue.length - 1]] <= nums[i]) indexQueue.pop()

    indexQueue.push(i)
    // 从下标是k-1的时候就开始插入
    if (i >= k - 1) ans.push(nums[indexQueue[0]])
  }
  return ans
}
// @lc code=end

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3))

/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 *
 * https://leetcode-cn.com/problems/word-search/description/
 *
 * algorithms
 * Medium (46.14%)
 * Likes:    1339
 * Dislikes: 0
 * Total Accepted:    328.7K
 * Total Submissions: 709K
 * Testcase Example:  '[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]\n"ABCCED"'
 *
 * 给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false
 * 。
 *
 * 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word =
 * "ABCCED"
 * 输出：true
 *
 *
 * 示例 2：
 *
 *
 * 输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word =
 * "SEE"
 * 输出：true
 *
 *
 * 示例 3：
 *
 *
 * 输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word =
 * "ABCB"
 * 输出：false
 *
 *
 *
 *
 * 提示：
 *
 *
 * m == board.length
 * n = board[i].length
 * 1
 * 1
 * board 和 word 仅由大小写英文字母组成
 *
 *
 *
 *
 * 进阶：你可以使用搜索剪枝的技术来优化解决方案，使其在 board 更大的情况下可以更快解决问题？
 *
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const h = board.length,
    w = board[0].length //网格的长和宽

  const dfs = (i, j, k) => {
    // i,j是网格的坐标，k是单词的坐标
    // 如果单词的长度等于单词的坐标，说明已经匹配完成
    if (k === word.length) return true
    // 如果单词的坐标超出网格的范围，说明不可能匹配
    if (i < 0 || i >= h || j < 0 || j >= w) return false
    //  如果当前网格的值不等于单词的值，说明不可能匹配
    if (board[i][j] !== word[k]) return false

    // 将当前网格的值设置为空，避免重复匹配
    const tmp = board[i][j]
    board[i][j] = "#"
    // 对当前网格的上下左右四个方向进行搜索
    const res =
      dfs(i + 1, j, k + 1) || dfs(i - 1, j, k + 1) || dfs(i, j + 1, k + 1) || dfs(i, j - 1, k + 1)
    // 将当前网格的值恢复
    board[i][j] = tmp
    // 如果搜索结果为true，说明已经匹配完成，返回true
    return res
  }

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (dfs(i, j, 0)) return true
    }
  }
  return false
}
// @lc code=end

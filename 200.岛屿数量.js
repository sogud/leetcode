// 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。

// 岛屿总是被水包围，并且每座岛屿只能由水平方向或竖直方向上相邻的陆地连接形成。

// 此外，你可以假设该网格的四条边均被水包围。

//  

// 示例 1:

// 输入:
// 11110
// 11010
// 11000
// 00000
// 输出: 1
// 示例 2:

// 输入:
// 11000
// 11000
// 00100
// 00011
// 输出: 3
// 解释: 每座岛屿只能由水平和/或竖直方向上相邻的陆地连接而成。
/**
 * @param {character[][]} grid
 * @return {number}
 */
toZero = (i, j, grid) => {
  if (grid[i] === undefined || grid[i][j] === undefined || grid[i][j] === 0) return
  grid[i][j] = 0
  toZero(i + 1, j, grid)
  toZero(i - 1, j, grid)
  toZero(i, j - 1, grid)
  toZero(i, j + 1, grid)
}
var numIslands = function (grid) {
  let count = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        count++
        toZero(i, j, grid)
      }
    }
  }
  return count
}
console.log(numIslands([[1, 1, 0, 0, 0], [1, 1, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 1, 1]]))
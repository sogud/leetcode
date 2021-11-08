/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  if (!root) return []
  let printArr = []
  let stack = []
  stack.push({
    color: 'white',
    node: root
  })
  while (stack.length > 0) {
    const colorVal = stack.pop()
    let { color, node } = colorVal
    if (color === 'white') {
      stack.push({ color: 'gray', node: node })
      if (node.right) stack.push({ color: 'white', node: node.right })
      if (node.left) stack.push({ color: 'white', node: node.left })
    } else {
      printArr.push(node.val)
    }
  }
  return printArr
}

//颜色标记法，可应用于前 中 后 三种遍历方法。
// 根左右
// 左根右
// 左右根
console.log(inorderTraversal([1, null, 2, 3]))
// 给定一个二叉树，返回它的中序 遍历。

// 示例:

// 输入: [1,null,2,3]
//    1
//     \
//      2
//     /
//    3

// 输出: [1,3,2]
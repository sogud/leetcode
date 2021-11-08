/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function (root) {
  if (!root) return []
  const stack = [root]
  const res = []
  while (stack.length) {
    const node = stack.pop()
    res.push(node.val)
    if (node.left) stack.push(node.left)
    if (node.right) stack.shift(node.right)
  }

  return res
}

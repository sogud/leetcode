/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let stack = []
  tokens.forEach(item => {
    if (item == '+') {
      stack.push(stack.pop() + stack.pop())
    } else if (item == '-') {
      let prev = stack.pop()
      stack.push(stack.pop() - prev)
    } else if (item == '*') {
      stack.push(stack.pop() * stack.pop())
    } else if (item == '/') {
      let prev = stack.pop()
      stack.push(parseInt(stack.pop() / prev, 10))
    } else {
      stack.push(Number(item))
    }
  })
  return stack[0]
}
console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]))

// 说明：

// 整数除法只保留整数部分。
// 给定逆波兰表达式总是有效的。换句话说，表达式总会得出有效数值且不存在除数为 0 的情况。
// 示例 1：

// 输入: ["2", "1", "+", "3", "*"]
// 输出: 9
// 解释: ((2 + 1) * 3) = 9
// 示例 2：

// 输入: ["4", "13", "5", "/", "+"]
// 输出: 6
// 解释: (4 + (13 / 5)) = 6
// 示例 3：

// 输入: ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
// 输出: 22
// 解释: 
//   ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
// = ((10 * (6 / (12 * -11))) + 17) + 5
// = ((10 * (6 / -132)) + 17) + 5
// = ((10 * 0) + 17) + 5
// = (0 + 17) + 5
// = 17 + 5
// = 22

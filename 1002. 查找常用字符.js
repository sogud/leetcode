// 给定仅有小写字母组成的字符串数组 A，返回列表中的每个字符串中都显示的全部字符（包括重复字符）组成的列表。例如，如果一个字符在每个字符串中出现 3 次，但不是 4 次，则需要在最终答案中包含该字符 3 次。

// 你可以按任意顺序返回答案。

// 示例 1：

// 输入：["bella","label","roller"]
// 输出：["e","l","l"]
// 示例 2：

// 输入：["cool","lock","cook"]
// 输出：["c","o"]
/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function (A) {
  let res = [],
    word = A[0],
    slen = word.length
  for (let s of word) {
    // A.every(m => m.includes(s))
    console.log("commonChars -> A.every(m => m.includes(s))", A.every(m => m.includes(s)))
    if (A.every(m => m.includes(s))) {
      A = A.map(m => m.replace(s, ""))
      res.push(s)
    }
  }
  return res
}

// commonChars(["cool", "lock", "cook"])
console.log(commonChars(["cool", "lock", "cook"]))

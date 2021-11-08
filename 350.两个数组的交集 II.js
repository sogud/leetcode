/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// var intersect = function(nums1, nums2) {
//   nums1.sort((a, b) => a - b)
//   nums2.sort((a, b) => a - b)
//   let arr = []
//   let i = 0
//   let j = 0
//   while (i < nums1.length && j < nums2.length) {
//     if (nums1[i] == nums2[j]) {
//       arr.push(nums1[i])
//       i++
//       j++
//     } else if (nums1[i] > nums2[j]) {
//       j++
//     } else {
//       i++
//     }
//   }
//   return arr
// }
var intersect = function (nums1, nums2) {
  let arr = []
  nums1.forEach(item => {
    if (nums2.indexOf(item) != -1) {
      arr.push(item)
      nums2.splice(nums2.indexOf(item), 1)
    }
  })
  return arr
}
console.log(intersect([1, 2, 2, 1], [2]))

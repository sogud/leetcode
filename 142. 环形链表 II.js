/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 1.利用快慢指针来判断是否有环
// 2.找到交点之后,用一个新的慢指针从head出发,与旧的慢指针交点就是环的入口处,详见题解
var detectCycle = function (head) {
  let fast = head
  let slow1 = head
  if (!fast || !fast.next) return null
  while (true) {
    fast = fast.next.next
    slow1 = slow1.next
    if (slow1 === fast) {
      break
    }
  }
  fast = head // 将fast重置为新的慢指针
  while (fast !== slow1) {
    fast = fast.next
    slow1 = slow1.next
  }
  return fast
}

function ListNode(val) {
  this.val = val
  this.next = null
}

let head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)
head.next.next.next = new ListNode(4)
head.next.next.next.next = new ListNode(5)
head.next.next.next.next.next = new ListNode(6)
head.next.next.next.next.next.next = head.next

console.log(detectCycle(head))
var reverseList = function(head){
  let prve =null
  let cur = head
  while(cur){
    let next = cur.next
    cur.next = prve
    prve = cur
    cur = next
  }
  return prve
}
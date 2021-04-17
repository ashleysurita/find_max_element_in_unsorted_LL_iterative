class ListNode {
    constructor(value = 0, next = null) {
        this.value = value
        this.next = next
    }
}
        
/*
    - if it's empty return 0
    - if it only has 1 node, return that node value
    
    - set variable for the highest value
    - create a queue
    - go through queue,
        if the next value is higher then the head, update highest value
        if there's a next, add to the queue and keep searching
        if there's no next return value
    - return highest
*/

// 1 > 4 > 5 > 1
//             h

function findMax(head) {
    if(!head) return 0
    if(!head.next) return head.value
    
    let highest = head.value;
    let queue = [head.next]
    while(queue.length > 0){
        const curr = queue.shift()
        if(curr.value > highest) highest = curr.value
        if(curr.next) queue.push(curr.next)
    }    
    
    return highest
}

// Test Cases
var LL1 = new ListNode(1, new ListNode(4, new ListNode(5, new ListNode(1))))
var LL2 = new ListNode(7, new ListNode(1, new ListNode(5, new ListNode(1))))
var LL3 = new ListNode(-1, new ListNode(-3, new ListNode(-5, new ListNode(0, new ListNode(-11)))))
console.log(findMax(LL1)) // 5
console.log(findMax(LL2)) // 7
console.log(findMax(LL3)) // 0
console.log(findMax(new ListNode(1))) // 1

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function (l1, l2) {
    let stop = false
    let sum = []
    while (!stop) {
        n1 = l1 ? l1.val : 0
        n2 = l2 ? l2.val : 0

        // console.log(n1, n2)

        sum.push(n1 + n2)

        l1 = l1 ? l1.next : l1
        l2 = l2 ? l2.next : l2
        // console.log(l1, l2)

        if (!l1 && !l2) stop = true
    }
    // console.log(sum)

    let t1 = null
    let answer = null
    let nextAdd = false
    sum.forEach((val, index) => {
        if (nextAdd) val += 1
        nextAdd = val > 9
        if (nextAdd) val -= 10
        // console.log(val, !!resp)

        if (!index) {
            t1 = new ListNode(val)
            answer = t1
        } else {
            t1.next = new ListNode(val)
            t1 = t1.next
        }
    })

    if (nextAdd) {
        t1.next = new ListNode(1)
    }

    // console.log(answer)
    return answer
};
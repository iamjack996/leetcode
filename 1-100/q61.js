/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    let array = []
    while (head) {
        array.push(head.val)
        head = head.next
    }

    if (array.length < 1) {
        const headNode = new ListNode(undefined)
        return headNode.next
    }

    if (k > array.length) {
        k = k % array.length
    }

    while (k > 0) {
        let point = array.pop()
        array.unshift(point)
        k--
    }

    array.forEach((val, index) => {
        if (!index) {
            t1 = new ListNode(val)
            answer = t1
        } else {
            t1.next = new ListNode(val)
            t1 = t1.next
        }
    })

    return answer
};
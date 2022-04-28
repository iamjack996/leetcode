/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    let all = []
    while (head) {
        all.push(head.val)
        head = head.next
    }

    let uniqueArray = [...new Set(all)]

    if (uniqueArray.length < 1) {
        const headNode = new ListNode(undefined)
        return headNode.next
    }
    uniqueArray.forEach((val, index) => {
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
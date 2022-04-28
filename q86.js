/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
    let all = []
    while (head) {
        all.push(head.val)
        head = head.next
    }
    if (all.length < 1) {
        const headNode = new ListNode(undefined)
        return headNode.next
    }

    let toBacks = []
    for (i = 0; i < all.length; i++) {
        if (all[i] >= x) {
            toBacks.push(all[i])
            all.splice(i, 1)
            i--
        }
    }

    toBacks.forEach(num => all.push(num))

    all.forEach((val, index) => {
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
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
    let all = []
    while (head) {
        all.push(head.val)
        head = head.next
    }

    if (left != right) {
        let leftIndex = left - 1
        let count = right - left + 1

        let toReverse = all.splice(leftIndex, count)
        toReverse.reverse()

        for (i = 0; i < all.length; i++) {
            if (leftIndex == 0 || i + 1 == leftIndex) {
                let index = leftIndex
                while (toReverse.length) {
                    all.splice(index, 0, toReverse[0])
                    toReverse.shift()
                    index++
                }
            }
        }
        if (!all.length) all = toReverse
    }

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
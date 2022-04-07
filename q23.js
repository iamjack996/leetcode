/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    let all = []

    lists.forEach(link => {
        while (link) {
            all.push(link.val)
            link = link.next
        }
    })
    all.sort(function (a, b) { return a - b })
    if (all.length < 1) {
        const headNode = new ListNode(undefined)
        // console.log(headNode.next)
        return headNode.next
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
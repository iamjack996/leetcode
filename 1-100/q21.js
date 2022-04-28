/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    if (!list1 && !list2) return list1
    let all = []
    node1 = list1
    node2 = list2
    while (node1) {
        all.push(node1.val)
        node1 = node1.next
    }
    while (node2) {
        all.push(node2.val)
        node2 = node2.next
    }
    all.sort(function (a, b) { return a - b })
    // console.log(all)

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
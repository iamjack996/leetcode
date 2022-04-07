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
var reverseKGroup = function (head, k) {
    let array = []
    while (head) {
        array.push(head.val)
        head = head.next
    }
    // console.log(array)

    if (array.length < 1) {
        const headNode = new ListNode(undefined)
        return headNode.next
    }

    let chunked = []
    for (let i = 0; i < array.length; i += k) {
        chunked.push(array.slice(i, i + k))
    }
    // console.log(chunked)

    let reverseArr = []
    chunked.forEach(arr => {
        if (arr.length == k) reverseArr.push(arr.reverse())
        else reverseArr.push(arr)
    })
    // console.log(reverseArr)

    reverseArr.forEach((arr, index1) => {
        arr.forEach((val, index2) => {
            if (!index1 && !index2) {
                t1 = new ListNode(val)
                answer = t1
            } else {
                t1.next = new ListNode(val)
                t1 = t1.next
            }
        })
    })
    return answer
};
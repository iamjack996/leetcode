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

    let repeats = []
    let reIndexs = []
    all.forEach((num) => {
        if (repeats.includes(num)) {
            all.forEach((num2, index) => {
                if (num == num2) {
                    reIndexs.push(index)
                }
            })
        } else {
            repeats.push(num)
        }
    })

    let indexs = [...new Set(reIndexs)]

    indexs.sort(function (a, b) { return b - a })
    indexs.forEach(index => {
        all.splice(index, 1)
    })

    if (all.length < 1) {
        const headNode = new ListNode(undefined)
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
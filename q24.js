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
var swapPairs = function (head) {

    let nums = []
    while (head) {
        nums.push(head.val)
        head = head.next
    }

    for (i = 0; i < nums.length; i += 2) {
        if (nums[i + 1] != undefined) {
            let number = nums[i + 1]
            nums[i + 1] = nums[i]
            nums[i] = number
        }
    }
    // console.log(nums)

    if (nums.length < 1) {
        const headNode = new ListNode(undefined)
        return headNode.next
    }
    nums.forEach((val, index) => {
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
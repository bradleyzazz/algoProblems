/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head) {
    let stack = [];
    let curr = head;

    while (curr) {
        if (curr.child) {
            if (curr.next) {
                let child = curr.child;
                while (child.next !== null) {
                    child = child.next;
                }
                child.next = curr.next;
                curr.next.prev = child
            }
            curr.next = curr.child;
            curr.next.prev = curr;
            curr.child = null
        }
        curr = curr.next;
    }
    return head
};
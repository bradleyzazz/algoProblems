/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var widthOfBinaryTree = function (root) {
    const queue = [{node: root, pos: 0}];
    let maxWidth = 0;

    while (queue.length) {
        let level = queue.length;
        let max = 0;
        let min = Number.MAX_VALUE;

        for (let i = 0; i < level; i++) {
            let current = queue.pop()

            min = Math.min(min, current.pos);
            max = Math.max(max, current.pos);

            if (current.node.left) {
                queue.unshift({
                    node: current.node.left,
                    pos: current.pos * 2 + 1
                })
            }
            if (current.node.right) {
                queue.unshift({node: current.node.right, pos: current.pos * 2 + 2})
            }
        }
        
        const levelWidth = level === 1 ? 1 : max - min + 1;
        maxWidth = Math.max(maxWidth, levelWidth)
    }

    return maxWidth;
};
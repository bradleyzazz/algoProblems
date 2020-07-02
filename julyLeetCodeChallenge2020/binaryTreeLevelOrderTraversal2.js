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
 * @return {number[][]}
 */

const levelOrderBottom = (root) => {
    let layers = [];
    
    const getLayers = (node, depth) => {
        if (!node) {
            return null;
        }
        
        if (layers[depth]) {
            layers[depth].push(node.val)
        } else {
            layers[depth] = [node.val];
        }
        
        depth++;
        
        getLayers(node.left, depth);
        getLayers(node.right, depth);
    }
    
    getLayers(root, 0);
    return layers.reverse();
    
}
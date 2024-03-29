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
 * @return {boolean}
 */
var isSymmetric = function(root) {
  function isMirror(p, q) {
    if (!p && !q ) return true;
    if (!p || !q ) return false;
    return (p.val === q.val) && isMirror(p.left, q.right) && isMirror(p.right, q.left);
  }  
    return isMirror(root, root);
};
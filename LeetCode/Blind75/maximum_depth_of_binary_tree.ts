class TreeNode {
  constructor(
    public val = 0,
    public left: null | TreeNode = null,
    public right: TreeNode | null = null
  ) {}
}

class Solution {
  maxDepth(root: TreeNode | null): number {
    if (root === null) return 0;

    let rightDepth = this.maxDepth(root.right);
    let leftDepth = this.maxDepth(root.left);

    return Math.max(rightDepth, leftDepth) + 1;
  }
}

export {};

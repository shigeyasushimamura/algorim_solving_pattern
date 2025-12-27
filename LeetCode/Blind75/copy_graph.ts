class Node {
  constructor(public val = 0, public neighbors: Node[] = []) {
    this.val = val;
    this.neighbors = neighbors;
  }
}

class Solution {
  /**
   * @param {Node} node
   * @return {Node}
   */
  cloneGraph(node: Node) {
    // 1. 空のグラフの場合は null を返す
    if (!node) return null;

    // 2. 「元のノード」と「コピーされたノード」を紐付ける Map を作成
    // これが既訪問リスト（Visited List）の役割も果たす
    const oldToNew = new Map();

    const dfs = (currNode: Node) => {
      // すでにコピー済みであれば、そのコピーを返す（無限ループ防止）
      if (oldToNew.has(currNode)) {
        return oldToNew.get(currNode);
      }

      // --- 新しくノードをコピーするフェーズ ---

      // 3. 自分のコピーを作成（隣人リストはまだ空）
      const copy = new Node(currNode.val);
      oldToNew.set(currNode, copy);

      // 4. 元のノードの隣人を再帰的に探索し、コピーの隣人リストに追加していく
      for (let neighbor of currNode.neighbors) {
        copy.neighbors.push(dfs(neighbor));
      }

      return copy;
    };

    return dfs(node);
  }
}

export {};

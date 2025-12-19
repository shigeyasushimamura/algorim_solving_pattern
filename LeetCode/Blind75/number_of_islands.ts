/**
 * @param grid 2次元グリッド ('1'=陸地, '0'=水)
 * @returns 島の数
 */
function numIsLands(grid: string[][]): number {
  if (!grid || grid.length === 0) return 0;

  let isLandCount = 0;
  const rows = grid.length;
  const cols = grid[0].length;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      isLandCount++;
      dfs(grid, r, c);
    }
  }
  return isLandCount;
}

/**
 * つながっている陸地を探索して、'0'に変える
 */
function dfs(grid: string[][], r: number, c: number): void {
  const rows = grid.length;
  const cols = grid[0].length;

  // ベースケース
  if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === "0") {
    return;
  }

  grid[r][c] = "0";

  dfs(grid, r - 1, c);
  dfs(grid, r + 1, c);
  dfs(grid, r, c - 1);
  dfs(grid, r, c + 1);
}

/**
 * 型安全なキュー(タプルの配列)を使って実装する
 */
function numIslandsBFS(grid: string[][]): number {
  if (!grid || grid.length === 0) return 0;

  let islandCount: number = 0;
  const rows: number = grid.length;
  const cols: number = grid[0].length;

  // 四方向への移動用ベクトル
  const directions: [number, number][] = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === "1") {
        islandCount++;

        // BFS開始
        const queue: [number, number][] = [[r, c]];
        grid[r][c] = "0"; // 訪問済みにする

        while (queue.length > 0) {
          const [currR, currC] = queue.shift()!; // shift()はundefinedを返す可能性があるため ! を付与

          for (const [dr, dc] of directions) {
            const nextR = currR + dr;
            const nextC = currC + dc;

            if (
              nextR >= 0 &&
              nextR < rows &&
              nextC >= 0 &&
              nextC < cols &&
              grid[nextR][nextC] === "1"
            ) {
              grid[nextR][nextC] = "0"; // 陸地を沈める
              queue.push([nextR, nextC]);
            }
          }
        }
      }
    }
  }

  return islandCount;
}

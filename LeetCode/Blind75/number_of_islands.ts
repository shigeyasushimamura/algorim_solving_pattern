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

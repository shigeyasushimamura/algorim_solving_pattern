class Solution {
  /**
   * @param {number[][]} intervals
   * @param {number[]} newInterval
   * @return {number[][]}
   */
  insert(intervals: number[][], newInterval: number[]): number[][] {
    let result = [];
    let i = 0;
    const n = intervals.length;

    // 1. 左側の処理（重ならない要素）
    // 現在の区間の「終わり」が、新しい区間の「始まり」より小さい間は、そのまま追加
    while (i < n && intervals[i][1] < newInterval[0]) {
      result.push(intervals[i]);
      i++;
    }

    // 2. 重なり（マージ処理）
    // ご提示のアルゴリズムの核心部分です。
    // 現在の区間の「始まり」が、新しい区間の「終わり」以下である限り、重なっています。
    while (i < n && intervals[i][0] <= newInterval[1]) {
      // startは小さい方、endは大きい方を取って、newIntervalを巨大化させます
      newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
      newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
      i++;
    }
    // マージし終わった（巨大化した）newIntervalを追加
    result.push(newInterval);

    // 3. 右側の処理（重ならない要素）
    // 残りの要素は新しい区間より後ろにあるので、そのまま追加
    while (i < n) {
      result.push(intervals[i]);
      i++;
    }

    return result;
  }
}

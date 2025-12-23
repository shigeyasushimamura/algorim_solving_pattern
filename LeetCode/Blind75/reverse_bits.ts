class Solution {
  /**
   * @param {number} n - a positive integer
   * @return {number} - a positive integer
   */
  reverseBits(n: number): number {
    let result = 0;
    for (let i = 0; i < 32; i++) {
      // resultを左にずらして、nの右端のビットを足す
      result = (result << 1) | (n & 1);

      // n自体を1ビットずらして更新する
      n >>>= 1;
    }
    return result >>> 0;
  }
}

export {};

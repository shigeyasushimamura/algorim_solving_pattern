class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  rob(nums: number[]) {
    const n = nums.length;

    if (n == 1) {
      return nums[0];
    }

    const dp = new Array(n);

    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);

    for (let i = 2; i < n; i++) {
      dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
    }

    return dp[n - 1];
  }

  /**
   * 空間計算量O(1)
   * @param nums
   */
  robO1(nums: number[]) {
    const n = nums.length;

    if (n == 0) return 0;
    if (n == 1) return nums[0];

    let prev2 = nums[0];
    let prev1 = Math.max(nums[0], nums[1]);

    for (let i = 2; i < n; i++) {
      const current = Math.max(prev1, prev2 + nums[i]);

      prev1 = current;
      prev2 = prev1;
    }

    return prev1;
  }
}

export {};

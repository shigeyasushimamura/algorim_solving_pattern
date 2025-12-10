class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  canJumpGreedy(nums: number[]) {
    let maxReach = nums[0];

    for (let i = 0; i < nums.length; i++) {
      if (maxReach < i) {
        return false;
      }

      maxReach = Math.max(maxReach, i + nums[i]);

      // if(maxReach === nums.length-1){
      //     return true;
      // }
    }

    return true;
  }
  canJumpDP(nums: number[]) {
    const n = nums.length;
    // 1. DPテーブルを作る（初期値は全部false）
    const dp = new Array(n).fill(false);

    // 2. スタート地点は到達可能
    dp[0] = true;

    // 3. 全ての地点 i について調べる
    for (let i = 1; i < n; i++) {
      // i より前の全ての j をチェックする（ここが重い！）
      for (let j = 0; j < i; j++) {
        // 「jまで到達できて」かつ「jからiまで飛べる」なら
        if (dp[j] === true && j + nums[j] >= i) {
          dp[i] = true;
          break; // iに行けることが分かったら、これ以上jを探さなくていい
        }
      }
    }

    // 最後のマスがTrueになっているか
    return dp[n - 1];
  }
}

export {};

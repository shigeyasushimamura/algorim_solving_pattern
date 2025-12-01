class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  maxSubArray(nums: number[]) {
    let sum = nums[0];
    let curSum = 0;
    for (let i = 0; i < nums.length; i++) {
      curSum += nums[i];
      sum = Math.max(sum, curSum);

      if (curSum < 0) curSum = 0;
    }
    return sum;
  }
}

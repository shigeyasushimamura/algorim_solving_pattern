class Solution {
  climbStairs(n: number) {
    if (n == 1) return 1;
    if (n == 2) return 2;

    let oneStepBefore = 2;
    let twoStepBefore = 1;
    let allWays = 0;
    for (let i = 3; i <= n; i++) {
      allWays = oneStepBefore + twoStepBefore;

      oneStepBefore = allWays;
      twoStepBefore = oneStepBefore;
    }
    return allWays;
  }
}

export {};

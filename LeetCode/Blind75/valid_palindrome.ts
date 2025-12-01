// 時間計算量O(1)
// 空間計算量O(n)
class SolutionStack {
  isPalindrome(s: string): boolean {
    // 前処理
    const cleanStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");

    const stack: string[] = [];
    const len = cleanStr.length;
    const mid = Math.floor(len / 2);

    for (let i = 0; i < mid; i++) {
      stack.push(cleanStr[i]);
    }

    const startIndex = len % 2 === 0 ? mid : mid + 1;

    for (let i = startIndex; i < len; i++) {
      const charFromStack = stack.pop();
      if (charFromStack !== cleanStr[i]) {
        return false;
      }
    }
    return true;
  }
}

// 時間計算量O(1)
// 空間計算量O(1)
// Two Pointerを利用
class SolutionPointers {
  isPalindrome(s: string): boolean {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
      while (left < right && !this.isAlpahnumeric(s[left])) {
        left++;
      }
      while (left < right && !this.isAlpahnumeric(s[right])) {
        right--;
      }

      if (s[left].toLowerCase() !== s[right].toLowerCase()) {
        return false;
      }

      left++;
      right--;
    }
    return true;
  }

  private isAlpahnumeric(char: string): boolean {
    return /^[a-z0-9]$/i.test(char);
  }
}

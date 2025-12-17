class Solution {
  groupAnagrams(strs: string[]): string[][] {
    // ハッシュマップ
    const map: Record<string, string[]> = {};

    for (let s of strs) {
      let key = s.split("").sort().join("");

      if (!map[key]) {
        map[key] = [];
      }

      map[key].push(s);
    }

    return Object.values(map);
  }
}

export {};

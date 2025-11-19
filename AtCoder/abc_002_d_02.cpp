#include <bits/stdc++.h>
using namespace std;
int main() {
  int n, m;
  cin >> n >> m;
  
  // 隣接行列
  vector<vector<bool>> know(n, vector<bool>(n, false));
  for (int i = 0; i < m; i++) {
    int x, y;
    cin >> x >> y;
    x--; y--;  // 0-indexed
    know[x][y] = true;
    know[y][x] = true;
  }
  
  int max_clique = 0;
  
  // 全ての部分集合を試す (2^n通り)
  for (int bit = 0; bit < (1 << n); bit++) {
    vector<int> members;
    for (int i = 0; i < n; i++) {
      if (bit & (1 << i)) {
        members.push_back(i);
      }
    }
    
    // この部分集合がクリークか判定
    bool is_clique = true;
    for (int i = 0; i < members.size(); i++) {
      for (int j = i + 1; j < members.size(); j++) {
        if (!know[members[i]][members[j]]) {
          is_clique = false;
          break;
        }
      }
      if (!is_clique) break;
    }
    
    if (is_clique) {
      max_clique = max(max_clique, (int)members.size());
    }
  }
  
  cout << max_clique << endl;
  
  return 0;
}
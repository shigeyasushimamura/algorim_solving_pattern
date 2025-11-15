// https://atcoder.jp/contests/abc128/tasks/abc128_c


// 計算量の評価

// N ≤ 10 なので、スイッチの状態は 2^N = 最大1024通り
// 各状態について、M個の電球すべてが条件を満たすかチェック
// 各電球のチェックは O(kᵢ) ≈ O(N) = O(10)

// 全体の計算量: O(2^N × M × N) = O(1024 × 10 × 10) = O(102,400)

#include <bits/stdc++.h>
using namespace std;


int main() {
  int N,M;
  cin >> N >> M;
  
  
  vector<vector<int>> switches(M);
  vector<int> p(M);
  
  
  for(int i=0;i<M;i++){
    int k;
    cin >> k;
    switches[i].resize(k);
    for(int j=0;j<k;j++){
      cin >> switches[i][j];
      switches[i][j]--;  // 0-indexに変換
    }
  }
  
  for(int i=0;i<M;i++){
    cin >> p[i];
  }
  
  int count = 0;
  
  // 全探索: 0 ~ 2^N - 1    
  // ビットシフト <<
  // 例 
  // const N = 5;
  // 1 << N は 2^5 = 32
const totalStates = 1 << N; // 結果: 32
    for (int state = 0; state < (1 << N); state++) {
        bool all_lit = true;
        
        // 各電球をチェック
        for (int i = 0; i < M; i++) {
            int on_count = 0;
            
            // この電球に接続されたスイッチのON個数を数える
            for (int s : switches[i]) {
                if (state & (1 << s)) {
                    on_count++;
                }
            }
            
            // 条件を満たさなければこの状態はNG
            if (on_count % 2 != p[i]) {
                all_lit = false;
                break;
            }
        }
        
        if (all_lit) count++;
    }
    
    cout << count << endl;
    
    return 0;


  
}

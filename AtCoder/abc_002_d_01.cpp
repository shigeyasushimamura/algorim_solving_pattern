#include <bits/stdc++.h>
using namespace std;


vector<vector<bool>> know;
int n;


int backtrack(int idx, vector<int>& current_clique){
    int max_size = current_clique.size();


    for (int i = idx; i < n; i++) {
    // i番目の議員を追加できるか？
    bool can_add = true;
    for (int member : current_clique) {
      if (!know[i][member]) {
        can_add = false;
        break;
      }
    }
    
    if (can_add) {
      current_clique.push_back(i);  // push
      max_size = max(max_size, backtrack(i + 1, current_clique));
      current_clique.pop_back();  // pop
    }
  }
  
  return max_size;

}



int main() {
  int n,m;
  cin >> n >> m;
  
  // 隣接行列
  know.assign(n,vector<bool>(n,false));
  for(int i=0;i<m;i++){
    int x,y;
    cin >> x >> y;
    x--; y--;
    know[x][y] = true;
    know[y][x] = true;
  }

  vector<int> current_clique;
  int max_clique = backtrack(0,current_clique);

  cout << max_clique << endl;


  return 0;
}

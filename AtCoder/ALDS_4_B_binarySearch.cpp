#include <bits/stdc++.h>
using namespace std;



// 二分探索
int binarySearch(const vector<int>& A, int n, int key){
    int left=0;
    int right = n;

    while(left <right){
        int mid = (left + right) /2;

        if(A[mid]==key){
            return 1;
        }else if(key <A[mid]){
            right = mid;
        }else {
            left = mid + 1;
        }
    }
    return 0;
}





int main(){

    int n;
    cin >> n;
    vector<int> S(n);
    for(int i=0;i<n;i++){
        cin >> S[i];
    }


    int q;
    cin >> q;
    int count = 0;

    for(int i=0;i<q;i++){
        int t_element;
        cin >> t_element;

        if(binarySearch(S,n,t_element)){
            count++;
        }
    }


    cout << count << endl;

    return 0;

}
#include<stdio.h>
//  首先读入两个数字 n 和 m，n 的大小不会超过 10，m 的大小都不会超过 10000；
// 接下来读入 n 个各不相同的正整数，输出 1 到 m 中，有哪些数字无法被这 n 个正整数中任意的一个整除。
int main()  {
	int n, m;
	scanf("%d%d", &n,&m);
	// 存储n个不同的正整数 
	int arr1[n];
	// 存储结果 
	int arr2[m];
	// 记录有多少个结果 
	int x = 0;
	// 读取 n 个数成功 
	for(int i = 0; i < n; i++) {
		scanf("%d", &arr1[i]);
	}
	// m个数循环一遍 
	for(int k = 0; k < m; k++) {
		// n个数进行取余 
		for(int i = 0; i < n; i++) {
			if((k + 1) % arr1[i] != 0) {
				//printf("%d", k + 1);
				arr2[x] = k + 1; 
				x++;
				i = n;
			} 
		}
	}
	for(int i = 0; i < x; i++) {
		printf("%d\n",arr2[i]);
	}
	//printf("%d", x);
	return 0; 
} 

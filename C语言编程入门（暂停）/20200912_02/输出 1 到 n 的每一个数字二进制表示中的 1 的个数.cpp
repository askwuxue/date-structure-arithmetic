#include<stdio.h>

int main() {
	// 读入一个整数 n 不大于1000 
	int n;
	scanf("%d",&n);
	int arr[n];
	// 0 的二进制表示中1的个数为0 
	arr[0] = 0;
	for(int i = 1; i <= n; i++) {
		// 二进制数中1的格式等于 相邻两数相与结果的数的二进制中1的个数加1
		// arr[1] = arr[1 & 0] + 1 ==> arr[0] +  1 相与数的性质 
		// y = x & (x - 1) ==> f[y] = f[x & (x - 1)] + 1
		arr[i] = arr[i & (i -1)] + 1; 
	}
	for(int i = 0; i <= n; i++) {
		if( i != 0) printf(" ");
		printf("%d", arr[i]);
	} 
	return 0; 
}

#include<stdio.h>

int main(){
	int i, k;
	// 控制行数 
	for(i = 1; i < 10; i++) {
		// 控制列数 
		for(k = 1; k <= i; k++) {
			// 输出的格式 
			printf("%d * %d = %d\t", k, i, k*i);
		}
		// 换行 
		printf("\n");
	}
	return 0;
}

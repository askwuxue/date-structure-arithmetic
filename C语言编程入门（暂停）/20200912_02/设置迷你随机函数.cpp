#include<stdio.h>
#include<stdlib.h>
#include<time.h>

int main() {
	// 设计一个循环过程，循环 100 次，以不太明显的规律输出 1～100 中的每个数字。 
	for(int i = 0; i < 100; i++) {
		// 设置随机种子 如果随机种子不变 生成的随机数不变 是常数  
		//srand(time(0));
		if (i < 100) { 
			printf("%d\t", rand());
		}
	
	}
	return 0;
} 

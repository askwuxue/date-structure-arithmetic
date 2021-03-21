#include<stdio.h>

int main() {
	int a;
	// 计算a变量占用字节数 
	printf("%d\n",sizeof(a));
	// 计算整型元素占用字节数
	printf("%d\n",sizeof(int));
	
	
	// 输出变量的内存地址    %p
	int b; 
	printf("%p\n",&b);
	return 0; 
	 
} 

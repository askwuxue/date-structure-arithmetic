#include<stdio.h>

int main() {
	// 格式：\033[属性代码{; 属性代码...}m 输出内容\033[0m
	// 0 代表关闭所有属性
	// 1 代表高亮 / 粗体
	// 4 代表下划线
	// 33 代表黄色
	// 在window上无法支持 
	printf("\033[1;4,33mhello world\033[0m");
	return 0;
} 

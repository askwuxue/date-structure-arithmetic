#include<stdio.h>

int main() {
	char str[12] = "123.45";
	char str1[100];
	double sum;
	// sscanf 函数将字符串转换成 整型，浮点型等类型  第一个参数 字符数组 第二个参数 要转换的类型 第三个参数
	// 用来存储转换后的变量名 要对应起来 
	sscanf(str, "%lf", &sum);
	// sprintf 函数将其他数据类型转换为字符串类型 
	sprintf(str1, "123");
	
	// 输出保留几位小数 ，使用“%.xlf” 
	printf("%.1lf\n", sum);
	
	printf("%s",str1);
	return 0;
}

 

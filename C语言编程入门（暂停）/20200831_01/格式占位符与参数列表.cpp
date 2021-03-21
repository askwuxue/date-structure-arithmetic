#include<stdio.h>

int main() {
	int a = 32, b = 78;
	// "%d + %d = %d\n" 叫做格式控制字符串 %d是整型的格式占位符 %f 小数形式的格式占位符 %s 字符串的 
	//  a, b, a + b, 叫做参数列表，没一项对应一个格式占位符要输出的内容 
	printf("%d + %d = %d\n", a, b, a + b);
	return 0;
}

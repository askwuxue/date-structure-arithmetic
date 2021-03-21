#include<stdio.h>
#include<stdlib.h>
#include<time.h>

int main() {
	// m 落在圆内的次数  n 落在圆外的次数 
	int m = 0 , n = 0;
	for(int i = 0; i < 100000000; i++) {
		// 随机生成两个小于等于1的值 作为直角三角形的两边 求斜边 斜边大于 > 1 点落在圆外 
		double x = 1.0 * rand() / RAND_MAX;
		double y = 1.0 * rand() / RAND_MAX;
		if (x  * x + y * y <= 1) m++;
		n++;
	}
	printf("π近似等于: %lf\n", 4.0 * m / n);
	return 0;
} 

#include<stdio.h>

//数据中给出了 1989 年 11 月 20 日这个日期，然后问你 20 天后的日期是多少
int main() {
	// 存储输入的年月日及 N 天后 
	int y, m, d, n;
	scanf("%d%d%d", &y,&m,&d);
	scanf("%d", &n);
	// while 循环解决
	for(int i = 0; i < n; i++) {
		// 循环n天，每过一天，天数加1 
		d++;
		switch(m) {
			case 1:
			case 3:
			case 5:
			case 7:
			case 8:
			case 10:
			case 12: {
				if(d > 31) d = 1, m++;
				if(m == 13) m = 1, y++;
				break;
			}
			case 4:
			case 6:
			case 9:
			case 11: {
				if(d > 30) d = 1, m++;
				break;
			}
			case 2:
				// 判断闰年 
				if((y % 4 == 0 && y % 100 != 0) || y % 400 == 0) {
					if ( d > 29) d = 1, m++;
				}
				else {
					if(d > 28) d = 1, m++;
				}
		}
	}
	printf("%d天后的日期是：%d年%d月%d日",n,y,m,d); 
	return 0;
} 

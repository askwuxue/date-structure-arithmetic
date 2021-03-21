#include<stdio.h>
int main() {
	int a;
	int number = 2;
	scanf("%d", &a);
	// 先默认输入的是正整数 
	if(a < 10) {
		printf("输入的数为1位数");
	} else {
		
		 for(int i = 0; i< a; i++) {
		 	if (a/10 >= 10) {
		 		a = a/10;
		 		number++;
			 } else {
			 	break;
			 }
			
		 }
		 printf("%d",number);
	}
}

#include<stdio.h>

int main() {
	char str[12] = "hello word";
	int i = 0;
	if(str[i] != "\0") {
		printf("%c\n", str[i]);
		i++;
	}
	return 0;
} 

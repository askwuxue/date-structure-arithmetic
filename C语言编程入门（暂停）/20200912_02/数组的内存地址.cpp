#include<stdio.h>

int main() {
	int arr[100];
	printf("arr[0] = %p\n", &arr[0]);
	printf("arr[1] = %p\n", &arr[1]);
	printf("   arr = %p\n", arr);
	return 0;
} 

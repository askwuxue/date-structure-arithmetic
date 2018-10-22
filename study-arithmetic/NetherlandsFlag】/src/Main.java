public class Main {

    public static void main(String[] args) {
	// write your code here
        int[] arr = new int[]{1,5,1,3,4,6,8,4,12,1,5,6,5};
    }
}

class NetherlandsFlag {
    public static void partition(int[] arr, int L, int R, int num) {
        int less = L -1;
        int right = R + 1;
        int curr = L;
        while (curr < right) {
            if (arr[curr] < num) {
                // 交换 less + 1 与num curr++
                swap(arr, arr[++less], curr++);
                // 交换 right-- 与num curr不动
            } else if (arr[curr] > num) {
                swap(arr, arr[--right], curr);
            } else {
                curr++;
            }
        }
    }

    private static void swap(int[] arr, int i, int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}

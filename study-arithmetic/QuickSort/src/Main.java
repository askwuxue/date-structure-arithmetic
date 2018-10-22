public class Main {

    public static void main(String[] args) {
	// write your code here
    }
}

class QuickSort {
    public static void quickSort (int[] arr, int L, int R) {
        if (L < R) {
            // 交换随机数与数组中最后一个数
            swap(arr, (int) Math.random() * (R - L + 1), R);
            int p[] = partition(arr, L, R);
            quickSort(arr, L, p[0] - 1);
            quickSort(arr, p[0] + 1, R);
        }
    }

    public static int[] partition (int[] arr, int L, int R) {
        int less = L - 1;
        int more = R;
        while (R < more) {
            if (arr[L] < arr[R]) {
                swap(arr, ++less, L++);
            } else if (arr[L] > arr[R]) {
                swap(arr, --more, L);
            } else {
                L++;
            }
        }
        swap(arr, more, R);
        return new int[]{less + 1, more};
    }
    
    public static void swap(int[] arr, int i, int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}

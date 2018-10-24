import java.util.ArrayList;
import java.util.Arrays;

public class Main {

    public static void main(String[] args) {
	// write your code here
        int[] arr = new int[] {1,5,6,2,0,9};
        QuickSort qs = new QuickSort();
        qs.quickSort(arr);
//        for (int i = 0; i < arr.length; i++) {
//            System.out.print(arr[i]);
//        }
        System.out.println(Arrays.toString(arr));
    }
}

class QuickSort {
    public static void quickSort(int[] arr) {

        if (arr == null || arr.length < 2) {
            return;
        }
        quickSort(arr, 0, arr.length - 1);
    }

    public static void quickSort(int[] arr, int L, int R) {
        if (L < R) {
            swap(arr, L + (int)Math.random() * (R - L + 1), R);
            int[] p = partition(arr, L, R);
            quickSort(arr, 0, p[0] - 1);
            quickSort(arr, p[1] + 1, R);
        }
    }

    // 进行partition
    public static int[] partition(int[] arr, int L, int R) {
        int less = L - 1;
        int more = R;
        while (L < more) {
            if (arr[L] < arr[R]) {
                swap(arr, ++less, L++);
            } else if (arr[L] > arr[R]) {
                swap(arr, --more, L);
            } else {
                L++;
            }
        }
        swap(arr, more, R);
        return new int[] {less + 1, more};
    }

    public static void swap(int[] arr, int i, int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}

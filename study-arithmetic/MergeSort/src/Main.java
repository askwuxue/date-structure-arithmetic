import java.util.Arrays;
public class Main {

    public static void main(String[] args) {
        //
        int testTime = 500000;
        int maxSize = 100;
        int maxValue = 100;
        boolean succeed = true;
        for (int i = 0; i < testTime; i++) {
            int[] arr1 = generateRandomArray(maxSize, maxValue);
            int[] arr2 = copyArray(arr1);
            mergeSort(arr1);
            comparator(arr2);
            if (!isEqual(arr1, arr2)) {
                succeed = false;
                printArray(arr1);
                printArray(arr2);
                break;
            }
        }
        System.out.println(succeed ? "Nice!" : "Fucking fucked!");

//        int[] arr = generateRandomArray(maxSize, maxValue);
//        printArray(arr);
//        mergeSort(arr);
//        printArray(arr);
    }

    public static void mergeSort(int[] arr) {
        if (arr == null || arr.length < 2) return;
        // 归并排序
        mergeSort(arr, 0, arr.length - 1);
    }

    // 归并排序
    public static void mergeSort(int[] arr, int l, int r) {
        // 一个元素
        if (r == l) return;
        // 中间元素
        int mid = l + (r - l) / 2;
        // 递归
        mergeSort(arr, l, mid);
        mergeSort(arr, mid + 1, r);
        // 归并
        merge(arr, l, mid, r);
    }

    // 归并
    public static void merge(int arr[], int l, int mid, int r) {
        //申请临时空间
        int[] help = new int[r - l + 1];
        int i = 0;
        // 定义左右指针
        int p1 = l;
        int p2 = mid + 1;
        // 如果左右都不越界
        while (p1 <= mid && p2 <= r) {
            help[i++] = arr[p1] < arr[p2] ? arr[p1++] : arr[p2++];
        }
        // 必然是左边或者右边越界
        while(p1 <= mid) {
            help[i++] = arr[p1++];
        }

        while(p2 <= r) {
            help[i++] = arr[p2++];
        }

        // 将临时数组拷贝回元素组中
        for(int j = 0; j < help.length; j++) {
            arr[l + j] = help[j];
        }
    }

    // 一个绝对正确的方法进行排序
    public static void comparator(int[] arr) {
        Arrays.sort(arr);
    }

    // 随机数组生成器
    public static int[] generateRandomArray(int maxSize, int maxValue) {
        int[] arr = new int[(int) ((maxSize + 1) * Math.random())];
        for (int i = 0; i < arr.length; i++) {
            arr[i] = (int) ((maxValue + 1) * Math.random()) - (int) (maxValue * Math.random());
        }
        return arr;
    }

    // 拷贝随机生成数组
    public static int[] copyArray(int[] arr) {
        if (arr == null) {
            return null;
        }
        int[] res = new int[arr.length];
        for (int i = 0; i < arr.length; i++) {
            res[i] = arr[i];
        }
        return res;
    }

    // 比较两个数组是否相等
    public static boolean isEqual(int[] arr1, int[] arr2) {
        if ((arr1 == null && arr2 != null) || (arr1 != null && arr2 == null)) {
            return false;
        }
        if (arr1 == null && arr2 == null) {
            return true;
        }
        if (arr1.length != arr2.length) {
            return false;
        }
        for (int i = 0; i < arr1.length; i++) {
            if (arr1[i] != arr2[i]) {
                return false;
            }
        }
        return true;
    }

    // 打印数组
    public static void printArray(int[] arr) {
        if (arr == null) {
            return;
        }
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }
        System.out.println();
    }
}

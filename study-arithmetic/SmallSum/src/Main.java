import java.util.Arrays;
public class Main {

    public static void main(String[] args) {
        int[] arr = new int[]{1,3,4,2,5};
        mergeSort(arr);
    }

    public static void mergeSort(int[] arr) {
        if (arr == null || arr.length < 2) return;
        // 归并排序
        System.out.println(mergeSort(arr, 0, arr.length - 1));
    }

    // 归并排序 在归并的过程中返回小和
    public static int mergeSort(int[] arr, int l, int r) {
        // 一个元素
        if (r == l) return 0;
        // 中间元素
        int mid = l + (r - l) / 2;
        // 递归

        return mergeSort(arr, l, mid) + mergeSort(arr, mid + 1, r) + merge(arr, l, mid, r);
    }

    // 归并
    public static int merge(int arr[], int l, int mid, int r) {
        //申请临时空间
        int[] help = new int[r - l + 1];
        int i = 0;
        // 定义左右指针
        int p1 = l;
        int p2 = mid + 1;
        // 定义一个存储和的变量
        int res = 0;
        // 如果左右都不越界
        while (p1 <= mid && p2 <= r) {
            // 核心代码  左边的某数比右边的某数小   右边的某数右边的数的个数×左边该数
            res += arr[p2] > arr[p1] ? (r - p2 + 1) * arr[p1] : 0;
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

        return res;
    }
}

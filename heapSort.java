public class heapSort {
    public static void main (String[] args) {
        int[] arr = new int[] {1, 8, 9, 2, 3, 0};
        heapSort(arr);
        for (int i = 0; i < arr.length; i++) {
            System.out.println(arr[i]);
        }
    }

    public static void heapSort (int[] arr) {
        if (arr == null || arr.length < 2) {
            return;
        }

        // 循环每个元素，生成大根堆
        for (int i = 0; i < arr.length; i++) {
            heapInsert(arr, i);
        }

        int size = arr.length;
        swap(arr, 0, --size);
        while (size > 0) {
            heapify(arr, 0 , size);
            swap(arr, 0, --size);
        }

    }

    // 生成大根堆函数
    public static void heapInsert (int[] arr, int index) {
        while (arr[index] > arr[(index - 1) / 2]) {
            swap (arr, index, (index - 1) / 2);
            index = (index - 1) / 2;
        }
    }

    // 退出堆顶元素，调整结构依旧为大根堆
    public static void heapify (int[] arr, int index, int size) {
        int left = index * 2 + 1;
        while (left < size) {
            int largest = left + 1 < size && arr[left + 1] > arr[left] ? left + 1 : left;
            largest = arr[largest] > arr[index] ? largest : index;
            if (largest == index) {
                break;
            }
            swap(arr, largest, index);
            index = largest;
            left = index * 2 + 1;

        }
    }

    public static void swap (int[] arr, int i, int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}
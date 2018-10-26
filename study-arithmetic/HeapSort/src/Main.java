public class Main {

    public static void main(String[] args) {
	// write your code here
    }
}

class HeapSort {
    public static void heapSort(int[] arr) {
        if (arr == null || arr.length < 2) {
            return;
        }
        // 根据每一个元素 调整为大根堆的过程
        for (int i = 0; i < arr.length; i++) {
            heapInsert(arr, i);
        }

        // 取出第一个数的过程
        int size = arr.length;
        swap(arr, 0, --size);
        while (size > 0) {
            heapify(arr, 0, size);
            swap(arr, 0, --size);
        }
    }

    // 调整 大根堆的过程  上浮的过程
    private static void heapInsert(int[] arr, int index) {
        // 当前的值与父节点的值比较
        while (arr[index] > arr[(index - 1) / 2]) {
            swap(arr, index, (index - 1) / 2);
            index = (index - 1) / 2;
        }
    }

    // 删除一个数后 重新调整为大根堆的过程  下沉的过程
    private static void heapify(int[] arr, int index, int size) {
        // left 的 index
        int left = index * 2 + 1;
        while (left < size) {
            int largest = left + 1 < size && arr[left + 1] > arr[left] ? arr[left + 1] : arr[left];
            largest = arr[largest] > arr[index] ? arr[largest] : arr[index];
            if (largest == index) {
                break;
            }
            swap(arr, largest, index);
            index = largest;
            left = index * 2 + 1;
        }
    }

    private static void swap(int[] arr, int i, int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}

import java.util.ArrayList;
public class Main {

    public static void main(String[] args) {
	// write your code here
    }
}

class Solution {
    public int minNumberInRotateArray(int [] array) {
        if (array.length == 0 ) return 0;
        int low = 0;
        int high = array.length - 1;
        int mid;
        while (low < high) {
            // 取中间的元素，利用二分法
            mid = low + (high - low) / 2;
            // 最小值在右边
            if (array[mid] > array[high]) {
                low = mid + 1;
            // 最小值在左边或者就是array[mid]本身
            } else if (array[mid] < array[high]) {
                high = mid;
            } else {
                high = high - 1;
            }
        }
        return array[low];
    }
}

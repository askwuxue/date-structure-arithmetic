public class Main {

    public static void main(String[] args) {
	// write your code here
        int[] arr = {1, 3, 5, 11, 2, 23};
        MaxNum m = new MaxNum();
        System.out.println(m.maxNum(arr));
    }
}

class MaxNum {
    public static int maxNum (int[] arr) {
        if (arr == null || arr.length < 2) {
            return 0;
        }
        int max = Integer.MIN_VALUE;
        int min = Integer.MAX_VALUE;
        // 找出最大值和最小值
        for (int i = 0; i < arr.length; i++) {
            max = Math.max(max, arr[i]);
            min = Math.min(min, arr[i]);
        }
        // 只有一种数
        if (min == max) {
            return 0;
        }

        // 存储每个桶的最大 最小 以及是否有数进入的数组
        boolean[] hasNum = new boolean[arr.length + 1];
        int[] maxs = new int[arr.length + 1];
        int[] mins = new int[arr.length + 1];
        // 桶序号
        int bid = 0;
        for (int i = 0; i < arr.length; i++) {
            // 确定进入的桶的序号
            bid = bucket(arr[i], arr.length, min, max);
//            System.out.println(bid);
            // 更新进入桶的最大值与最小值
            mins[bid] = hasNum[bid] ? Math.min(mins[bid], arr[i]) : arr[i];
            maxs[bid] = hasNum[bid] ? Math.max(maxs[bid], arr[i]) : arr[i];
            hasNum[bid] = true;
        }

        int res = 0;
        int i = 1;
        int lastMax = arr[0];
        for (; i <= arr.length; i++) {
            // 非空桶
            if (hasNum[i]) {
                res = Math.max(res, (mins[i] - lastMax));
                lastMax = maxs[i];
            }
        }
        return res;
    }

    // 确定进入的桶的序号
    private static int bucket(long num, long len, long min ,long max) {
        return (int)((num - min) * len / (max - min));
    }
}
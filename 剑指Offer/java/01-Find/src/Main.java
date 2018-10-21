public class Main {

    public static void main(String[] args) {
	// write your code here
        Solution s = new Solution();
        int[][] arr = {{1,2,3}, {4, 5, 6}, {7, 8, 9}};
        System.out.println(s.Find(0, arr));
    }
}

class Solution {
    public boolean Find(int target, int [][] array) {
        // 行数
        int rows = array.length;
        //列数
        int cols = array[0].length;
        if (rows == 0 || cols == 0) {
            return false;
        }
        //
        int r = rows - 1;
        //
        int c = 0;
        // 确定左下角的数
        int number = array[r][c];

        // 一直寻找到右上角
        while (r >= 0 && c <= cols - 1) {
            // 目标数大于number
            if (target > number) {
                if (c == cols - 1) {
                    return false;
                }
                number = array[r][++c];

             // 目标数小于number
            } else if (target < number) {
                if (r == 0) {
                    return false;
                }
                number = array[--r][c];
            } else {
                return true;
            }
        }
        return false;
    }
}

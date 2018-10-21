import java.util.Scanner;
import java.util.Stack;
public class Main {

    public static void main(String[] args) {
        // write your code here
        Scanner scan = new Scanner(System.in);
        String x = scan.next();
        String y = scan.next();
        getLCS(x, y);
    }

    public static void getLCS(String x, String y) {
        char[] s1 = x.toCharArray();
        char[] s2 = x.toCharArray();
        int[][] array = new int[x.length() + 1][y.length() + 1];

        for (int i = 0; i < array[0].length; i++) {
            array[0][i] = 0;
        }

        for (int j = 0; j < array.length; j++) {
            array[j][0] = 0;
        }

        for (int i = 1; i < array.length; i++) {
            for (int j = 1; j < array[i].length; j++) {
                if (s1[i - 1] == s2[i - 1]) {
                    array[i][j] = array[i - 1][j - 1] + 1;
                } else {
                    array[i][j] = Math.max(array[i - 1][j], array[i][j - 1]);
                }
            }
        }

        for (int i = 0; i < array.length; i++) {
            for (int j = 0; j < array[i].length; j++) {
                System.out.print(array[i][j]);
            }
            System.out.println();
        }
    }
}

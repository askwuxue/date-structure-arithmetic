import java.util.Scanner;
public class Main {

    public static void main(String[] args) {
        // write your code here
        Scanner scan = new Scanner(System.in);
        int[] array = new int[100];
        int k = 0;
        int num = scan.nextInt();
        if (num >= 8) {
            while (num > 0) {
                k++;
                array[k] = num % 8;
                num = num / 8;
            }
            while (k >= 1) {
                System.out.print(array[k]);
                k--;
            }
        } else {
            System.out.println(num);
        }
    }
}

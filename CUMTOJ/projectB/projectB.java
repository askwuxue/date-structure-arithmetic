import java.util.Scanner;
public class projectB {
    public static void main (String[] args) {
        int[] arr = new int[311];
        int number;
        int temp;
        Scanner scan = new Scanner(System.in);
        arr[0] = scan.nextInt();
        number = arr[0];
        for (int i = 1; i <= number; i++) {
            arr[i] = scan.nextInt();
        }
        int max = arr[1];
        for (int j = 1; j <= number; j++) {
            if (arr[j] > max) {
                max = arr[j];
            }
        }
        System.out.println(max);
    }
}
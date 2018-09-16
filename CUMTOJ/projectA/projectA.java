import java.util.Scanner;
public class projectA {
    public static void main (String[] args) {
        Scanner scan = new Scanner(System.in);
        int [] arr = new int[16];
        int count = 0; 
        for (int i = 0; i < arr.length; i++) {
            arr[i] = scan.nextInt();
        }
        for (int j = 0; j < arr.length; j++) {
            count += arr[j];
        }
        System.out.println(count);
    }
}
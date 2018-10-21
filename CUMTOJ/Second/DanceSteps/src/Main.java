import java.util.Scanner;
public class Main {

    public static void main(String[] args) {
	// write your code here
        int mod = 1000000007;
        Scanner scan = new Scanner(System.in);
        while (scan.hasNextInt()) {
            int number = scan.nextInt();
            System.out.println(jump(number) % mod);
        }
    }

    private static int jump (int number) {
        if (number == 1) return 1;
        if (number == 2) return 2;
        int a = 1;
        int b = 2;
        int c = 0;
        for (int i = 3; i <= number; i++) {
            c = a + b;
            a = b;
            b = c;
        }
        return c;
    }
}

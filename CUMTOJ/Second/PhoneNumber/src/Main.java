import java.util.Scanner;
public class Main {

    public static void main(String[] args) {
	// write your code here
        Scanner scan = new Scanner(System.in);

        while(scan.hasNextLine()) {
            String str = scan.nextLine();
            System.out.println(check(str));
        }
    }

    private static int check (String str) {
        if (str.length() != 11) return 0;
        char[] arr = new char[str.length()];
        for (int i = 0; i < str.length(); i++) {
            arr[i] = str.charAt(i);
        }
        for (int i = 0; i  < str.length(); i ++) {
            if (arr[0] != '1') return 0;
            if (arr[i] < '0' || arr[i] > '9') return 0;
        }
        return 1;
    }
}

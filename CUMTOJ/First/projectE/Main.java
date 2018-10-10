import java.util.Scanner;
import java.lang.Integer;
public class Main {
    public static void main (String[] args) {
        Scanner scan = new Scanner(System.in);
        // Integer integer = new Integer();
        int[] tempArr = new int[100];
        String nextString = scan.nextLine();
        int year = 0;
        int i = 0;
        while (nextString != null && !nextString.equals("")) {
            year = Integer.parseInt(nextString);
            // System.out.println(year);
            tempArr[i] = year;
            // System.out.println(i);
            i++;
            nextString = scan.nextLine();
        }
        for (int j = 0; j < i; j++) {
            year = tempArr[j];
            if (year == 0) {
                return;
            }else if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
                System.out.println("yes");
            } else {
                year = year < 0 ? -year : year;
                if (year % 4 == 1 || year % 1000 == 1) {
                    System.out.println("yes");
                } else {
                    System.out.println("no");
                }
            }
        }
    }
}
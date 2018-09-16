import java.util.Scanner;
import java.lang.Integer;
public class projectE {
    public static void main (String[] args) {
        Scanner scan = new Scanner(System.in);
        // Integer integer = new Integer();
        String yearString = scan.nextLine();
        int year = Integer.parseInt(yearString);
        // System.out.println(year);
            if (year == 0) {
                System.out.println("no exist");
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
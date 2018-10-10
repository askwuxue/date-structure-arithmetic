import java.util.Scanner;

class Judge {
    public String judgee() {
        Scanner scan = new Scanner(System.in);
        String str1 = scan.nextLine();
        String str2 = scan.nextLine();
        str1 = str1.replace(" ","");
        str2 = str2.replace(" ","");
            for (int i = 0; i < str1.length(); i++) {
                for (int j = 0; j < str2.length(); j++) {
                    if (str1.charAt(i) == str2.charAt(j)) {
                        i++;
                        if (i == str1.length()) {
                            return "yes";
                        }
                    }
                    if (j == str2.length() - 1) {
                        return "no";
                    } 
                }
        }
        return "no";
    }
}
public class Main {
    public static void main (String[] args) {
        Judge judge = new Judge();
        System.out.println(judge.judgee());
    }
}
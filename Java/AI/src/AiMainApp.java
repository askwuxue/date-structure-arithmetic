import java.util.Scanner;
public class AiMainApp {
    public static void main(String[] args) {
        AI ai = new AI();
        Scanner scanner = new Scanner(System.in);
        String input = scanner.nextLine();
        // 注意 String 字符串比较的时候 不可以使用 == 因为字符串是对象 只能使用equals()方法
        //System.out.println(ai.answer(input) == "exit");
        while(true) {
            if (input.equals("exit")) {
                System.out.println("再见");
                break;
            }
            System.out.println(ai.answer(input));
            input = scanner.nextLine();
        }
    }
}

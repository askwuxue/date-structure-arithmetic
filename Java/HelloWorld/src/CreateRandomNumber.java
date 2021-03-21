import java.util.Scanner;
public class CreateRandomNumber {
    public static void main(String[] args) {
        // a <= x < a + b ==> (int)(a + Math.Random() * b)
        // 设置猜测的次数
        int limitTimes = 10;
        // random 生成的是双精度的 [0 - 1)的数
        double RandomNumber = Math.random();
        int rangeStart = 10;
        int rangeEnd = 90;
        int mod = rangeEnd - rangeStart;
        int bigRandom = (int) (RandomNumber * rangeEnd * 100);
        // 取模之后控制 结果在 0 到 80之间 加上最小数 刚好是取值范围
        int reallyNumber = bigRandom % mod + rangeStart;
        // 设置一个用户才对与否的标识符
        boolean flag = false;
        Scanner in = new Scanner(System.in);
        System.out.println("请输入任意字符按下enter键开始猜数字大小游戏，你一共有" + limitTimes + "次机会");
        in.nextLine();
        System.out.println("请输入一个" + rangeStart + "-" + rangeEnd + "之间的整数：");
        // 用户输入的数
        int inputNumber = in.nextInt();
        int tryTimes = 1;
        for (int i = 1; i < limitTimes; i++) {
            // 用户输入的数不在随机数范围内
            if (inputNumber > 90 || inputNumber < 10) {
                System.out.println("输入的数数不在范围内，请输入一个" + rangeStart + "-" + rangeEnd + "之间的整数：");
            } else {
                // 用户猜中了
                if (inputNumber == reallyNumber) {
                    System.out.println("太棒了，您用了" + tryTimes + "次就猜中了正确答案");
                    flag = true;
                    break;
                    // 用户没有猜中
                } else {
                    if (inputNumber > reallyNumber) {
                        System.out.println("您猜大了，请试一下更小的整数吧！");
                        inputNumber = in.nextInt();
                    } else {
                        if (inputNumber < reallyNumber) {
                            System.out.println("您猜小了，请试一下更大的整数吧！");
                            inputNumber = in.nextInt();
                        }
                    }
                    tryTimes++;
                }
            }
        }
        // 用户没有在限定次数内猜中
        if (!flag) {
            System.out.println("很遗憾，您的" + limitTimes + "次机会已全部用完，正确答案是：" + reallyNumber);
        }
    }
}

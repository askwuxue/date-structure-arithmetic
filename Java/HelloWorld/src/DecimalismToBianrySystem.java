import java.util.Scanner;
public class DecimalismToBianrySystem {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.print("请输入您想转化为二进制的十进制数: ");
        int inputNumber = in.nextInt();
        int inputDecimalismNumber = inputNumber;
        String bianrySystemString = "";
        // TODO 将十进制数对除以2，得到商和余数，对商继续进行上一步运算，直到商小于1，后得到的余数作为二进制的高位有效位
        while(inputDecimalismNumber >= 1) {
            bianrySystemString += (inputDecimalismNumber % 2);
            inputDecimalismNumber = inputDecimalismNumber / 2;
        }
        String outputBinarySystemString = new StringBuffer(bianrySystemString).reverse().toString();
        int outputBinarySystemNumber = Integer.parseInt(outputBinarySystemString);
        //System.out.println(bianrySystemString);
        //System.out.println(outputBinarySystemString);
        System.out.println(inputNumber + "对应的二进制数为: " + outputBinarySystemNumber);

    }
}

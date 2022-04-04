import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

/**
 * Created with IntelliJ IDEA.
 * Author: Amos
 * E-mail: amos@amoscloud.com
 * Date: 2021/4/20
 * Time: 16:47
 * Description:
 */
public class Main30 {
    public static void main(String[] args) {

        /*
           已知火星人使用的运算符号为#;$
           其与地球人的等价公式如下
           x#y=2*x+3*y+4
           x$y=3*x+y+2
           x y是无符号整数
           地球人公式按照c语言规则进行计算
           火星人公式中$符优先级高于#相同的运算符按从左到右的顺序运算

           输入描述：
           火星人字符串表达式结尾不带回车换行
           输入的字符串说明是 字符串为仅有无符号整数和操作符组成的计算表达式

           1.用例保证字符串中操作数与操作符之间没有任何分隔符
           2.用例保证操作数取值范围为32位无符号整数，
           3.保证输入以及计算结果不会出现整型溢出
           4.保证输入的字符串为合法的求值报文
           例如: 123#4$5#76$78
           5.保证不会出现非法的求值报文
           例如: #4$5 这种缺少操作数
                4$5#  这种缺少操作数
                4#$5  这种缺少操作数
                4 $5  有空格
                3+4-5*6/7 有其他操作符
                12345678987654321$54321 32位整数溢出

           输出描述：
             根据火星人字符串输出计算结果
             结尾不带回车换行

           案例1：
          输入：
           7#6$5#12
          输出：
           226

           说明 示例7#6$5#12=7#(3*6+5+2)#12
                           =7#25#12
                           =(2*7+3*25+4)#12
                           =93#12
                           =2*93+3*12+4
                           =226
         */

        Scanner in = new Scanner(System.in);
        String input = in.nextLine();
        in.close();

        List<String> operators = Arrays.stream(input.split("\\w+"))
                .filter(x -> !x.isEmpty())
                .collect(Collectors.toList());

        List<Integer> nums = Arrays.stream(input.split("\\W+"))
                .map(Integer::parseInt)
                .collect(Collectors.toList());

        int pos$ = operators.indexOf("$");
        while (pos$ != -1) {
            int tmp = dollar(nums.get(pos$), nums.get(pos$ + 1));
            nums.set(pos$, tmp);
            nums.remove(pos$ + 1);
            operators.remove(pos$);
            pos$ = operators.indexOf("$");
        }

        int res = nums.get(0);
        for (int i = 1; i < nums.size(); i++) {
            res = sharp(res, nums.get(i));
        }

        System.out.println(res);
    }

    public static int sharp(int x, int y) {
        return 2 * x + 3 * y + 4;
    }

    public static int dollar(int x, int y) {
        return 3 * x + y + 2;
    }
}
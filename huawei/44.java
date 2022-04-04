import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

/**
 * Created with IntelliJ IDEA.
 * Author: Amos
 * E-mail: amos@amoscloud.com
 * Date: 2021/4/19
 * Time: 15:23
 * Description:
 */
public class Main28 {

    public static void main(String[] args) {
         /*
         有N个正整数组成的一个序列
         给定一个整数sum
         求长度最长的的连续子序列使他们的和等于sum
         返回次子序列的长度
         如果没有满足要求的序列 返回-1
         案例1：
         输入
         1,2,3,4,2
         6
         输出
         3
         解析：1,2,3和4,2两个序列均能满足要求
         所以最长的连续序列为1,2,3 因此结果为3

         示例2：
         输入
         1,2,3,4,2
         20
         输出
         -1
         解释：没有满足要求的子序列，返回-1

         备注： 输入序列仅由数字和英文逗号构成
         数字之间采用英文逗号分割
         序列长度   1<=N<=200
         输入序列不考虑异常情况
         由题目保证输入序列满足要求
          */
        Scanner in = new Scanner(System.in);
        List<Integer> ints = Arrays.stream(in.nextLine().split(","))
                .map(Integer::parseInt)
                .collect(Collectors.toList());
        int sum = Integer.parseInt(in.nextLine());
        in.close();

        int max_len = 0;

        for (int i = 0; i < ints.size(); i++) {
            int tmp_sum = 0;
            int sub_len = 0;
            for (int j = i; j < ints.size(); j++) {
                if (tmp_sum > sum) break;
                tmp_sum += ints.get(j);
                sub_len++;
                if (tmp_sum == sum && sub_len > max_len)
                    max_len = sub_len;
            }
        }

        max_len = max_len == 0 ? -1 : max_len;

        System.out.println(max_len);
    }
}
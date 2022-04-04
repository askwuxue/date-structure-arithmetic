package com.amoscloud.newcoder;

import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

/**
 * Created with IntelliJ IDEA.
 * Author: Amos
 * E-mail: amos@amoscloud.com
 * Date: 2021/4/29
 * Time: 7:54
 * Description:
 */
public class Main35 {
    public static void main(String[] args) {
        /*
        一辆运送快递的货车。运送的快递均放在大小不等的长方形快递盒中
        为了能够装载更多的快递 同时不能让货车超载
        需要计算最多能装多少个快递
        快递的体积不受限制
        快递数量最多1000个
        货车载重量50000

        输入描述：
        第一行输入 每个快递重量 用逗号分隔
        如5,10,2,11
        第二行 输入 货车的载重量
        如20
        不需要考虑异常输入

        输出描述：
        输出最多能装多少个快递

        货车的载重量为20 最多只能放3种快递 5,10,2因此输出3

        示例1：
         输入
         5,10,2,11
         20
         输出
         3

         */
        Scanner in = new Scanner(System.in);
        String[] line = in.nextLine().split(",");
        int p = Integer.parseInt(in.nextLine());
        in.close();

        List<Integer> ints = Arrays.stream(line)
                .map(Integer::parseInt)
                .sorted()
                .collect(Collectors.toList());

        int sum = 0, count = 0;
        for (Integer i : ints) {
            if (sum + i <= p) {
                sum += i;
                count++;
            } else break;
        }

        System.out.println(count);

    }
}
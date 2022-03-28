package com.amoscloud.newcoder.easy;

import java.util.LinkedList;
import java.util.Scanner;

/**
 * Created with IntelliJ IDEA.
 * Author: Amos
 * E-mail: amos@amoscloud.com
 * Date: 2021/8/18
 * Time: 17:42
 * Description:100%
 */
public class Main78 {
    /*
    所谓的水仙花数是指一个n位的正整数其各位数字的n次方的和等于该数本身，
    例如153=1^3+5^3+3^3,153是一个三位数
    输入描述
        第一行输入一个整数N，
        表示N位的正整数 N在3-7之间包含3,7
        第二行输入一个正整数M，
        表示需要返回第M个水仙花数
    输出描述
        返回长度是N的第M个水仙花数，
        个数从0开始编号，
        若M大于水仙花数的个数返回最后一个水仙花数和M的乘积，
        若输入不合法返回-1

    示例一：

        输入
         3
         0
        输出
         153
        说明：153是第一个水仙花数
     示例二：
        输入
        9
        1
        输出
        -1
     */
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);

        int N = Integer.parseInt(in.nextLine());
        int M = Integer.parseInt(in.nextLine());
        in.close();

        if (N < 3 || N > 7) {
            System.out.println(-1);
            return;
        }

        LinkedList<Integer> res = new LinkedList<>();

        int start = (int) Math.pow(10, N - 1);
        int end = (int) Math.pow(10, N);

        for (int i = start; i < end; i++) {
            int sum = 0;
            int bit = start;
            while (bit != 1) {
                sum += Math.pow(i / bit % 10, N);
                bit /= 10;
            }
            sum += Math.pow(i % 10, N);
            if (sum == i) {
                res.add(i);
            }
            if (res.size() == M + 1) {
                System.out.println(i);
                return;
            }
        }

        if (M > res.size()) {
            System.out.println(M * res.getLast());
        }

    }
}
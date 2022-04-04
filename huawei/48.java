package com.amoscloud.newcoder;

import java.util.Scanner;

/**
 * Created with IntelliJ IDEA.
 * Author: Amos
 * E-mail: amos@amoscloud.com
 * Date: 2021/4/23
 * Time: 17:14
 * Description:
 */
public class Main33 {
    public static void main(String[] args) {
        /*
        给定一个元素类型为小写字符串的数组
        请计算两个没有相同字符的元素长度乘积的最大值
        如果没有符合条件的两个元素返回0

        输入描述
          输入为一个半角逗号分割的小写字符串数组
          2<= 数组长度 <=100
          0< 字符串长度 <=50
        输出描述
          两个没有相同字符的元素长度乘积的最大值

        示例一
          输入
            iwdvpbn,hk,iuop,iikd,kadgpf
          输出
            14
          说明
           数组中有5个元组  第一个和第二个元素没有相同字符
           满足条件 输出7*2=14

         */

        Scanner in = new Scanner(System.in);
        String line = in.nextLine();
        in.close();

        String[] strings = line.split(",");

        int max = 0;
        for (int i = 0; i < strings.length; i++) {
            for (int j = i; j < strings.length; j++) {
                char[] chars = strings[j].toCharArray();
                int k = 0;
                while (k < chars.length) {
                    if (strings[i].indexOf(chars[k]) != -1) break;
                    k++;
                }
                int tmp = strings[i].length() * strings[j].length();
                if (k == chars.length && tmp > max) max = tmp;
            }
        }

        System.out.println(max);
    }
}
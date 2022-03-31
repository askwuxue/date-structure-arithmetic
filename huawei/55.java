package com.amoscloud.newcoder.easy;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.Scanner;

/**
 * Created with IntelliJ IDEA.
 * Author: Amos
 * E-mail: amos@amoscloud.com
 * Date: 2021/5/8
 * Time: 17:39
 * Description:
 */
public class Main47 {
    /*
        单词接龙的规则是
        可用于接龙的单词首字母必须要与前一个单词的尾字母相同
        当存在多个首字母相同的单词时
        取长度最长的单词
        如果长度也相等则取词典序最小的单词
        已经参与接龙的单词不能重复使用
        现给定一组全部由小写字母组成的单词数组
        并指定其中的一个单词为起始单词
        进行单词接龙
        请输出最长的单词串
        单词串是由单词拼接而成 中间没有空格

        输入描述：
            输入的第一行为一个非负整数
            表示起始单词在数组中的索引k  0<=k<=n
            第二行输入的是一个非负整数表示单词的个数n
            接下来的n行分别表示单词数组中的单词

        输出描述：
            输出一个字符串表示最终拼接的字符串

        示例1：
        输入
          0
          6
          word
          dd
          da
          dc
          dword
          d

        输出
          worddwordda

        说明：
        先确定起始单词word
        再确定d开头长度最长的单词dword
        剩余以d开头且长度最长的由 da dd dc
        则取字典序最小的da
        所以最后输出worddwordda

        示例二：
        输入：
            4
            6
            word
            dd
            da
            dc
            dword
            d
         输出：
         dwordda

     */

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int k = Integer.parseInt(in.nextLine());
        int n = Integer.parseInt(in.nextLine());
        ArrayList<String> words = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            words.add(in.nextLine());
        }
        in.close();

        StringBuilder builder = new StringBuilder();
        builder.append(words.get(k));
        words.remove(k);

        words.sort(new Comparator<String>() {
            @Override
            public int compare(String w1, String w2) {
                int len1 = w1.length();
                int len2 = w2.length();
                if (len1 != len2) {
                    return len2 - len1;
                } else {
                    return w1.compareTo(w2);
                }
            }
        });

        int len;
        do {
            len = builder.length();
            String last = builder.substring(builder.length() - 1);
            for (int i = 0; i < words.size(); i++) {
                String cur = words.get(i);
                if (cur.startsWith(last)) {
                    builder.append(cur);
                    words.remove(cur);
                    break;
                }
            }
        } while (builder.length() != len);

        System.out.println(builder.toString());

    }
}
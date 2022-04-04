package com.amoscloud.newcoder;

import java.util.Scanner;

/**
 * Created with IntelliJ IDEA.
 * Author: Amos
 * E-mail: amos@amoscloud.com
 * Date: 2021/4/23
 * Time: 16:12
 * Description:
 */
public class Main32 {
    public static void main(String[] args) {
        /*
         相对开音节构成的结构为辅音+元音(aeiou)+辅音(r除外)+e
         常见的单词有bike cake
         给定一个字符串，以空格为分隔符
         反转每个单词的字母
         若单词中包含如数字等其他非字母时不进行反转
         反转后计算其中含有相对开音节结构的子串个数
         (连续子串中部分字符可以重复)

         输入描述
            字符串 以空格分割的多个单词
            长度<10000 字母只考虑小写

         输出描述
             含有相对开音节结构的子串个数

         示例1：
            输入
              ekam a ekac
            输出
              2
            说明：
             反转后为  make a cake 其中make和cake为相对开音节子串
             返回2

          示例2：
             输入
                !ekam a ekekac
             输出
                 2
             说明
                 反转后为 !ekam a cakeke
                 因为!ekam含有非英文字母，所以未反转
                 其中 cake和keke 为相对开音节子串 返回2

         */

        Scanner in = new Scanner(System.in);
        String line = in.nextLine();
        in.close();

        String[] words = line.split(" ");

        int count = 0;

        for (String word : words) {
            char[] chars = word.toCharArray();
            if (word.replaceAll("[a-z]+", "").isEmpty()) {
                for (int i = 0, j = chars.length - 1; i < j; i++, j--) {
                    char tmp = chars[i];
                    chars[i] = chars[j];
                    chars[j] = tmp;
                }
            }
            if (chars.length < 4) continue;
            for (int i = 0; i < chars.length - 3; i++) {
                if (!isVowel(chars[i])
                        && isVowel(chars[i + 1])
                        && !isVowel(chars[i + 2]) && chars[i + 2] != 'r'
                        && chars[i + 3] == 'e') {
                    count++;
                }
            }
        }

        System.out.println(count);
    }

    private static boolean isVowel(char c) {
        return c == 'a' || c == 'e' || c == 'i'
                || c == 'o' || c == 'u';
    }
}
package com.amoscloud.newcoder.easy;

import java.util.Scanner;

/**
 * Created with IntelliJ IDEA.
 * Author: Amos
 * E-mail: amos@amoscloud.com
 * Date: 2021/5/24
 * Time: 17:01
 * Description:
 */
public class Main58 {
    /*
    有一种简易压缩算法：针对全部为小写英文字母组成的字符串，
    将其中连续超过两个相同字母的部分压缩为连续个数加该字母
    其他部分保持原样不变.
    例如字符串aaabbccccd  经过压缩变成字符串 3abb4cd
    请您编写解压函数,根据输入的字符串,
    判断其是否为合法压缩过的字符串
    若输入合法则输出解压缩后的字符串
    否则输出字符串"!error"来报告错误

    输入描述
      输入一行，为一个ASCII字符串
      长度不超过100字符
      用例保证输出的字符串长度也不会超过100字符串

    输出描述
      若判断输入为合法的经过压缩后的字符串
      则输出压缩前的字符串
      若输入不合法 则输出字符串"!error"

     示例一：
      输入
       4dff
      输出
       ddddff
      说明
        4d扩展为4个d ，故解压后的字符串为ddddff

     示例二
       输入
         2dff
       输出
         !error
        说明
         2个d不需要压缩 故输入不合法

      示例三
       输入
        4d@A
       输出
        !error
        说明
         全部由小写英文字母做成的字符串，压缩后不会出现特殊字符@和大写字母A
         故输入不合法

     */
  public static void main(String[] args) {
    Scanner in = new Scanner(System.in);
    String line = in.nextLine();
    in.close();

    String res = decode(line);

    System.out.println(res);

  }

  private static String decode(String line) {
    String fixed = line.replaceAll("[a-z]|[0-9]", "");
    if (fixed.length() > 0) {
      return "!error";
    }

    StringBuilder res = new StringBuilder();
    char[] chars = line.toCharArray();
    int count = 1;
    for (int i = 0; i < chars.length; i++) {
      char cur = chars[i];

      if (Character.isLetter(cur)) {
        if (res.length() > 0 && cur == res.charAt(res.length() - 1)) {
          return "!error";
        }
        for (int j = 0; j < count; j++) {
          res.append(cur);
        }
        count = 1;
      }
      int pos = i;
      while (Character.isDigit(chars[i])) {
        i++;
      }
      if (i > pos) {
        count = Integer.parseInt(line.substring(pos, i--));
      }
    }
    return res.toString();
  }
}
package com.amoscloud.newcoder.easy;

import java.util.Scanner;

/**
 * Created with IntelliJ IDEA.
 * Author: Amos
 * E-mail: amos@amoscloud.com
 * Date: 2021/12/1
 * Time: 18:36
 * Description: 100%
 */
public class Main96 {
  /*
  1.输入字符串s输出s中包含所有整数的最小和，
  说明：1字符串s只包含a~z,A~Z,+,-，
  2.合法的整数包括正整数，一个或者多个0-9组成，如：0,2,3,002,102
  3.负整数，负号开头，数字部分由一个或者多个0-9组成，如-2,-012,-23,-00023
  输入描述：包含数字的字符串
  输出描述：所有整数的最小和
  示例：
    输入：
      bb1234aa
  　输出
      10
  　输入：
      bb12-34aa
  　输出：
      -31
  说明：1+2-(34)=-31
   */
  public static void main(String[] args) {
    Scanner in = new Scanner(System.in);
    String line = in.nextLine();
    in.close();

    char[] chars = line.toCharArray();
    int sum = 0;

    for (int i = 0; i < chars.length; i++) {
      char c = chars[i];
      if (c == '-') {
        i++;
        int start = i;
        while (i < chars.length && Character.isDigit(chars[i])) {
          i++;
        }
        String substring = line.substring(start, i);
        if (substring.length() > 0) {
          sum -= Integer.parseInt(substring);
        }
        i--;
        continue;
      }

      if (Character.isDigit(c)) {
        sum += Character.digit(c, 10);
      }
    }

    System.out.println(sum);

  }
}
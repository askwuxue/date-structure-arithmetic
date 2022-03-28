// 注意！答案仅作为参考（实际考试中下列代码通过用例100%，但不代表最优解）
package com.amoscloud.newcoder.easy;

import java.util.Comparator;
import java.util.LinkedList;
import java.util.Scanner;

/**
 * Created with IntelliJ IDEA.
 * Author: Amos
 * E-mail: amos@amoscloud.com
 * Date: 2021/11/2
 * Time: 17:12
 * Description:
 */
public class Main90 {
  /*
  运维工程师采集到某产品线网运行一天产生的日志n条
  现需根据日志时间先后顺序对日志进行排序
  日志时间格式为H:M:S.N
  H表示小时(0~23)
  M表示分钟(0~59)
  S表示秒(0~59)
  N表示毫秒(0~999)
  时间可能并没有补全
  也就是说
  01:01:01.001也可能表示为1:1:1.1

  输入描述
     第一行输入一个整数n表示日志条数
     1<=n<=100000
     接下来n行输入n个时间

   输出描述
     按时间升序排序之后的时间
     如果有两个时间表示的时间相同
     则保持输入顺序

   示例：
     输入：
      2
      01:41:8.9
      1:1:09.211
     输出
       1:1:09.211
       01:41:8.9
   示例
      输入
       3
       23:41:08.023
       1:1:09.211
       08:01:22.0
      输出
        1:1:09.211
        08:01:22.0
        23:41:08.023

    示例
      输入
        2
        22:41:08.023
        22:41:08.23
      输出
        22:41:08.023
        22:41:08.23
      时间相同保持输入顺序
       */
  public static void main(String[] args) {
    Scanner in = new Scanner(System.in);
    int n = Integer.parseInt(in.nextLine());
    LinkedList<String> times = new LinkedList<>();
    for (int i = 0; i < n; i++) {
      times.add(in.nextLine());
    }
    in.close();

    times.sort(Comparator.comparingLong(Main90::getTime));

    times.forEach(System.out::println);
  }

  private static long getTime(String str) {
    String[] t1 = str.split(":");
    String[] t2 = t1[2].split("\\.");
    int h = Integer.parseInt(t1[0]) * 60 * 60 * 1000;
    int m = Integer.parseInt(t1[1]) * 60 * 1000;
    int s = Integer.parseInt(t2[0]) * 1000;
    int n = Integer.parseInt(t2[1]);
    return h + m + s + n;
  }

}
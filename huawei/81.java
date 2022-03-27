package com.amoscloud.newcoder.easy;

import java.util.Scanner;

/**
 * Created with IntelliJ IDEA.
 * Author: Amos
 * E-mail: amos@amoscloud.com
 * Date: 2021/12/1
 * Time: 18:25
 * Description:
 */
public class Main95 {
  /*
    程序员小明打了一辆出租车去上班。出于职业敏感，他注意到这辆出租车的计费表有点问题，总是偏大。
  出租车司机解释说他不喜欢数字4，所以改装了计费表，任何数字位置遇到数字4就直接跳过，其余功能都正常。
  比如：
    1. 23再多一块钱就变为25；
    2. 39再多一块钱变为50；
    3. 399再多一块钱变为500；
    小明识破了司机的伎俩，准备利用自己的学识打败司机的阴谋。
    给出计费表的表面读数，返回实际产生的费用。

    输入描述:
      只有一行，数字N，表示里程表的读数。
      (1<=N<=888888888)。
    输出描述:
      一个数字，表示实际产生的费用。以回车结束。
    示例1：
    输入
      5
    输出
      4
    说明
      5表示计费表的表面读数。
      表示实际产生的费用其实只有4块钱。

    示例2：
    输入
      17
    输出
      15
    说明
      17表示计费表的表面读数。
      15表示实际产生的费用其实只有15块钱。
    示例3：
    输入
      100
    输出
      81
    说明：100表示计费表的表面读数，81表示实际产生的费用其实只有81块钱
   */
  public static void main(String[] args) {
    Scanner in = new Scanner(System.in);
    int N = in.nextInt();
    int ans = N, temp = 0, k = 0, j = 1;
    while (N > 0) {
      //先判断个位上是否跳了4，如果个位上是5~9，就先temp=1。
      if (N % 10 > 4) {
        temp += (N % 10 - 1) * k + j;
      } else {
        temp += (N % 10) * k;
      }
      k = k * 9 + j;//k代表跳了多少次4，多收了多少个1元
      j *= 10;//j代表位数，1代表个位，10代表十位
      N /= 10;//相当于将N整体右移一位
    }
    System.out.println(ans - temp);
  }
}
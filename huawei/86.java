package com.amoscloud.newcoder.easy;

import java.util.*;
import java.util.stream.Collectors;

/**
 * Created with IntelliJ IDEA.
 * Author: Amos
 * E-mail: amos@amoscloud.com
 * Date: 2021/12/22
 * Time: 11:18
 * Description: 100%
 */
public class Main105 {
  /*
  给定一个射击比赛成绩单
  包含多个选手若干次射击的成绩分数
  请对每个选手按其最高三个分数之和进行降序排名
  输出降序排名后的选手id序列
  条件如下
    1. 一个选手可以有多个射击成绩的分数，且次序不固定
    2. 如果一个选手成绩少于3个，则认为选手的所有成绩无效，排名忽略该选手
    3. 如果选手的成绩之和相等，则相等的选手按照其id降序排列

   输入描述:
     输入第一行
         一个整数N
         表示该场比赛总共进行了N次射击
         产生N个成绩分数
         2<=N<=100

     输入第二行
       一个长度为N整数序列
       表示参与每次射击的选手id
       0<=id<=99

     输入第三行
        一个长度为N整数序列
        表示参与每次射击选手对应的成绩
        0<=成绩<=100

   输出描述:
      符合题设条件的降序排名后的选手ID序列

   示例一
      输入:
        13
        3,3,7,4,4,4,4,7,7,3,5,5,5
        53,80,68,24,39,76,66,16,100,55,53,80,55
      输出:
        5,3,7,4
      说明:
        该场射击比赛进行了13次
        参赛的选手为{3,4,5,7}
        3号选手成绩53,80,55 最高三个成绩的和为188
        4号选手成绩24,39,76,66  最高三个成绩的和为181
        5号选手成绩53,80,55  最高三个成绩的和为188
        7号选手成绩68,16,100  最高三个成绩的和为184
        比较各个选手最高3个成绩的和
        有3号=5号>7号>4号
        由于3号和5号成绩相等  且id 5>3
        所以输出5,3,7,4
   */

  public static void main(String[] args) {
    Scanner in = new Scanner(System.in);
    int n = Integer.parseInt(in.nextLine());
    List<Integer> ids = toIntList(in.nextLine());
    List<Integer> scores = toIntList(in.nextLine());
    in.close();

    HashMap<Integer, List<Integer>> map = new HashMap<>();

    for (int i = 0; i < n; i++) {
      Integer id = ids.get(i);
      Integer score = scores.get(i);
      List<Integer> list = map.getOrDefault(id, new LinkedList<>());
      list.add(score);
      map.put(id, list);
    }
    StringBuilder builder = new StringBuilder();

    map.entrySet()
        .stream()
        .filter(x -> x.getValue().size() >= 3)
        .sorted((o1, o2) -> {
          Integer sum1 = sumT3(o1.getValue());
          Integer sum2 = sumT3(o2.getValue());
          if (sum1.equals(sum2)) {
            return o2.getKey() - o1.getKey();
          } else {
            return sum2 - sum1;
          }
        })
        .map(Map.Entry::getKey)
        .forEach(x -> builder.append(x).append(","));

    System.out.println(builder.substring(0, builder.length() - 1));

  }

  private static Integer sumT3(List<Integer> list) {
    list.sort(Integer::compareTo);
    int sum = 0;
    for (int i = list.size() - 1; i >= list.size() - 3; i--) {
      sum += list.get(i);
    }
    return sum;
  }

  private static List<Integer> toIntList(String str) {
    return Arrays.stream(str.split(","))
        .map(Integer::parseInt)
        .collect(Collectors.toList());
  }
}
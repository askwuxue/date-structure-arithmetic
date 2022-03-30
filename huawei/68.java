package com.amoscloud.newcoder.easy;

import java.util.*;
import java.util.stream.Collectors;

/**
 * Created with IntelliJ IDEA.
 * Author: Amos
 * E-mail: amos@amoscloud.com
 * Date: 2021/8/4
 * Time: 15:17
 * Description:100%
 */

public class Main76 {
/*
给定一个随机的整数数组(可能存在正整数和负整数)nums,
请你在该数组中找出两个数，其和的绝对值(|nums[x]+nums[y]|)为最小值
并返回这两个数(按从小到大返回)以及绝对值。
每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

输入描述：
 一个通过空格空格分割的有序整数序列字符串，最多1000个整数，
 且整数数值范围是[-65535,65535]

输出描述：
  两个数和两数之和绝对值

 示例一：
  输入
  -1 -3 7 5 11 15
  输出
  -3 5 2

说明：
因为|nums[0]+nums[2]|=|-3+5|=2最小，
所以返回-3 5 2

 */
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        String[] nums = in.nextLine().split(" ");

        in.close();

        ArrayList<Integer> list = Arrays.stream(nums)
                .map(Integer::parseInt)
                .distinct()
                .collect(Collectors.toCollection(ArrayList::new));

        int min = Integer.MAX_VALUE;

        TreeSet<Integer> resSet = new TreeSet<>();

        for (int i = 0; i < list.size() - 1; i++) {
            for (int j = i; j < list.size(); j++) {
                Integer a = list.get(i);
                Integer b = list.get(j);
                int sum = Math.abs(a + b);
                if (sum < min && a != b) {
                    min = sum;
                    resSet.clear();
                    resSet.add(a);
                    resSet.add(b);
                }
            }
        }

        if (resSet.size() != 0) {
            for (Integer integer : resSet) {
                System.out.print(integer + " ");
            }
            System.out.println(min);
        }

//-1 -3 7 5 11 15

    }
}
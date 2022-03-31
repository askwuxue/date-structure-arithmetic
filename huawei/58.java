package com.amoscloud.newcoder.easy;

import java.util.*;

/**
 * Created with IntelliJ IDEA.
 * Author: Amos
 * E-mail: amos@amoscloud.com
 * Date: 2021/5/13
 * Time: 19:02
 * Description:
 */
public class Main51 {
       /*
        一个工厂有m条流水线
        来并行完成n个独立的作业
        该工厂设置了一个调度系统
        在安排作业时，总是优先执行处理时间最短的作业
        现给定流水线个数m
        需要完成的作业数n
        每个作业的处理时间分别为 t1,t2...tn
        请你编程计算处理完所有作业的耗时为多少
        当n>m时 首先处理时间短的m个作业进入流水线
        其他的等待
        当某个作业完成时，
        依次从剩余作业中取处理时间最短的
        进入处理

        输入描述：
        第一行为两个整数(采取空格分隔)
        分别表示流水线个数m和作业数n
        第二行输入n个整数(采取空格分隔)
        表示每个作业的处理时长 t1,t2...tn
        0<m,n<100
        0<t1,t2...tn<100

        输出描述
        输出处理完所有作业的总时长

        案例
        输入
3 5
8 4 3 2 10
        输出
        13
        说明
        先安排时间为2,3,4的三个作业
        第一条流水线先完成作业
        调度剩余时间最短的作业8
        第二条流水线完成作业
        调度剩余时间最短的作业10
        总共耗时 就是二条流水线完成作业时间13(3+10)

        3 9
        1 1 1 2 3 4 6 7 8

         */

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        String[] strs = in.nextLine().split(" ");
        int m = Integer.parseInt(strs[0]);
        int n = Integer.parseInt(strs[1]);

        String[] split = in.nextLine().split(" ");
        int[] jobs = new int[split.length];
        for (int i = 0; i < split.length; i++) {
            jobs[i] = Integer.parseInt(split[i]);
        }
        Arrays.sort(jobs);

        if (n <= m) {
            System.out.println(jobs[jobs.length - 1]);
            return;
        }

        ArrayList<Integer> res = new ArrayList<>();

        for (int i = 0; i < m; i++) {
            res.add(jobs[i]);
        }

        for (int i = m; i < jobs.length; i++) {
            Integer min = new ArrayList<>(new TreeSet<>(res)).get(0);
            int index = res.indexOf(min);
            res.set(index, res.get(index) + jobs[i]);
        }

        ArrayList<Integer> r = new ArrayList<>(new TreeSet<>(res));

        System.out.println(r.get(r.size() - 1));

    }
}
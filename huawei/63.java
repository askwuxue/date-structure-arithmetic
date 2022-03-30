package com.amoscloud.newcoder.easy;

import java.util.Comparator;
import java.util.HashMap;
import java.util.Scanner;

/**
 * Created with IntelliJ IDEA.
 * Author: Amos
 * E-mail: amos@amoscloud.com
 * Date: 2021/5/26
 * Time: 19:38
 * Description:
 */
public class Main60 {
    /*
    给定两个字符集合
    一个是全量字符集
    一个是已占用字符集
    已占用字符集中的字符不能再使用
    要求输出剩余可用字符集

    输入描述
     1. 输入一个字符串 一定包含@
     @前为全量字符集  @后的为已占用字符集
     2. 已占用字符集中的字符
     一定是全量字符集中的字符
     字符集中的字符跟字符之间使用英文逗号隔开
     3. 每个字符都表示为字符+数字的形式
      用英文冒号分隔
      比如a:1标识一个a字符
     4. 字符只考虑英文字母，区分大小写
      数字只考虑正整型 不超过100
     5. 如果一个字符都没被占用 @标识仍存在
     例如 a:3,b:5,c:2@

     输出描述：
       输出可用字符集
       不同的输出字符集之间用回车换行
       注意 输出的字符顺序要跟输入的一致
       不能输出b:3,a:2,c:2
       如果某个字符已全部占用 则不需要再输出

      示例一：
       输入
       a:3,b:5,c:2@a:1,b:2
       输出
       a:2,b:3,c:2
       说明：
       全量字符集为三个a，5个b，2个c
       已占用字符集为1个a，2个b
       由于已占用字符不能再使用
       因此剩余可用字符为2个a，3个b，2个c
       因此输出a:2,b:3,c:2
     */
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        String[] split = in.nextLine().split("@");
        in.close();

        HashMap<String, Info> map = new HashMap<>();

        String[] all = split[0].split(",");
        for (int i = 0; i < all.length; i++) {
            String[] char_count = all[i].split(":");
            String c = char_count[0];
            map.put(c, new Info(c, i, Integer.parseInt(char_count[1])));
        }

        if (split.length > 1)
            for (String s : split[1].split(",")) {
                String[] char_count = s.split(":");
                String c = char_count[0];
                Info value = map.get(c);
                value.count -= Integer.parseInt(char_count[1]);
                map.put(c, value);
            }

        StringBuilder sb = new StringBuilder();

        map.values().stream().filter(x -> x.count > 0)
                .sorted(new Comparator<Info>() {
                    @Override
                    public int compare(Info o1, Info o2) {
                        return o1.no - o2.no;
                    }
                }).forEach(x ->
                sb.append(x.c)
                        .append(":")
                        .append(x.count)
                        .append(","));

        System.out.println(sb.substring(0, sb.length() - 1));
    }

    public static class Info {

        public String c;
        public int no;
        public int count;

        public Info(String c, int no, int count) {
            this.c = c;
            this.no = no;
            this.count = count;
        }

    }
}
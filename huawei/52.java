import java.util.ArrayList;
import java.util.Comparator;
import java.util.Scanner;

/**
 * Created with IntelliJ IDEA.
 * Author: Amos
 * E-mail: amos@amoscloud.com
 * Date: 2021/5/7
 * Time: 18:29
 * Description:
 */
public class Main39 {
    /*
    磁盘的容量单位有M,G,T这三个等级
    他们之间的换算关系为
    1T=1024G
    1G=1024M
    现在给定N块磁盘的容量
      请对他们按从小到大的顺序进行稳定排序
      例如给定5块盘容量
      1T,20M,3G,10G6T,3M12G9M
    排序后的结果为20M,3G,3M12G9M,1T,10G6T

    注意单位可以重复出现
    上述3M12G9M为 3M+12G+9M和 12M12G相等

    输入描述:
    输入第一行包含一个整数N
    2<=N<=100 ,表示磁盘的个数
    接下来的N行每行一个字符串 长度 (2<l<30)
    表示磁盘的容量
    有一个或多个格式为 mv的子串组成
    其中m表示容量大小 v表示容量单位
    例如

    磁盘容量m的范围 1~1024正整数
    容量单位v的范围包含题目中提到的M,G,T

    输出描述:
     输出N行
     表示N块磁盘容量排序后的结果

     示例1:
     输入
         3
         1G
         2G
         1024M

     输出
        1G
        1024M
        2G

    说明 1G和1024M容量相等,稳定排序要求保留他们原来的相对位置
    故1G在1024M前

     示例二:
     输入
          3
          2G4M
          3M2G
          1T

      输出
        3M2G
        2G4M
        1T
        说明1T大于2G4M大于3M2G

     */

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int N = Integer.parseInt(in.nextLine());
        ArrayList<String> sizes = new ArrayList<>();
        for (int i = 0; i < N; i++) {
            sizes.add(in.nextLine());
        }
        in.close();
        sizes.sort(new Comparator<String>() {
            @Override
            public int compare(String o1, String o2) {
                return Long.compare(parseLong(o1), parseLong(o2));
            }
        });

        sizes.forEach(System.out::println);

    }

    static Long parseLong(String size) {
        String[] units = size.split("[0-9]+");
        String[] nums = size.split("[A-Z]+");
        //[, M, G, M]
        //[3, 12, 9]

        long sum = 0;
        for (int i = 1; i < units.length; i++) {
            long num = Long.parseLong(nums[i - 1]);
            switch (units[i]) {
                case "M":
                    sum += num;
                    break;
                case "G":
                    sum += num * 1024;
                    break;
                case "T":
                    sum += num * 1024 * 1024;
                    break;
            }
        }

        return sum;
    }
}
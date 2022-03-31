import java.util.Scanner;

/**
 * Created with IntelliJ IDEA.
 * Author: Amos
 * E-mail: amos@amoscloud.com
 * Date: 2021/5/7
 * Time: 19:57
 * Description: 90%
 */
public class Main41 {
    /*
       停车场有一横排车位0代表没有停车,1代表有车.
       至少停了一辆车在车位上,也至少有一个空位没有停车.
       为防止刮蹭,需为停车人找到一个车位
       使得停车人的车最近的车辆的距离是最大的
       返回此时的最大距离

       输入描述:
       1. 一个用半角逗号分割的停车标识字符串,停车标识为0或1,
        0为空位,1为已停车
       2. 停车位最多有100个

       输出描述
       1. 输出一个整数记录最大距离

       示例一:
       输入
       1,0,0,0,0,1,0,0,1,0,1

        0,0,1,1,0,0
       输出
       2

       说明
       当车停在第三个位置上时,离其最近的车距离为2(1~3)
       当车停在第四个位置上时,离其最近的车距离为2(4~6)
       其他位置距离为1
       因此最大距离为2
     */
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        String line = in.nextLine()
                .replaceAll(",", "");
        char[] sites = line.toCharArray();
        in.close();

        int max = 0;

        for (int i = 0; i < sites.length; i++) {
            char cur_site = sites[i];
            if (cur_site == '0') {
                int pre = line.indexOf('1', i);
                int suf = line.lastIndexOf('1', i);
                if (pre == -1) pre = 100;
                if (suf == -1) suf = line.length() - 1;
                int min = Math.min(pre - i, i - suf);
                if (min > max) max = min;
            }
        }

        System.out.println(max);

    }
}
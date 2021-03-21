public class CreateArray {
    public static void main(String[] args) {
        // 用数组存储各科成绩
        // 科目数
        int scoreNumber = 6;
        // 存储科目名称
        String[] scoreName = new String[scoreNumber];
        scoreName[0] = "语文";
        scoreName[1] = "数学";
        scoreName[2] = "英语";
        scoreName[3] = "生物";
        scoreName[4] = "化学";
        scoreName[5] = "物理";
        // 存储科目分数
        int[] scoreValue = new int[scoreNumber];
        // 给每一课随机赋值
        for (int i = 0; i < scoreNumber; i++) {
            scoreValue[i] = (int) (60 + Math.random() * 40);
        }
        //每一课对应的索引
        int scoreIndex = 0;
        // 存储最大值
        int MixScoreValue = 0;
        // 输出每一课的成绩 并且求最大值
        // TODO 如何处理有几门课都是最高分的情况
        // TODO 利用二维数组存储几年的的数据
        //nt[][] csoreArry = new int[3][6];
        for (int i = 0; i < scoreNumber; i++) {
            System.out.println(scoreName[i] + "的分数为: " + scoreValue[i]);
            if (scoreValue[i] > MixScoreValue) {
                MixScoreValue = scoreValue[i];
                scoreIndex = i;
            }
        }
        System.out.println(scoreNumber + "门课中," + scoreName[scoreIndex] + "的分数最高,为" + MixScoreValue);
     }
}

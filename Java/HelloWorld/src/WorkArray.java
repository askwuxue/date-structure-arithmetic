import java.util.Scanner;
public class WorkArray {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        // 科目数
        int scoreNumber = 6;
        // 存储的年数
        int historyYears = 6;
        // 开始年
        int startYear = 2014;
        // 起始分数
        int startSocre = 50;
        String[] scoreName = new String[scoreNumber];
        scoreName[0] = "语文";
        scoreName[1] = "数学";
        scoreName[2] = "英语";
        scoreName[3] = "生物";
        scoreName[4] = "化学";
        scoreName[5] = "物理";
        // 生成数据
        int[][] historyScore = new int[6][6];
        for (int i = 0; i < historyYears; i++) {
            for (int j = 0; j < scoreName.length; j++) {
                historyScore[i][j] = (int) (startSocre + Math.random() * 50);
                System.out.print(historyScore[i][j] + " ");
            }
            System.out.println();
        }
        int year = 0;
        // 年份索引
        int yearIndex = 0;
        // 某年最大分数
        int MixScore = 0;
        // 科目索引
        int scoreNameIndex = 0;
        // 科目索引数组
        int[] scoreNameArrIndex = new int[scoreNumber];
        // 某年最大分数索引数组
        int[] someYearrMixScoreIndex = new int[scoreNumber];
        //
        boolean flag = true;
        do {
            System.out.println("请输入您要进行的操作按下enter键：\n" +
                    "1: 查看某年的最好成绩 \n" +
                    "2: 查看某一年的平均成绩 \n" +
                    "3: 查看所有年份的最好成绩 \n" +
                    "4: 求某门课历年中的最好成绩");
            // 用户操作选择
            int inputNumber = in.nextInt();
            // 对用户的输入进行判断
            switch(inputNumber) {
                // TODO 求某年的最好成绩
                case 1: {
                    System.out.println("请输入2014-2019的某一年份：");
                    year = in.nextInt();
                    while(year < 2014 || year > 2019) {
                        System.out.println("输入有误！请输入2014-2019的某一年份：");
                        year = in.nextInt();
                    }
                    yearIndex = year - startYear;
                    scoreNameIndex = 0;
                    for (int j = 0; j < scoreNumber; j++) {
                        if (historyScore[yearIndex][j] > MixScore)
                            MixScore =historyScore[yearIndex][j];
                        scoreNameIndex = j;
                    }
                    System.out.println(year + "年的的最好成绩科目是: " + scoreName[scoreNameIndex] + "\n" +
                            "分数是: " + MixScore);
                };
                break;
                // TODO 求某一年的平均成绩
                case 2: {
                    year = in.nextInt();
                    while(year < 2014 || year > 2019) {
                        System.out.println("输入有误！请输入2014-2019的某一年份：");
                        year = in.nextInt();
                    }
                    yearIndex = year - startYear;
                    int sumScore = 0;
                    double avarageScore = 0;
                    for (int j = 0; j < scoreNumber; j++) {
                        sumScore += historyScore[yearIndex][j];
                    }
                    avarageScore = sumScore / scoreNumber;
                    System.out.println(year + "年的平均成绩为: " + avarageScore);
                }
                break;
                // TODO 求所有年份的最好成绩
                case 3: {
                    for (int i = 0; i < historyYears; i++) {
                        for (int j = 0; j < scoreNumber; j++) {
                            if (historyScore[i][j] > MixScore) {
                                MixScore = historyScore[i][j];
                                scoreNameIndex = j;
                            }
                        }
                        scoreNameArrIndex[i] = scoreNameIndex;
                        someYearrMixScoreIndex[i] = MixScore;
                        MixScore = 0;
                        scoreNameIndex = 0;
                    }
                    for (int i = 0; i < historyYears; i++) {
                        System.out.println((startYear + i) + "年的最好成绩科目是: " + scoreName[scoreNameArrIndex[i]] + "\n" +
                                "分数是: " + someYearrMixScoreIndex[i]);
                    }
                };
                break;
                // TODO 求某门课历年的最好成绩
                case 4: {
                    System.out.println("请输入要查询的课程编号：①语文，②数学，③英语，④生物，⑤化学，⑥物理");
                    int inputScoreIndex = in.nextInt();
                    while (inputScoreIndex < 1 || inputScoreIndex > 6) {
                        System.out.println("输入的课程编号有误!");
                        System.out.println("请输入要查询的课程编号：①语文，②数学，③英语，④生物，⑤化学，⑥物理");
                        inputScoreIndex = in.nextInt();
                    }
                    for (int i = 0; i < historyYears; i++) {
                        if (historyScore[i][inputScoreIndex - 1] > MixScore)
                            MixScore = historyScore[i][inputScoreIndex - 1];
                    }
                    System.out.println("2014-2019年" + scoreName[inputScoreIndex - 1] + "的最好成绩为: " + MixScore);
                }
                break;
                default: {
                    System.out.println("您的输入有误");
                    flag = false;
                    break;
                }
            }
        } while(!flag);
    }
}

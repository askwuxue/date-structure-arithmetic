package common;

import java.util.Scanner;
import app.LitterSupperMarketApp;

public class Judge {
    private Scanner in = LitterSupperMarketApp.in;

    /**
     * 对用户输入的商品index进行检查并返回合法值
     * @return
     */
    public boolean inputMerchandiseIndexLegalCheck(int min, int max, int input) {
        return (input >= min && input < max) ? false :true;
    }

    /**
     * 对用户首次进入check
     * @return 对用户input check结果 true: 正确    false：错误
     */
    public boolean checkInputOption(int inputOption) {
        return (inputOption == 1 || inputOption == 2) ? true : false;
    }

    /**
     * 用户非首次进入
     * @param customerFlag 在此表示用户非首次进入  为了函数重载 没有实际意义
     * @param inputOption 用户输入
     * @return 对用户input check结果 true: 正确    false：错误
     */
    public boolean checkInputOption(boolean customerFlag, int inputOption) {
        return (inputOption >= 1 && inputOption <= 4 ) ? true : false;
    }
}

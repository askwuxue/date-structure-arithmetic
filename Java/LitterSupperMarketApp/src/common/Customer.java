package common;

import static app.LitterSupperMarketApp.*;

import java.util.Scanner;

public class Customer {
    private Scanner in;
    private Judge judge;
    private LitterSupperMarket supperMarket;
    // 用户名
    private String name;
    // 用户余额
    private double money;
    // 用户购买商品数组
    private CustomerPurchaseMerchandise[] customerPurchaseMerchandise;
    // 用户是否开车
    private boolean isDrivingCar;
    // 判断用户状态 false: 非刚进入超市  true: 刚进入超市
    private boolean customerFlag;
    private boolean returnFlag;

    /**
     * 初始化用户信息的构造函数
     * @param name 用户姓名
     * @param money 用户账户资金
     * @param isDrivingCar 用户是否开车
     */
    public Customer(String name, double money, boolean isDrivingCar) {
        this.in = new Scanner(System.in);
        this.judge = new Judge();
        this.supperMarket = new LitterSupperMarket();
        this.name = name;
        this.money = money;
        this.isDrivingCar = isDrivingCar;
        this.customerFlag = true;
        this.returnFlag = false;
        this.customerPurchaseMerchandise = new CustomerPurchaseMerchandise[SHOP_CAR_MERCHANDISE_LIMIT];
        this.customerBehavior();
    }

    /**
     * 用户类创建后即调用的方法
     */
    private void customerBehavior() {
        // 用户选择退出时退出
        while(!returnFlag) {
            if (getCustomerFlag()) {
                firstEnter();
            } else {
                notFirstEnter();
            }
        }
        //System.out.println("欢迎");
    }

    /**
     * 获得用户状态
     * @return 用户是否首次进入
     */
    private boolean getCustomerFlag() {
        return this.customerFlag;
    }

    /**
     * 设置用户状态
     */
    private void setCustomerFlag() {
        this.customerFlag = false;
    }

    /**
     * 用户购物
     */
    private void shop() {
        int temp = -1;
        System.out.println("请输入要购买的商品编号");
        temp = getCustomerInput();
        // 用户输入商品index合法化检查 并设置
        while(judge.inputMerchandiseIndexLegalCheck(0, supperMarket.getKindNumber(), temp)) {
            System.out.println("请输入编号在" + 0 + "到" + supperMarket.getKindNumber() + "之间的商品编号");
            temp = getCustomerInput();
        }
        // 获取商品库存 等信息
        supperMarket.merchandiseMessage(1);
    }

    /**
     * 用户首次进入
     */
    private void firstEnter() {
        int temp = -1;
        System.out.println("请选择您的操作：1、去购物 2、退出购物");
        temp = getCustomerInput();
        while (!judge.checkInputOption(temp)) {
            System.out.println("您的选择有误，请重新选择：1、去购物 2、退出购物");
            temp = getCustomerInput();
        }
        setCustomerFlag();
        if (temp == 1) {
            shop();
        } else {
            returnShop();
        }
    }

    /**
     * 用户退出购物
     */
    private void returnShop() {
        this.returnFlag = true;
    }

    /**
     * 用户非首次进入
     */
    private void notFirstEnter() {
        int temp = -1;
        System.out.println("请选择您的操作：1、继续去购物 2、购买当前商品 3、查看购物车 4、退出购物");
        temp = getCustomerInput();
        while (!judge.checkInputOption(getCustomerFlag() ,temp)) {
            System.out.println("您的选择有误，请在1（去购物） 2（去结算） 3（查看购物车） 4（退出购物）之间进行选择");
            temp = getCustomerInput();
        }
        switch(temp) {
            case 1: {
                shop();
            };
            break;
            case 2: {

            };
            break;
            case 3: {

            };
            break;
            case 4: {
                returnShop();
            }
        }
    }

    /**
     * 询问用户输入并返回用户的输入
     * @return
     */
    private int getCustomerInput() {
        return in.nextInt();
    }
}

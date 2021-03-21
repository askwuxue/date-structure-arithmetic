package app;
import common.LitterSupperMarket;
import common.Customer;
import common.CustomerPurchaseMerchandise;
import common.Merchandise;

import java.util.Scanner;

public class LitterSupperMarketApp {
    //Scanner in = new Scanner(System.in);
    // VIP 折扣
    public static double DISCOUNT_VIP_FOR = 0.9;
    // 购物车商品种类限制
    public static int SHOP_CAR_MERCHANDISE_LIMIT = 10;
    //
    public static Scanner in = new Scanner(System.in);
    // 控制退出购物
    public static boolean RETURN_FLAG = true;
    // 程序入口 静态方法是没有this自引用的
    public static void main(String[] args) {
        // 购物车已有商品数量
        int shopCarCount = 0;
        // 初始化超市信息
        LitterSupperMarket supperMarket = new LitterSupperMarket();
        // 始化用户信息
        Customer customer = new Customer("张三", 100, true);
    }

    /**
     * 对静态变量进行改变的静态方法 静态方法内不能使用this指针 但是可以new一个对象进行操作
     * @param discountForVip
     * @param shopCarMerchandiseLimit
     */
    private static void staticVariableChange(double discountForVip, int shopCarMerchandiseLimit) {
        DISCOUNT_VIP_FOR = discountForVip;
        SHOP_CAR_MERCHANDISE_LIMIT = shopCarMerchandiseLimit;
    }























    // TODO 去购物
    private int goShop(CustomerPurchaseMerchandise[] customerPurchaseMerchandises, Merchandise[] merchandise, int shopCarCount) {
        Scanner in = new Scanner(System.in);
        int inputGoodsNumber = -1;

        inputGoodsNumber = in.nextInt();
        // TODO 对用户输入的商品ID进行check
        while(this.checkInputMerchandiseRange(inputGoodsNumber)) {
            System.out.println("请输入编号在" + 0 + "到" + (merchandise.length - 1) + "之间的商品编号");
            inputGoodsNumber = in.nextInt();
        }
        // TODO 更新用户购物车信息
        CustomerPurchaseMerchandise m = new CustomerPurchaseMerchandise();
        m.name = merchandise[inputGoodsNumber].getName();
        m.id = merchandise[inputGoodsNumber].getId();
        m.soldPrice = merchandise[inputGoodsNumber].getSoldPrice();
        m.count = 1;
        customerPurchaseMerchandises[shopCarCount] = m;
        // TODO 更新商品库存信息
        // 展示当前加入购物车的商品
        System.out.println("您已选择的商品是：" + customerPurchaseMerchandises[shopCarCount].name + ",价格是：" + customerPurchaseMerchandises[shopCarCount].soldPrice + ",件数：" + customerPurchaseMerchandises[shopCarCount].count + "件");
        return inputGoodsNumber;
    }
    // TODO 用户首次进入的check
    private boolean checkInputOption(boolean customerFlag, int inputSelect) {
        if (inputSelect != 1 && inputSelect !=2) {
            System.out.println("您的选择有误，请重新选择：1、去购物 2、退出购物");
            return true;
        }
        return false;
    }
    // TODO 对用户输入的商品范围进行check
    private boolean checkInputMerchandiseRange(int input) {
        if (input < 0 || input > 199) {
            return true;
        }
        return false;
    }
    // TODO 对用户选择进行判断
    public boolean checkInputOption(int inputSelect) {
        if (inputSelect != 1 && inputSelect !=2 && inputSelect != 3 && inputSelect != 4) {
            System.out.println("您的选择有误，请在1（去购物） 2（去结算） 3（查看购物车） 4（退出购物）之间进行选择");
            return true;
        }
        return false;
    }
    // TODO 结算  分一类商品单独结算和多类商品在购物车中一起结算
    public int settleAccounts(CustomerPurchaseMerchandise[] customerPurchaseMerchandise, Merchandise[] merchandise, int shopCarCount, double money, int inputGoodsNumber, boolean flag) {
        int inputSettleOption = -1;
        // 商品总价
        double totalCharge = 0;
        // 用户单间商品进行结算
        if (flag) {
            totalCharge = merchandise[inputGoodsNumber].getSoldPrice() * 1;
            System.out.println(merchandise[inputGoodsNumber].getName() + ", " + merchandise[inputGoodsNumber].getId() + ", " + merchandise[inputGoodsNumber].getSoldPrice()
            );
            System.out.println("请选择您的操作：1、提交订单 2、返回购物");
            // TODO 对用户的输入进行检证
            inputSettleOption = in.nextInt();
            return inputSettleOption;
            // 对购物车的多件商品进行结算
        } else {
            for (int i = 0; i < shopCarCount; i++) {
                totalCharge += customerPurchaseMerchandise[i].count * customerPurchaseMerchandise[i].soldPrice;
                System.out.println(customerPurchaseMerchandise[i].name + ", " + customerPurchaseMerchandise[i].id + ", " + customerPurchaseMerchandise[i].soldPrice + ", " + customerPurchaseMerchandise[i].count);
            }
            System.out.println("商品总金额：" + totalCharge + "元");
            System.out.println("请选择您的操作：1、提交订单 2、查看购物车");
            inputSettleOption = in.nextInt();
            return inputSettleOption;
        }
    }
    // TODO 用户查看购物车
    public void viewShopCar(CustomerPurchaseMerchandise[] customerPurchaseMerchandise, int shopCarCount) {
        for (int i = 0; i < shopCarCount; i++) {
            System.out.println(customerPurchaseMerchandise[i].name + ", " + customerPurchaseMerchandise[i].id+ ", " +customerPurchaseMerchandise[i].soldPrice+ ", " +customerPurchaseMerchandise[i].count);
        }
    }
}


package common;

public class LitterSupperMarket {
    private String supperMarketName;
    private String address;
    private int parkingCount;
    private double incomingSum;
    private int kindNumber;
    // 商品
    public Merchandise[] merchandise = new Merchandise[200];
    // 每件商品卖出的件数
    public int[] merchandiseSold;

    /**
     * 构造函数的性质 1 要求构造函数名和类名必须一致
     *             2 构造函数没有返回值
     *             3 构造函数的调用不能使用 . 操作符 只能使用new的形式调用
     *             4 如果只创建了有参数的构造函数 new时必须传递参数
     *             5 构造函数间的重载 只能使用 this(参数) 的形式 且this()必须是代码块内的第一行代码 但可以不是最后一行
     */
    public LitterSupperMarket() {
        this("家乐福超市", "上海市徐汇区漕河泾开发区", 200, 0, 200);
    }

    /**
     * 初始化的构造函数
     * @param supperMarketName 超市名
     * @param address 超市地址
     * @param parkingCount 超市停车位
     * @param incomingSum 超市收入
     * @param kindNumber 商品种类
     */
    public LitterSupperMarket(String supperMarketName, String address,int parkingCount, double incomingSum, int kindNumber) {
        this.supperMarketName = supperMarketName;
        this.address = address;
        this.parkingCount = parkingCount;
        this.incomingSum = incomingSum;
        this.kindNumber = kindNumber;
        // 初始化商品信息数组
        Merchandise m = new Merchandise();
        //System.out.println(merchandise[0]);
        for (int i = 0; i < kindNumber; i++) {
            merchandise[i] = m.init("商品" + i, "ID" +i,200);
        }
        System.out.println(merchandise);
    }

    public Merchandise merchandiseMessage(int inputMerchandiseIndex) {
        //System.out.println(merchandise);
        //System.out.println(kindNumber);
//        for (int i = 0; i < kindNumber; i++) {
//            System.out.println(merchandise[i].getName());
//        }
         return merchandise[inputMerchandiseIndex];
    }

    public int getKindNumber() {
        return this.kindNumber;
    }
}

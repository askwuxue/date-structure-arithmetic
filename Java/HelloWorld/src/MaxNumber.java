public class MaxNumber {
    public static void main(String[] args) {
        // 使用switch语句的时候，switch中的类型必须是int类型
        int a = 78;
        int b = 98;
        int c = 98;
        if(a == b && b == c) {
            System.out.println("a,b,c 三个数等大。");
        } else {
            if(a > b && a > c) {
                if(b > c) {
                    System.out.println("a,b,c三个数，从小到大排列依次是: a, b, c");
                } else if(b == c) {
                    System.out.println("a,b,c三个数，从小到大排列依次是: a, b, c, 其中b, c等大。");
                } else if(b < c) {
                    System.out.println("a,b,c三个数，从小到大排列依次是: a, c, b");
                }
            } else if(a < b && a < c) {
                if (b > c) {
                    System.out.println("a,b,c三个数，从小到大排列依次是: b, c, a");
                } else if(b == c) {
                    System.out.println("a,b,c三个数，从小到大排列依次是: c, b, a,其中b,c等大。");
                } else {
                    System.out.println("a,b,c三个数，从小到大排列依次是: c, b, a");
                }
            } else {
                if(b > c) {
                    if (b == a) {
                        System.out.println("a,b,c三个数，从小到大排列依次是: b, a, c, a == b;");
                    } else if (c == a) {
                        System.out.println("a,b,c三个数，从小到大排列依次是: b, a, c, a == c;");
                    } else {
                        System.out.println("a,b,c三个数，从小到大排列依次是: b, a, c");
                    }
                } else {
                    if (b == a) {
                        System.out.println("a,b,c三个数，从小到大排列依次是: c, a, b, a == b;");
                    } else if (c == a) {
                        System.out.println("a,b,c三个数，从小到大排列依次是: c, a, b, c == a;");
                    } else {
                        System.out.println("a,b,c三个数，从小到大排列依次是: c, a, b");
                    }
                }
            }
        }
    }
}

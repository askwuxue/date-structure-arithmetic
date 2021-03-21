public class ReferenceAndPrimaryDataType {
    public static void main(String[] args) {
        Merchandise m1;
        m1 = new Merchandise();
        Merchandise m2 = new Merchandise();
        Merchandise m3 = new Merchandise();
        Merchandise m4 = new Merchandise();
        Merchandise m5 = new Merchandise();
        System.out.println("m1: " + m1);
        System.out.println("m2: " + m2);
        System.out.println("m3: " + m3);
        System.out.println("m4: " + m4);
        System.out.println("m5: " + m5);

        m5 = m1;
        System.out.println("m5: " + m5);
    }
}

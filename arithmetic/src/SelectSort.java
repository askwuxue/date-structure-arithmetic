public class SelectSort {
    public static void main(String[] args) {
        int[] arr = new int[]{54, 78, 23, 1, 18, 9, 50, 21};
        selectSort(arr);
    }

    private static void selectSort(int[] arr) {
        int index = 0;
        for (int i = 0; i < arr.length - 1; i++) {
            int min = arr[i];
            for (int j = i + 1; j < arr.length; j++) {
                if (min > arr[j]) {
                    min = arr[j];
                    index = j;
                }
            }
            arr[index] = arr[i];
            arr[i] = min;
        }










        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + ", ");
        }
    }
}

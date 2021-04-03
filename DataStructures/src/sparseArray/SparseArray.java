package sparseArray;

// 实现二维数组转稀疏数组 稀疏数组恢复为二维数组
public class SparseArray {
    public static void main(String[] args) {

        // 创建一个二维数组
        int[][] chessArr = new int[11][11];
        chessArr[2][3] = 1;
        chessArr[4][6] = 2;

        // 记录二维数组中元素不为0的的数组个数
        int sum = 0;
        System.out.println("原始数组: ");
        // 遍历二维数组
        for (int[] row: chessArr) {
            for (int data: row) {
                if (data != 0) {
                    sum++;
                }
                System.out.printf("%d\t", data);
            }
            System.out.println();
        }
        System.out.println("二维数组中元素不为0的个数是: " + sum);


        // 创建稀疏数组
        int[][] sparseArray = new int[sum + 1][3];

        // 稀疏数组得到第一行的此时是固定的
        sparseArray[0][0] = 11;
        sparseArray[0][1] = 11;
        sparseArray[0][2] = sum;

        // 定义一个数存放稀疏数组的行数，第0行已经存放了默认的数据
        int count = 1;

        // 遍历二维数组 将元素不为0的数据赋值到稀疏数组中
        for (int i = 0; i < chessArr.length; i++) {
            for (int j = 0; j < chessArr[i].length; j++) {
                if (chessArr[i][j] != 0) {
                    sparseArray[count][0] = i;
                    sparseArray[count][1] = j;
                    sparseArray[count][2] = chessArr[i][j];
                    count++;
                }
            }
        }

        System.out.println("稀疏数组:");

        // 输出稀疏数组
        for (int[] row: sparseArray) {
            for (int data: row) {
                System.out.printf("%d\t", data);
            }
            System.out.println();
        }

        // 稀疏数组还原为二维数组
        int[][] chessArray2 = new int[sparseArray[0][0]][sparseArray[0][1]];

        // 遍历稀疏数组将值赋值给二维数组
        for (int i = 1; i < sparseArray.length; i++) {
            chessArray2[sparseArray[i][0]][sparseArray[i][1]] = sparseArray[i][2];
        }

        System.out.println("还原后的二维数组: ");
        for (int[] row : chessArray2) {
            for (int data : row) {
                System.out.printf("%d\t", data);
            }
            System.out.println();
        }
    }
}

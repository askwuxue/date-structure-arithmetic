class Solution {
  public int divide(int a, int b) {
      //特殊情况1, b=1
      if (b == 1){
          return a;
      }
      //特殊情况2, b=-1
      if (b == -1){
          return a == Integer.MIN_VALUE ? Integer.MAX_VALUE : -a;
      }
      //特殊情况3, a=0
      if (a == 0){
          return 0;
      }

      //确定符号
      boolean positive = (a ^ b) >= 0;
      //为避免溢出, 转换为负数进行计算
      a = a < 0 ? a : -a;
      b = b < 0 ? b : -b;
      //快速相减
      int quotient = 0;
      while (a <= b){
          int base = 1;
          int divisor = b;
          //使用减法, 避免溢出
          while (a - divisor <= divisor){
              divisor <<= 1;
              base <<= 1;
          }
          quotient += base;
          a -= divisor;
      }
      return positive ? quotient : -quotient;
  }
}
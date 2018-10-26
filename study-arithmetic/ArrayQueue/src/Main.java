import java.lang.reflect.Array;

public class Main {

    public static void main(String[] args) {
	// write your code here
        ArrayQuue q = new ArrayQuue(10);
        for (int i = 0; i < 10; i++) {
            q.push(i);
        }
        System.out.println(q.pop());
    }
}

class ArrayQuue {
    private Integer[] arr;
    private Integer size;
    private Integer first;
    private Integer end;
    public ArrayQuue(int initSize) {
        if (initSize < 0) {
            throw new IllegalArgumentException("initSize is not less 0");
        }
        arr = new Integer[initSize];
        size = 0;
        first = 0;
        end = 0;
    }

    public Integer pook() {
        if (size == 0) {
            return null;
        }
        return arr[first];
    }

    public void push(int num) {
        if (size == arr.length) {
            throw new IllegalArgumentException("the queue is full");
        }
        size++;
        arr[end] = num;
        end = end == arr.length - 1 ? 0 : ++end;
    }

    public Integer pop() {
        if (size == 0) {
            throw new IllegalArgumentException("the static is empty");
        }
        size--;
        int temp = first;
        first = first == arr.length - 1 ? 0 : ++first;
        return arr[temp];
    }
}

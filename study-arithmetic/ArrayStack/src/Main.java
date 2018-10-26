public class Main {

    public static void main(String[] args) {
	// write your code here
        ArrayStack stack = new ArrayStack(10);
        for (int i = 0; i < 10; i++) {
            stack.push(i);
        }
        System.out.println(stack.pop());
    }
}

class ArrayStack {
    private Integer[] arr;
    private Integer size;

    public ArrayStack(int initSize) {
        if (initSize < 0) {
            throw new IllegalArgumentException("the initSize not less 0");
        }
        arr = new Integer[initSize];
        size = 0;
    }

    // peek 操作  查看栈顶的元素 不弹出
    public Integer peek() {
        if (size == 0) {
            return null;
        }
        return arr[size - 1];
    }

    // push
    public void push(int num) {
        if (size == arr.length) {
            throw new IllegalArgumentException("stack is full");
        }
        arr[size++] = num;
    }

    // pop
    public int pop() {
        if (size == 0) {
            throw new IllegalArgumentException("stack is empty");
        }
        return arr[--size];
    }
}
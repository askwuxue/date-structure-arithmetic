package queue;


public class ArrayCircleQueue {
    public static void main(String[] args) {
        CircleQueue queue = new CircleQueue(3);
//        System.out.println(queue.isEmpty());
//        System.out.println(queue.isFull());
        queue.addQueue(2);
//        System.out.println(queue.isFull());
//        System.out.println(queue.isEmpty());
        System.out.println(queue.popQueue());
//        System.out.println(queue.isFull());
//        System.out.println(queue.isEmpty());
        queue.addQueue(3);
        queue.addQueue(4);
        System.out.println(queue.isFull());
        System.out.println(queue.isEmpty());
        queue.show();

        // TODO 数组空间不能复用 出队列只是移动了指针，实际数组的空间还是占有的，导致了数组空间的浪费
        // queue.addQueue(5);
    }
}

class CircleQueue {
    private int maxSize;
    private int head;
    private int end;
    private int[] arr;

    // 构造函数初始化队列
    public CircleQueue(int ArrmaxSize) {
        maxSize = ArrmaxSize;
        arr = new int[maxSize];

        // 环形队列的默认头指针和尾指针都为0
        head = 0;
        end = 0;
    }

    // 判断链表是否满
    public boolean isFull() {
        // return end == arr.length - 1;
        // 始终留一个空的位置做约定 所以maxSize 为3 时 队列长度为2时， 就认为队列已满
        return (end + 1) % maxSize == head;
    }

    // 判断链表是否为空 当头指针等于尾指针 队列已满
    public boolean isEmpty() {
        return end == head;
    }

    // 出队
    public int popQueue() {
        if (isEmpty()) {
            throw new RuntimeException("queue is empty");
        }

        // 当前的指针指向的是当前的出队元素 因为指针下一步会变 所以此时先暂存当前的队列头数据
        int value;
        value = arr[head];

        head = (head + 1) % maxSize;
        return value;
    }

    // 入队
    public void addQueue(int n) {
        if (isFull()) {
            throw new RuntimeException("queue is full");
        }

        arr[end] = n;
        end = (end + 1) % maxSize;
    }

    // 显示队列
    public void show() {
        for (int i = head; i < head + size(); i++) {
            System.out.println(arr[i]);
        }
    }

    // 获取队列的有效长度
    public int size() {
        return (end + maxSize - head) % maxSize;
    }


}

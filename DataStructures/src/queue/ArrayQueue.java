package queue;

public class ArrayQueue {

    public static void main(String[] args) {
        Queue queue = new Queue(3);
        System.out.println(queue.isEmpty());
        System.out.println(queue.isFull());
        queue.addQueue(2);
        System.out.println(queue.isFull());
        System.out.println(queue.isEmpty());
        System.out.println(queue.popQueue());
        System.out.println(queue.isFull());
        System.out.println(queue.isEmpty());
        queue.addQueue(3);
        queue.addQueue(4);
        System.out.println(queue.isFull());
        System.out.println(queue.isEmpty());

        // TODO 数组空间不能复用 出队列只是移动了指针，实际数组的空间还是占有的，导致了数组空间的浪费
        // queue.addQueue(5);
    }


}

class Queue {

    private int maxSize;
    private int head;
    private int end;
    private int[] arr;

    // 构造函数初始化队列
    public Queue(int ArrmaxSize) {
        maxSize = ArrmaxSize;
        arr = new int[maxSize];
        head = -1;
        end = -1;
    }

    // 判断链表是否满 尾指针等于指向了数组的最后一个元素 队列已满
    public boolean isFull() {
        return end == arr.length - 1;
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
        // 头部指针后移
        head++;
        return arr[head];
    }

    // 入队
    public void addQueue(int n) {
        if (isFull()) {
            throw new RuntimeException("queue is full");
        }

        // 尾指针后移
        end++;
        arr[end] = n;
    }

}

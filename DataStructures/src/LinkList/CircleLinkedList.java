package LinkList;

public class CircleLinkedList {
    public static void main(String[] args) {
        LinkedList list = new LinkedList();
//        list.add(5);
        list.show();
        list.output(1, 2, 5);
    }
}

class Person {
    public int no;
    public Person next;

    Person(int no) {
        this.no = no;
    }
}

class LinkedList {
    // 首先定义一个first指针默认的头节点
    Person first = new Person(-1);
    // 定义一个临时变量指向当前节点开始和first指向一个地址，对着节点的加入，cur不断移动
    Person cur = null;

    // 添加节点
    public void add(int numbers) {
        if (numbers < 1) {
            System.out.println("input numbers invalid");
            return;
        }
        // 根据参数创建节点
        for (int i = 1; i <= numbers; i++) {
            if (i == 1) {
                first = new Person(i);
                cur = first;
                continue;
            }
            cur.next = new Person(i);
            cur = cur.next;
        }
        cur.next = first;
    }

    // 打印节点
    public void show() {
        Person cur = first;
        if (first.next == null) {
            System.out.println("LinkedList is invalid");
            return;
        }
        // 没有遍历到最后一个元素
        while (cur.next != first) {
            System.out.println("person no: " + cur.no);
            cur = cur.next;
        }
    }

    /*
    * params
    * k 开始报数的位置 也就是从第几个开始报数
    * m 报数到几 出队
    * n 队的大小
    * */
    public void output(int k, int m, int n) {
        if (k < 0 || m < 0) {
            System.out.println("output params invalid");
            return;
        }

        // 添加元素到链表中
        this.add(n);

        // 创建一个辅助指针指向链表的最后一个节点
        Person helper = first;
        while (helper.next != first) {
            helper = helper.next;
        }
        System.out.println("helper.next is: " + helper.next);
        System.out.println("first is: " + first);


        // 根据k，将first， helper移动到正确的位置
        for (int i = 1; i < k; i++) {
            first = first.next;
            helper = helper.next;
        }

        while (helper != first) {
            for (int i = 1; i < m; i++) {
                first = first.next;
                helper = helper.next;
            }
            System.out.println("output is: " + first.no);
            helper = first;
            first = first.next;
            break;
        }
        System.out.println("lastOutput is: " + helper.no);
        return;
    }
}

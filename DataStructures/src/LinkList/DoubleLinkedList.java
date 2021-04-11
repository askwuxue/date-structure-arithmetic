package LinkList;

public class DoubleLinkedList {
    public static void main(String[] args) {
        HeroLinkList2 hero1 = new HeroLinkList2(1, "s", "j");
        HeroLinkList2 hero2 = new HeroLinkList2(3, "w", "s");
        HeroLinkList2 hero3 = new HeroLinkList2(2, "a", "c");
        HeroLinkList2 hero4 = new HeroLinkList2(4, "e", "f");
        HeroLinkList2 hero5 = new HeroLinkList2(5, "e", "f");
        LinkList2 list2 = new LinkList2();
//        list2.append(hero1);
        list2.append(hero2);
//        list2.append(hero3);
//        list2.append(hero4);
        list2.show();
        list2.delete(hero2);
        list2.insert(hero4);
        list2.insert(hero3);
        list2.insert(hero1);
        list2.insert(hero5);
        list2.show();
    }
}


// 定义一个英雄节点类
class HeroLinkList2 {
    public int no;
    public String name;
    public String nickname;

    // 指向链表的上一个元素
    HeroLinkList2 prev;

    // 指向链表下一个节点元素
    HeroLinkList2 next;

    // 初始化节点
    public HeroLinkList2(int no, String name, String nickname) {
        this.no = no;
        this.name = name;
        this.nickname = nickname;
    }

    // 重写节点的toString()方法
    @Override
    public String toString() {
        return "[HeroLinkList] no: " + no + ", name: " + name + ", nickname: " + nickname;
    }
}

// 链表
class LinkList2 {

    // 1. 生成一个头节点
    HeroLinkList2 head = new HeroLinkList2(0, "", "");

    // 2. 添加节点到链表尾部的方法
    public void append(HeroLinkList2 node) {
        HeroLinkList2 temp = head;
        while (temp.next != null) {
            temp = temp.next;
        }
        temp.next = node;
        node.prev = temp;
    }

    // 3. 删除一个节点
    public void delete(HeroLinkList2 node) {
        HeroLinkList2 target = head.next;
        boolean flag = false;
        if (head.next == null) {
            System.out.println("LinkList is empty");
            return;
        }

        while (target != null) {
            if (target.no == node.no) {
                flag = true;
                break;
            }
            target = target.next;
        }

        // 找到要删除的元素
        if (flag) {
            target.prev.next = target.next;
            if (target.next != null) {
                target.next.prev = target.prev;
            }
            System.out.println("delete is success....");
        } else {
            System.out.println("not find delete node");
            return;
        }
    }

    public void insert(HeroLinkList2 node) {
        HeroLinkList2 target = head.next;
        boolean flag = false;
        // 如果链表为空
        if (head.next == null) {
            head.next = node;
            node.prev = head;
            return;
        }
        // 链表不为空
        while (target != null) {
            // 节点已存在，不插入
            if (target.no == node.no) {
                System.out.println("node is existed...");
                return;
            }
            // 在链表的非尾结点插入
            if (node.no < target.no) {
                flag = true;
                break;
            }
            target = target.next;
        }

        // 在链表的非尾结点插入
        if (flag) {
            target.prev.next = node;
            node.next = target;
            node.prev = target.prev;
            target.prev = node;
            return;
        }
        this.append(node);
    }


    // 显示链表元素
    public void show() {
        HeroLinkList2 temp = head;
        if (temp.next == null) {
            System.out.println("LinkList is empty");
        }
        while (temp.next != null) {
            System.out.println(temp.next);
            temp = temp.next;
        }
    }
}
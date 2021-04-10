package LinkList;

public class SingleLinkList {
    public static void main(String[] args) {
        HeroLinkList hero1 = new HeroLinkList(1, "s", "j");
        HeroLinkList hero2 = new HeroLinkList(3, "w", "s");
        HeroLinkList hero3 = new HeroLinkList(2, "a", "c");
        HeroLinkList hero4 = new HeroLinkList(4, "e", "f");

        // test code
        // HeroLinkList hero5 = new HeroLinkList(2, "a", "c");
        HeroLinkList hero6 = new HeroLinkList(4, "a", "c");

        LinkList list = new LinkList();
        list.append(hero1);
        list.append(hero2);
        list.insert(hero3);
        list.insert(hero4);

        // test code
        // list.insert(hero5);
        list.append(hero6);
        list.delete(hero6);
        // list.delete(hero1);
//        list.delete(hero1);
//        list.delete(hero2);
//        list.delete(hero3);
        list.show();
//        list.delete(hero4);


        HeroLinkList head = list.getHead();

        int l = list.length(head);

        System.out.println("length: " + l);

        HeroLinkList lastIndex = list.findLastIndex(4);

        System.out.println(lastIndex);

//        list.show();
    }
}

// 定义一个英雄节点类
class HeroLinkList {
    public int no;
    public String name;
    public String nickname;

    // 定义一个指针指向链表下一个节点元素
    HeroLinkList next;

    // 初始化节点
    public HeroLinkList(int no, String name, String nickname) {
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
class LinkList {

    // 1. 生成一个头节点
    HeroLinkList head = new HeroLinkList(0, "", "");

    // 添加节点到链表尾部的方法
    public void append (HeroLinkList hero) {

        // TODO 定义一个变量存放头节点，因为头节点不可变
        HeroLinkList temp = head;

//        System.out.println("append function  HeroLinkList temp is： " + temp.next );

        // 节点的next属性不为null,当前节点非尾节点。继续找尾节点
        while (temp.next != null) {
            temp = temp.next;
        }

        // 添加到链表最后一个位置
        temp.next = hero;
    }

    // 在链表任意位置插入节点
    public void insert(HeroLinkList hero) {
        HeroLinkList temp = head;

        // 查找位置
        while (true) {

            // 链表为空
            if (temp.next == null) {
                temp.next = hero;
                break;
            }

            // 链表中已经存在
            if (temp.next.no == hero.no) {
                System.out.println("node is existed");
                break;
            }

            // 在查找链表中对应节点的前面插入
            if (temp.next.no > hero.no) {
                hero.next = temp.next;
                temp.next = hero;
                break;
            }

            // 继续向下找
            temp = temp.next;
        }
    }

    // 在链表中删除一个节点 修改找到的节点的前一个节点的next
    public void delete(HeroLinkList hero) {

        // 记录是否找到要删除的元素
        boolean flag = false;
        HeroLinkList temp = head;
        if (temp.next == null) {
            System.out.println("LinkList is empty");
        }

        // 链表不为空
        while (temp.next != null) {

            // 找到要删除的元素
            if (temp.next.no == hero.no) {
                temp.next = temp.next.next;
                flag = true;
                break;
            }
            temp = temp.next;
        }
        if (flag) {
            System.out.println("node delete success");
        } else {
            System.out.println("node delete failed");
        }

    }

    // 获得链表的头节点
    public HeroLinkList getHead() {
        return head;
    }

    // 获得链表的有效长度，不包括头节点
    public int length(HeroLinkList head) {

        int l = 0;

        // 当前节点
        HeroLinkList cur = head.next;

        // 当前节点不为null
        while (cur != null) {
            l++;
            cur = cur.next;
        }

        return l;
    }

    // 寻找链表中的倒数第k个数
    public HeroLinkList findLastIndex(int k) {

        // 获得链表的长度
        int l = this.length(head);

        // 合法性检验
        if (k < 1 || k > l) {
            throw new RuntimeException("input value invalid");
        }

        // 获得链表的第一个元素
        HeroLinkList cur = head.next;

        // 循环找到倒数第k的数
        for (int i = 0; i < l - k; i++) {
            cur = cur.next;
        }

        return cur;
    }

    // 显示链表元素
    public void show() {
        HeroLinkList temp = head;
        if (temp.next == null) {
            System.out.println("LinkList is empty");
        }
        while (temp.next != null) {
            System.out.println(temp.next);
            temp = temp.next;
        }
    }
}

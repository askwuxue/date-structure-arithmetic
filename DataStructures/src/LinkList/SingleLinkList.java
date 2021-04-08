package LinkList;

public class SingleLinkList {
    public static void main(String[] args) {
        HeroLinkList hero1 = new HeroLinkList(1, "s", "j");
        HeroLinkList hero2 = new HeroLinkList(2, "w", "s");
//        HeroLinkList hero3 = new HeroLinkList(2, "a", "c");
        HeroLinkList hero3 = new HeroLinkList(3, "a", "c");
        HeroLinkList hero4 = new HeroLinkList(0, "e", "f");

        LinkList list = new LinkList();
        list.append(hero1);
        list.append(hero2);
        list.insert(hero3);
        list.insert(hero4);
        list.show();
    }
}

// 定义一个节点类
class HeroLinkList {
    public int no;
    public String name;
    public String nickname;

    // 定义一个指针指向链表下一个元素
    HeroLinkList next;

    // 初始化节点
    public HeroLinkList(int no, String name, String nickname) {
        this.no = no;
        this.name = name;
        this.nickname = nickname;
    }

    // 重写节点的toString()
    @Override
    public String toString() {
        return "[HeroLinkList] no: " + no + ", name" + name + ", nickname: " + nickname;
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

        // 节点的next属性不为null,当前节点非尾节点
        while (temp.next != null) {
            temp = temp.next;
        }

        // 节点后移
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

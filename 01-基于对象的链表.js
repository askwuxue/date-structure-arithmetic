function Node (element) {
    this.element = element;
    this.next = null;
}

function LList () {
    this.head = new Node('head');
    this.find = find;
    this.findPrevious = findPrevious;
    this.insert = insert;
    this.remove = remove;
    this.display = display;
}

function find (item) {
    var currentNode = this.head;
    while (currentNode.element != item) {
        currentNode = currentNode.next;
    }
    return currentNode;
}

function insert (newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
}

function display () {
    var currentNode = this.head;
    while (!(currentNode.next == null)) {
        console.log(currentNode.next.element);
        currentNode = currentNode.next;
    }
}

function findPrevious (item) {
    var currentNode = this.head;
    while (!(currentNode.next == null) && currentNode.next.element != item) {
        currentNode = currentNode.next;
    }
    return currentNode;
}

function remove (item) {
    var previousNode = this.findPrevious(item);
    if (!(previousNode.next == null)) {
        previousNode.next = previousNode.next.next;
    }
} 

var cities = new LList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Carlisle", "Russellville");
cities.insert("Alma", "Russellville");
cities.display();
cities.remove("Carlisle");
cities.display();
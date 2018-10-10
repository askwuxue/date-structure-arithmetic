function Node (element) {
    this.element = element;
    this.next = null;
}

function LList () {
    this.head = new Node('head');
    this.head.next = this.head;
    this.find = find;
    this.insert = insert;
    this.display = display;
    this.findPrevious = findPrevious;
    this.remove = remove;
}

function find (item) {
    var currentNode = this.head;
    while (currentNode.element != item && currentNode.next.element != 'head') {
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
    while (currentNode.next != null && currentNode.next.element != 'head') {
        console.log(currentNode.next.element);
        currentNode = currentNode.next;
    }
}
function findPrevious (item) {
    var currentNode = this.head;
    while (currentNode.next != null && currentNode.next.element != item && currentNode.next.element != 'head') {
        currentNode = currentNode.next;
    }
    return currentNode;
}
function remove (item) {
    var previousNode = this.find(item);
    if (previousNode.next != null && previousNode.next.element != 'head') {
        currentNode = currentNode.next;
    }
}
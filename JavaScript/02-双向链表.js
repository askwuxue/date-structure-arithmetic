function Node (element) {
    this.element = element;
    this.next = null;
    this.previous = null;
}

function LList () {
    this.head = new Node('head');
    this.find = find;
    // this.findPrevious = findPrevious;
    this.insert = insert;
    this.remove = remove;
    this.display = display;
    this.findLast = findLast;
    this.displayReverse = displayReverse;
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
    newNode.previous = current;
    current.next = newNode;
}

function display () {
    var currentNode = this.head;
    while (!(currentNode.next == null)) {
        console.log(currentNode.next.element);
        currentNode = currentNode.next;
    }
}

// function findPrevious (item) {
//     var currentNode = this.head;
//     while (!(currentNode.next == null) && currentNode.next.element != item) {
//         currentNode = currentNode.next;
//     }
//     return currentNode;
// }

function remove (item) {
    var currentNode = this.find(item);
    if (!(currentNode.next == null)) {
        currentNode.previous.next = currentNode.next;
        currentNode.next.previous = currentNode.previous;
        currentNode.next = null;
        currentNode.previous = null;
    }
} 

function findLast () {
    var currentNode = this.head;
    while (!(currentNode.next == null)) {
        currentNode = currentNode.next;
    }
    return currentNode;
}

function displayReverse () {
    var currentNode = this.head;
    currentNode = this.findLast();
    while (!(currentNode.previous == null)) {
        console.log(currentNode.element);
        currentNode = currentNode.previous;
    }
}

var cities = new LList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Carlisle", "Russellville");
cities.insert("Alma", "Carlisle");
cities.display();
console.log('----------------------------------------------');
cities.remove("Carlisle");
cities.display();
console.log('-----------------------------------------------');
cities.displayReverse();
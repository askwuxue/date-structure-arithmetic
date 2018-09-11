const inStack = [];
const outStack = [];

function push (node) {
    inStack.push(node);
}

function pop () {
    if (!outStack.length) {
        while (inStack.length) {
            inStack.push(outStack.pop());
        }
    }
    return outStack.pop();
}

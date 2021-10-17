class MinStack {
  stack
  minStack
  constructor() {
    this.stack = []
    this.minStack = []
  }

  push(x: number): void {
    this.stack.push(x)
    this.minStack.push(this.minStack.length ? Math.min(this.minStack[this.minStack.length - 1], x) : x)
  }

  pop(): void {
    if (this.isEmpty()) {
      return
    }
    this.stack.pop()
    this.minStack.pop()
  }

  top(): number {
    if (this.isEmpty()) {
      return -1
    }
    return this.stack[this.stack.length - 1]
  }

  min(): number {
    if (this.isEmpty()) {
      return -1
    }
    return this.minStack[this.minStack.length - 1]
  }

  isEmpty (): boolean {
    if (this.stack.length) {
      return false
    }
    return true
  }
}

/**
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(x)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.min()
*/
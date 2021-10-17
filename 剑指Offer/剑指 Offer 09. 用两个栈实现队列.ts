class CQueue {
  stackIn
  stackOut
  constructor() {
    this.stackIn = []
    this.stackOut = []
  }

  appendTail(value: number): void {
    this.stackIn.push(value)
  }

  deleteHead(): number {
    if (this.isEmpty()) {
      return -1
    }
    if (!this.stackOut.length) {
      while (this.stackIn.length) {
        this.stackOut.push(this.stackIn.pop())
      }
    }
    return this.stackOut.pop()
  }

  isEmpty(): boolean {
    if (this.stackIn.length === 0 && this.stackOut.length === 0) {
      return true
    }
    return false
  }
  
}

/**
* Your CQueue object will be instantiated and called as such:
* var obj = new CQueue()
* obj.appendTail(value)
* var param_2 = obj.deleteHead()
*/
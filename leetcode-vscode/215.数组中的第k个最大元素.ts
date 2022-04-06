/*
 * @lc app=leetcode.cn id=215 lang=typescript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
// function findKthLargest(nums: number[], k: number): number {
//   nums.sort((v1, v2) => v1 - v2);
//   const len = nums.length;
//   return nums[len - k];
// }
function findKthLargest(nums: number[], k: number): number {
  const minHeap = new MinHeap();
  for (const num of nums) {
    if (k > minHeap.size()) {
      minHeap.push(num);
    } else {
      if (num > minHeap.peek()) {
        minHeap.pop();
        minHeap.push(num);
      }
    }
  }
  return minHeap.peek();
}

// https://juejin.cn/post/7026731118451752997
class MinHeap {
  private data: number[];
  // private capacity: number;
  constructor(data = []) {
    // 最小堆
    this.data = data;
    // this.capacity = 0;
  }
  // 长度
  size(): number {
    return this.data.length;
  }
  // 比较函数
  compare(a: number, b: number) {
    return a - b;
  }

  // 交换两个变量的值
  swap(index1: number, index2: number): void {
    // [a, b] = [b, a]
    [this.data[index1], this.data[index2]] = [
      this.data[index2],
      this.data[index1],
    ];
  }

  // 获取最小堆的值
  peek(): null | number {
    return this.size() === 0 ? null : this.data[0];
  }

  // 添加元素
  push(node: number) {
    this.data.push(node);
    // 调整位置
    this.siftUp(node, this.size() - 1);
  }

  // 添加元素到data的最后一位，然后向上调整位置
  siftUp(node: number, i: number) {
    let index = i;
    while (index > 0) {
      // 父节点的下标
      const parentIndex = (index - 1) >>> 1;
      // 父节点
      const parent = this.data[parentIndex];
      // 子节点 < 父节点
      if (this.compare(node, parent) < 0) {
        this.swap(index, parentIndex);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  // 删除最小堆的最小值
  pop(): null | number {
    if (this.size() === 0) {
      return null;
    }

    const last = this.data.pop();
    // 删除最小元素，将最后一个元素放在顶级节点的位置，然后向下调整
    if (this.size() !== 0) {
      this.data[0] = last;
      // 向下调整
      this.siftDown(last, 0);
    }
  }

  siftDown(node: number, i: number) {
    let index = i;
    const length = this.size();
    const halfLength = length >>> 1;
    while (index < halfLength) {
      // 左节点的下标
      const leftIndex = (index + 1) * 2 - 1;
      // 右节点的下标
      const rightIndex = leftIndex + 1;
      // 左节点
      const left = this.data[leftIndex];
      // 右节点
      const right = this.data[rightIndex];
      // left < 父节点
      if (this.compare(left, node) < 0) {
        // right < left ，right 最小
        if (rightIndex < length && this.compare(right, left) < 0) {
          this.swap(rightIndex, index);
          index = rightIndex;
        } else {
          // right >= left，left最小
          this.swap(leftIndex, index);
          index = leftIndex;
        }
        // left > node, right < node
        // right 最小
      } else if (rightIndex < length && this.compare(right, node) < 0) {
        this.swap(rightIndex, index);
        index = rightIndex;
      } else {
        // 根节点最小
        break;
      }
    }
  }
}
// @lc code=end

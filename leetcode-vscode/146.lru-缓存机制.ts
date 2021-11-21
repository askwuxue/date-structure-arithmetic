/*
 * @lc app=leetcode.cn id=146 lang=typescript
 *
 * [146] LRU 缓存机制
 */

// @lc code=start
class LRUCache {
    private map: Map<number, number>
    private capacityQueue: number[]
    private capacity: number
    constructor(capacity: number) {
        this.capacity = capacity
        this.map = new Map()
        this.capacityQueue = []
    }

    get(key: number): number {
        if (this.map.has(key)) {
            const index = this.capacityQueue.findIndex((item) => item === key)
            if (index === -1) {
                
            }
            this.capacityQueue.splice(index, 1)
            this.capacityQueue.push(key)
            return this.map.get(key)
        }
        return -1
    }

    put(key: number, value: number): void {
        if (this.capacity !== this.capacityQueue.length) {
            this.map.set(key, value)
            this.capacityQueue.push(key)
        } else {
            let least = this.capacityQueue.shift()
            this.map.delete(least)
        }
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end


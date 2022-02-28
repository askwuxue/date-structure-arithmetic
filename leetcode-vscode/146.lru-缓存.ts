/*
 * @lc app=leetcode.cn id=146 lang=typescript
 *
 * [146] LRU 缓存
 */

// @lc code=start
// 利用map的keys得到顺序结果的特性
class LRUCache {
    private caches: Map<number, number>
    constructor(private capacity: number) {
        this.caches = new Map()
    }

    get(key: number): number {
        let value = this.caches.get(key)
        if (value !== undefined) {
            this.caches.delete(key)
            this.caches.set(key, value)
            return value
        }
        return - 1
    }

    put(key: number, value: number): void {
        let oldValue = this.caches.get(key)
        // 更新数据
        if (oldValue !== undefined) {
            this.caches.delete(key)
            this.caches.set(key, value)
        } else {
            if (this.caches.size >= this.capacity) {
                // 获取map中最久的key
                let oldKey = this.caches.keys().next().value
                this.caches.delete(oldKey)
            }
            // 添加新数据
            this.caches.set(key, value)
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


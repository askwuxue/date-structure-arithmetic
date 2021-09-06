/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const nextGreaterElement = function(nums1, nums2) {
    const len1 = nums1.length
    const len2 = nums2.length
    const map = new Map()
    const stack = []
    const res = []
    for (let i = 0; i < len2; ++i) {
        // 使用一个单调栈， 如果栈顶元素比当前元素小，则出栈该元素，然后入栈该元素
        while (stack.length && stack[stack.length - 1] < nums2[i]) {
            map.set(stack.pop(), nums2[i])
        }
        stack.push(nums2[i])
    }
    for (let i = 0; i < len1; ++i) {
        res[i] = map.has(nums1[i]) ? map.get(nums1[i]) : -1
    }
    return res
};

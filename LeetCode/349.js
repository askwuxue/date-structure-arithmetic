/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = function(nums1, nums2) {
    const res = []
    if (nums1.length === 0 || nums2.length === 0) {
        return res
    }
    const set1 = new Set(nums1)
    const set2 = new Set(nums2)
    for (const key of set1.values()) {
        if (set2.has(key)) {
            res.push(key)
        }
    }
    return res
};

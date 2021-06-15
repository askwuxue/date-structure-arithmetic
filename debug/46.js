var permute = function (nums) {
    const res = new Array();
    const path = new Array();
    const used = new Array(nums.length).fill(false);
    nums.sort((v1, v2) => v1 - v2);
    const dfs = (nums, res, path, used) => {
        // console.log('nums: ', nums);
        if (path.length === nums.length) {
            res.push([...path]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1] || used[i]) {
                continue;
            }
            // 如果path中没有该数，则加入path
            path.push(nums[i]);
            used[i] = true;
            dfs(nums, res, path, used);
            used[i] = false;
            path.pop();
        }
        return res;
    }
    return dfs(nums, res, path, used)
};

const nums = [1, 1, 2];
const result = permute(nums);
console.log(result);
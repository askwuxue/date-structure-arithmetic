var permute = function (nums) {
    const res = new Array();
    const path = new Array();
    const used = new Array(nums.length).fill(false);
    // console.log(used[0]);
    const dfs = (nums, res, path, used) => {
        if (path.length === nums.length) {
            res.push([...path]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            // 如果path中没有该数，则加入path
            console.log(used);
            if (used[i]) {
                continue;
            }
            path.push(nums[i]);
            used[i] = true;
            dfs(nums, res, path);
            path.pop();
        }
        return res;
    }
    return dfs(nums, res, path, used)
};

const nums = [1, 2, 3];
const result = permute(nums);
console.log(result);